import UIKit
import WebKit

/// What the bridge needs from the screen that hosts the web view.
@MainActor
protocol BridgeHost: AnyObject {
    /// show the camera under a transparent web view (pairing), or hide it again
    func setCameraVisible(_ visible: Bool)
    func presentNative(_ vc: UIViewController)
}

/// A money-plan decision the page asked to send (docs/phone-api.md "Decisions need Face ID"), worked out here from
/// the request itself: which item and answer, what the Face ID prompt names, and the body that goes to the PC (built
/// again from exactly the checked fields, so nothing else rides along).
private struct Decision {
    /// request:<id> | permission:<key> | grant:<key>
    let key: String
    /// approve | always | no (a budget-change request) · on | off (a helper permission) · revoke (an "Always allow")
    let action: String
    let reason: String
    var body: [String: Any]
    /// the PC takes (and needs) the confirm block for request answers and for turning a permission on
    let sendsConfirm: Bool
}

/// The web UI's way to the PC, to pairing and to Face ID. The page calls
///     window.webkit.messageHandlers.gup.postMessage({op, ...})  -> Promise (mobile/web/native.mjs wraps it)
/// and gets events back through GupNative._event(name, data).
///
/// The PC address and the token stay in here and in the Keychain: the page asks for API calls by path (/v1/ only),
/// this class adds the base URL and the bearer token, does the request with URLSession (no redirects, no cookies, no
/// cache) and hands back {status, body}. The page never sees the token, so nothing in JavaScript (or web storage, or
/// a web inspector) can leak it: the two answers that hold one (POST /v1/pair, POST /v1/auth/rotate) are kept here.
///
/// The app lock: the bridge starts locked and locks again whenever the app goes to the background. While locked only
/// hello / unlock / lock.peek / cancel / settings answer; every PC request is refused.
///
/// Money-plan decisions (answering a budget-change request with Approve / Always allow / No, and every change to the
/// helper's permissions) need a fresh Face ID (or passcode) check each time, run HERE when the page sends one: the
/// request only leaves the phone after the check passed, with a confirm block for exactly that item and answer made
/// from the check's own time (on the PC's clock). The page can't make up, reuse or skip a confirmation: there is no
/// way for it to hand one in.
///
/// ops: hello · request {id, method, path, query, body, timeoutMs, title} · cancel {id} · pair.start · pair.stop ·
///      pair.torch {on} · pair.enter · pair.forget · settings · unlock {passcode} · lock.peek
/// events: pair {state: checking | paired | failed, ...} ·
///         lock {locked, state: idle | checking | cancelled | failed | no_passcode, biometry, passcode}
@MainActor
final class NativeBridge: NSObject, WKScriptMessageHandlerWithReply {
    static let name = "gup"

    weak var webView: WKWebView?
    weak var host: BridgeHost?
    let scanner = QRScanner()
    /// true when a message comes from the app's own page (main frame, a file inside the bundled web/)
    var isTrustedPage: (URL) -> Bool = { _ in false }

    private var pairing: Pairing?
    private var tasks: [Int: (serial: Int, task: Task<Void, Never>)] = [:]
    private var taskSerial = 0
    /// bumped by every pair.start / pair.stop, so a camera start that finishes late can't undo a stop
    private var scanGeneration = 0
    private var scanning = false
    private var checking = false
    /// the "enter code instead" fields, closed when the app locks
    private weak var codeAlert: UIAlertController?
    /// the PC address typed last (this run only), so a wrong code doesn't mean typing it again
    private var typedAddress = ""
    private var rejected: (text: String, until: Date)?

    let auth = OwnerAuth()
    private(set) var locked = true
    /// Face ID came up by itself once for this lock; after a cancel the owner taps to try again
    private var autoPrompted = false
    /// bumped by every lock(): a check that finishes after the app was locked again counts for nothing
    private var lockGeneration = 0
    private var lockState = "idle"
    /// the PC's clock minus this phone's (from GET /v1/status's serverTime), for the confirm block's time
    private var clockOffset: (seconds: TimeInterval, learned: Date)?
    private lazy var session: URLSession = {
        let c = URLSessionConfiguration.ephemeral          // no cookies, cache or credentials on disk
        c.requestCachePolicy = .reloadIgnoringLocalCacheData
        c.urlCache = nil
        c.httpCookieStorage = nil
        c.httpShouldSetCookies = false
        c.urlCredentialStorage = nil
        c.waitsForConnectivity = false
        c.httpMaximumConnectionsPerHost = 6
        return URLSession(configuration: c, delegate: NoRedirects.shared, delegateQueue: nil)
    }()

    override init() {
        super.init()
        scanner.onCode = { [weak self] text in self?.handleCode(text, fromCamera: true) }
        // a quick action / App Shortcut arrived (LaunchActions.swift): while locked it just waits (the page asks for it
        // once it's unlocked and drawn); unlocked, the page is told to look
        NotificationCenter.default.addObserver(forName: .gupLaunchAction, object: nil, queue: .main) { [weak self] _ in
            Task { @MainActor in
                guard let self, !self.locked else { return }
                self.emit("launch", [:])
            }
        }
    }

    // MARK: - messages from the page

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage,
                               replyHandler: @escaping (Any?, String?) -> Void) {
        guard message.frameInfo.isMainFrame, let url = message.frameInfo.request.url, isTrustedPage(url),
              let body = message.body as? [String: Any], let op = body["op"] as? String else {
            return replyHandler(nil, "refused")
        }
        if locked && !["hello", "unlock", "lock.peek", "cancel", "settings"].contains(op) {
            return op == "request" ? replyHandler(["error": "locked"], nil) : replyHandler(nil, "locked")
        }
        switch op {
        case "hello":
            replyHandler(hello(), nil)
        case "unlock":
            Task { replyHandler(await self.unlock(passcodeFirst: (body["passcode"] as? Bool) ?? false), nil) }
        case "lock.peek":
            Task { replyHandler(await self.peek(), nil) }
        case "request":
            guard let id = body["id"] as? Int else { return replyHandler(nil, "bad request") }
            tasks[id]?.task.cancel()
            taskSerial += 1
            let serial = taskSerial
            let task = Task { [weak self] in
                guard let self else { return replyHandler(["error": "aborted"], nil) }
                let result = await self.request(body)
                if self.tasks[id]?.serial == serial { self.tasks[id] = nil }
                replyHandler(result, nil)
            }
            tasks[id] = (serial, task)
        case "cancel":
            if let id = body["id"] as? Int { tasks[id]?.task.cancel() }
            replyHandler(nil, nil)
        case "launch.take":
            // the screen a quick action / App Shortcut asked for (not while locked: the check above refuses it)
            let action: Any = PendingLaunch.shared.take()?.rawValue ?? NSNull()
            replyHandler(["action": action], nil)
        case "pair.start":
            startScanning { replyHandler($0, nil) }
        case "pair.stop":
            stopScanning()
            replyHandler(nil, nil)
        case "pair.torch":
            replyHandler(["on": scanner.setTorch((body["on"] as? Bool) ?? false)], nil)
        case "pair.enter":
            askForCode()
            replyHandler(nil, nil)
        case "pair.forget":
            Task { replyHandler(await self.forget(), nil) }
        case "settings":
            if let url = URL(string: UIApplication.openSettingsURLString) { UIApplication.shared.open(url) }
            replyHandler(nil, nil)
        default:
            replyHandler(nil, "unknown op")
        }
    }

    /// the page was reloaded or its process died: nothing in flight belongs to anyone anymore
    func pageWillReload() {
        cancelAll()
        stopScanning()
        codeAlert?.dismiss(animated: false)
    }

    private func cancelAll() {
        tasks.values.forEach { $0.task.cancel() }
        tasks.removeAll()
    }

    private func hello() -> [String: Any] {
        if locked { return lockInfo() }
        do {
            pairing = try PairingStore.load()
        } catch {
            return ["native": 1, "locked": false, "paired": false, "keychain": "locked"]
        }
        guard let p = pairing else { return ["native": 1, "locked": false, "paired": false] }
        return ["native": 1, "locked": false, "paired": true, "host": p.shortHost, "fqdn": p.baseURL.host ?? "",
                "pairedAt": iso(p.pairedAt)]
    }

    // MARK: - app lock

    private func lockInfo() -> [String: Any] {
        let caps = OwnerAuth.capabilities()
        return ["native": 1, "locked": locked, "state": lockState, "biometry": caps.biometry, "passcode": caps.passcode]
    }

    private func setLockState(_ state: String) {
        lockState = state
        emit("lock", lockInfo())
    }

    /// The app went to the background: lock, stop everything in flight (a Face ID check on screen included).
    func lock() {
        lockGeneration += 1
        auth.cancel()
        autoPrompted = false
        codeAlert?.dismiss(animated: false)
        if !locked {
            locked = true
            cancelAll()
            stopScanning()
        }
        setLockState("idle")
    }

    /// Tells the page the lock state again; done runs once the page has taken it in.
    func syncLock(_ done: @escaping () -> Void) {
        emit("lock", lockInfo(), done: done)
    }

    /// The app is on screen and locked: Face ID comes up by itself, once per lock.
    func autoUnlock() {
        guard locked, !autoPrompted, !auth.busy else { return }
        Task { _ = await unlock(passcodeFirst: false) }
    }

    private func unlock(passcodeFirst: Bool) async -> [String: Any] {
        guard locked else { return ["unlocked": true] }
        guard !auth.busy else { return ["unlocked": false, "reason": "busy"] }
        autoPrompted = true
        let generation = lockGeneration
        setLockState("checking")
        let out = await auth.run(reason: "Unlock GupBudget", passcodeFirst: passcodeFirst)
        guard generation == lockGeneration, locked else { return ["unlocked": !locked] }
        let state: String
        switch out {
        case .passed:
            locked = false
            setLockState("idle")
            return ["unlocked": true]
        case .cancelled, .busy: state = "cancelled"
        case .failed: state = "failed"
        case .noPasscode: state = "no_passcode"
        }
        setLockState(state)
        return ["unlocked": false, "reason": state]
    }

    /// The lock screen's one line about the PC: how many things wait on the owner (a number, never an amount).
    private func peek() async -> [String: Any] {
        guard let p = try? PairingStore.load() else { return [:] }
        let out = await send(base: p.baseURL, token: p.pendingToken ?? p.token, method: "GET", path: "/v1/status",
                             query: [:], body: nil, timeout: 10)
        guard out.status == 200, let json = out.json, let counts = json["counts"] as? [String: Any] else { return [:] }
        let waiting = ((counts["requests"] as? Int) ?? 0) + ((counts["questions"] as? Int) ?? 0)
        return ["waiting": max(0, waiting)]
    }

    // MARK: - money-plan decisions (fresh Face ID each time)

    /// nil = not a decision (sent as it is). A decision that isn't well formed never leaves the phone (400 here).
    private static func decision(method: String, path: String, body: Data?, title: String) -> Result<Decision, LocalAnswer>? {
        guard method == "POST", path == "/v1/requests/answer" || path == "/v1/settings/helper" else { return nil }
        guard let body, let json = try? JSONSerialization.jsonObject(with: body) as? [String: Any] else {
            return .failure(.badRequest("The decision isn't a JSON object."))
        }
        let label = title.isEmpty ? "" : " · " + title
        if path == "/v1/requests/answer" {
            guard let id = json["id"] as? String, isItemId(id) else { return .failure(.badRequest("id is missing.")) }
            guard let answer = json["answer"] as? String, ["approve", "always", "no"].contains(answer) else {
                return .failure(.badRequest("answer must be approve, always or no."))
            }
            let words = ["approve": "Approve budget change", "always": "Always allow this kind of change",
                         "no": "Decline budget change"][answer]!
            return .success(Decision(key: "request:\(id)", action: answer, reason: words + label,
                                     body: ["id": id, "answer": answer], sendsConfirm: true))
        }
        // POST /v1/settings/helper: {permission, on} or {grant, on}; on must be a real true/false
        guard let onValue = json["on"] as? NSNumber, CFGetTypeID(onValue) == CFBooleanGetTypeID() else {
            return .failure(.badRequest("on must be true or false."))
        }
        let on = onValue.boolValue
        let permission = json["permission"] as? String
        let grant = json["grant"] as? String
        if let key = permission, grant == nil, json["grant"] == nil, isSwitchKey(key) {
            return .success(Decision(key: "permission:\(key)", action: on ? "on" : "off",
                                     reason: (on ? "Turn on a helper permission" : "Turn off a helper permission") + label,
                                     body: ["permission": key, "on": on], sendsConfirm: on))
        }
        if let key = grant, permission == nil, json["permission"] == nil, isSwitchKey(key) {
            return .success(Decision(key: "grant:\(key)", action: on ? "on" : "revoke",
                                     reason: "Change an \u{201C}Always allow\u{201D}" + label,
                                     body: ["grant": key, "on": on], sendsConfirm: false))
        }
        return .failure(.badRequest("Send either permission or grant."))
    }

    private enum Checked {
        /// the body to send (with its confirm block when the PC takes one)
        case body(Data)
        /// why nothing is sent: cancelled | failed | no_passcode | busy | locked
        case refused(String)
    }

    /// Face ID (or the passcode) for exactly this decision, then the body with its confirm block; or why not.
    private func confirm(_ d: Decision) async -> Checked {
        if auth.busy { return .refused("busy") }
        let generation = lockGeneration
        let out = await auth.run(reason: d.reason)
        guard generation == lockGeneration, !locked else { return .refused("locked") }
        switch out {
        case .passed(let method):
            var body = d.body
            if d.sendsConfirm {
                // the contract's own form (docs/phone-api.md): when the check passed, on the PC's clock, seconds, +00:00
                let f = DateFormatter()
                f.locale = Locale(identifier: "en_US_POSIX")
                f.timeZone = TimeZone(identifier: "UTC")
                f.dateFormat = "yyyy-MM-dd'T'HH:mm:ssxxxxx"
                let at = f.string(from: Date().addingTimeInterval(clockOffset?.seconds ?? 0))
                body["confirm"] = ["key": d.key, "action": d.action, "method": method, "at": at]
            }
            guard let data = try? JSONSerialization.data(withJSONObject: body) else { return .refused("failed") }
            return .body(data)
        case .cancelled: return .refused("cancelled")
        case .failed: return .refused("failed")
        case .noPasscode: return .refused("no_passcode")
        case .busy: return .refused("busy")
        }
    }

    /// A request or permission id as the PC makes them (uuids, plain keys): no spaces, quotes or control characters.
    private static func isItemId(_ s: String) -> Bool {
        (1...80).contains(s.count) && s.unicodeScalars.allSatisfy(CharacterSet.ascii(plus: "-_.:").contains)
    }

    private static func isSwitchKey(_ s: String) -> Bool {
        (1...40).contains(s.count) && s.unicodeScalars.allSatisfy(CharacterSet.ascii(plus: "").contains)
    }

    // MARK: - API requests

    /// An answer made on the phone without asking the PC (the page reads it like one from the PC).
    private enum LocalAnswer: Error {
        case badRequest(String)
        var reply: [String: Any] {
            switch self {
            case .badRequest(let message):
                let body = ["error": ["code": "bad_request", "message": message]]
                let data = (try? JSONSerialization.data(withJSONObject: body)) ?? Data()
                return ["status": 400, "body": String(decoding: data, as: UTF8.self)]
            }
        }
    }

    private func request(_ a: [String: Any]) async -> [String: Any] {
        guard let p = pairing else { return ["error": "not_paired"] }
        guard let method = a["method"] as? String, method == "GET" || method == "POST",
              let path = a["path"] as? String, Self.isApiPath(path) else { return ["error": "bad_request"] }
        // pairing and unpairing are the shell's own (pair.enter / pair.forget): POST /v1/pair answers with a token
        if path == "/v1/pair" || path == "/v1/auth/unpair" { return ["error": "bad_request"] }
        var query = (a["query"] as? [String: Any] ?? [:]).compactMapValues { $0 as? String }
        var body: Data? = nil
        if method == "POST" {
            body = Data(((a["body"] as? String) ?? "{}").utf8)
            if body!.count > 16 * 1024 { return LocalAnswer.badRequest("The request is over 16 KiB.").reply }
        }
        let timeout = max(1, min(60, ((a["timeoutMs"] as? Double) ?? 15000) / 1000))

        let title = String(((a["title"] as? String) ?? "").trimmingCharacters(in: .whitespacesAndNewlines).prefix(120))
        if let d = Self.decision(method: method, path: path, body: body, title: title) {
            switch d {
            case .failure(let local): return local.reply
            case .success(let decision):
                if decision.sendsConfirm, clockOffset == nil || Date().timeIntervalSince(clockOffset!.learned) > 600 {
                    // learn the PC's clock first, so the confirm block's time is on it
                    _ = await send(base: p.baseURL, token: p.pendingToken ?? p.token, method: "GET", path: "/v1/status",
                                   query: [:], body: nil, timeout: 10)
                }
                if Task.isCancelled { return ["error": "aborted"] }
                switch await confirm(decision) {
                case .refused(let why): return ["error": why]
                case .body(let checked): body = checked
                }
                query = [:]                           // nothing rides along that wasn't checked
                // the page gave up while Face ID was up: nothing is sent
                if Task.isCancelled { return ["error": "aborted"] }
            }
        }

        let rotating = method == "POST" && path == "/v1/auth/rotate"
        let usedPending = p.pendingToken != nil
        var out = await send(base: p.baseURL, token: p.pendingToken ?? p.token, method: method, path: path,
                             query: query, body: body, timeout: timeout)
        if usedPending, var now = pairing, now.pendingToken == p.pendingToken, let status = out.status {
            if (200..<300).contains(status) {
                // first success with the new token: from now on it's the only one the PC accepts
                now.token = p.pendingToken!
                now.pendingToken = nil
                pairing = now
                PairingStore.save(now)
            } else if status == 401 {
                // the PC doesn't take the rotated token (expired, or revoked): drop it and go on with the old one
                now.pendingToken = nil
                pairing = now
                PairingStore.save(now)
                if Task.isCancelled { return ["error": "aborted"] }
                out = await send(base: p.baseURL, token: p.token, method: method, path: path, query: query,
                                 body: body, timeout: timeout)
            }
        }
        if rotating, out.status == 200 { return keepRotatedToken(out.json, for: p) }
        return out.reply
    }

    /// POST /v1/auth/rotate answered with a new token: keep it in the Keychain as pending and give the page the
    /// answer without it.
    private func keepRotatedToken(_ json: [String: Any]?, for asked: Pairing) -> [String: Any] {
        guard !Task.isCancelled, pairing?.baseURL == asked.baseURL, pairing?.pairedAt == asked.pairedAt else {
            return ["error": "aborted"]
        }
        guard let json, let token = json["token"] as? String, PairLink.isToken(token), var now = pairing else {
            return ["status": 502, "body": #"{"error":{"code":"server_error","message":"The PC sent no usable key."}}"#]
        }
        now.pendingToken = token
        guard PairingStore.save(now) else {
            return ["status": 500, "body": #"{"error":{"code":"server_error","message":"Couldn't save the new key."}}"#]
        }
        pairing = now
        let created = (json["createdAt"] as? String) ?? ""
        let safe = (try? JSONSerialization.data(withJSONObject: ["rotated": true, "createdAt": created] as [String: Any])) ?? Data()
        return ["status": 200, "body": String(decoding: safe, as: UTF8.self)]
    }

    private struct Outcome {
        var status: Int?
        var body: Data?
        var error: String?
        var json: [String: Any]? { body.flatMap { try? JSONSerialization.jsonObject(with: $0) as? [String: Any] } }
        var reply: [String: Any] {
            if let status { return ["status": status, "body": String(decoding: body ?? Data(), as: UTF8.self)] }
            return ["error": error ?? "unreachable"]
        }
    }

    /// One request to the PC. token nil = POST /v1/pair (the only call made without one).
    private func send(base: URL, token: String?, method: String, path: String, query: [String: String], body: Data?,
                      timeout: Double) async -> Outcome {
        guard var c = URLComponents(url: base, resolvingAgainstBaseURL: false) else { return Outcome(error: "bad_request") }
        c.percentEncodedPath = path
        if !query.isEmpty {
            c.percentEncodedQuery = query.sorted { $0.key < $1.key }
                .map { Self.encode($0.key) + "=" + Self.encode($0.value) }.joined(separator: "&")
        }
        guard let url = c.url else { return Outcome(error: "bad_request") }
        var req = URLRequest(url: url, cachePolicy: .reloadIgnoringLocalCacheData, timeoutInterval: timeout)
        req.httpMethod = method
        if let token { req.setValue("Bearer " + token, forHTTPHeaderField: "Authorization") }
        req.setValue("application/json", forHTTPHeaderField: "Accept")
        if let body {
            req.setValue("application/json", forHTTPHeaderField: "Content-Type")
            req.httpBody = body
        }
        let sent = Date()
        do {
            let (data, response) = try await session.data(for: req, delegate: NoRedirects.shared)
            guard let http = response as? HTTPURLResponse else { return Outcome(error: "unreachable") }
            let out = Outcome(status: http.statusCode, body: data)
            if path == "/v1/status", http.statusCode == 200 { learnClock(out.json, sent: sent) }
            return out
        } catch let e as URLError {
            switch e.code {
            case .cancelled: return Outcome(error: "aborted")
            case .timedOut: return Outcome(error: "timeout")
            default: return Outcome(error: "unreachable")
            }
        } catch {
            return Outcome(error: Task.isCancelled ? "aborted" : "unreachable")
        }
    }

    /// GET /v1/status says the PC's time: keep how far this phone's clock is off (half the round trip counted).
    private func learnClock(_ json: [String: Any]?, sent: Date) {
        guard let s = json?["serverTime"] as? String else { return }
        let f = ISO8601DateFormatter()
        f.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        guard let pc = f.date(from: s) ?? ISO8601DateFormatter().date(from: s) else { return }
        let now = Date()
        let mid = sent.addingTimeInterval(now.timeIntervalSince(sent) / 2)
        clockOffset = (pc.timeIntervalSince(mid), now)
    }

    /// only the API's own paths: /v1/ plus plain segments (no dots, escapes, query or fragment)
    static func isApiPath(_ path: String) -> Bool {
        let ok = CharacterSet.ascii(plus: "/_-")
        return path.hasPrefix("/v1/") && path.count < 200 && !path.contains("//") && !path.hasSuffix("/")
            && path.unicodeScalars.allSatisfy(ok.contains)
    }

    private static func encode(_ s: String) -> String {
        let ok = CharacterSet.ascii(plus: "-._~")
        return s.addingPercentEncoding(withAllowedCharacters: ok) ?? ""
    }

    // MARK: - pairing

    private func startScanning(_ reply: @escaping ([String: Any]) -> Void) {
        checking = false
        rejected = nil
        scanGeneration += 1
        let generation = scanGeneration
        scanner.start { [weak self] result in
            guard let self else { return }
            guard generation == self.scanGeneration else {
                // stopped (or started again) while the camera was coming up
                if result == .running && !self.scanning { self.scanner.stop() }
                return reply(["error": "stopped"])
            }
            switch result {
            case .running:
                self.scanning = true
                self.host?.setCameraVisible(true)
                reply(["ok": true])
            case .denied: reply(["error": "denied"])
            case .noCamera: reply(["error": "no_camera"])
            }
        }
    }

    private func stopScanning() {
        scanGeneration += 1
        scanning = false
        scanner.stop()
        host?.setCameraVisible(false)
    }

    /// "Enter code instead": the PC address and the one-time code from Settings > Phones, typed into native fields
    /// and traded for a token here (POST /v1/pair), so neither the code nor the token passes through the page.
    private func askForCode() {
        guard codeAlert == nil else { return }
        let alert = UIAlertController(title: "Enter the code",
                                      message: "On your PC: GupBudget › Settings › Phones › Pair a phone. Type the PC address and the code shown there.",
                                      preferredStyle: .alert)
        let lastAddress = typedAddress
        alert.addTextField { f in
            f.placeholder = "PC address (https://…:10002)"
            f.text = lastAddress
            f.autocorrectionType = .no
            f.autocapitalizationType = .none
            f.spellCheckingType = .no
            f.keyboardType = .URL
            f.textContentType = .URL
        }
        alert.addTextField { f in
            f.placeholder = "Code, like K7QM-3XRT"
            f.autocorrectionType = .no
            f.autocapitalizationType = .allCharacters
            f.spellCheckingType = .no
            f.keyboardType = .asciiCapable
            f.textContentType = .oneTimeCode
        }
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel))
        alert.addAction(UIAlertAction(title: "Pair", style: .default) { [weak self, weak alert] _ in
            let fields = alert?.textFields ?? []
            guard fields.count == 2 else { return }
            self?.exchange(address: fields[0].text ?? "", code: fields[1].text ?? "")
        })
        codeAlert = alert
        host?.presentNative(alert)
    }

    private func exchange(address: String, code typed: String) {
        if locked || checking { return }
        typedAddress = address.trimmingCharacters(in: .whitespacesAndNewlines)
        guard let base = PairLink.typedBaseURL(address) else {
            return reject("", title: PairLink.Problem.badAddress.title,
                          message: "Type the PC address exactly as Settings › Phones shows it on your PC (your Tailscale name, then :10002).")
        }
        guard let code = PairLink.pairingCode(typed) else {
            return reject("", title: "That isn't a pairing code", message: "The code has 8 letters and digits, like K7QM-3XRT.")
        }
        checking = true
        let short = String(base.host?.split(separator: ".").first ?? "")
        emit("pair", ["state": "checking", "host": short])
        Task {
            let name = String(UIDevice.current.name.prefix(40))
            let body = try? JSONSerialization.data(withJSONObject: ["code": code, "name": name])
            let out = await self.send(base: base, token: nil, method: "POST", path: "/v1/pair", query: [:], body: body,
                                      timeout: 15)
            guard let status = out.status else {
                self.checking = false
                return self.reject("", title: "Can't reach \(short)",
                                   message: "Is Tailscale on on this phone, and the PC awake? Then try again.")
            }
            guard status == 201, let token = out.json?["token"] as? String, PairLink.isToken(token) else {
                self.checking = false
                let said = ((out.json?["error"] as? [String: Any])?["message"] as? String).map { String($0.prefix(240)) }
                switch status {
                case 403: return self.reject("", title: "Code not accepted", message: said ?? "Make a new code on the PC.")
                case 429: return self.reject("", title: "Too many tries", message: said ?? "Wait a minute, then try again.")
                default: return self.reject("", title: "The PC said no (HTTP \(status))", message: said ?? "Try a new code from the PC.")
                }
            }
            await self.check(PairLink(baseURL: base, token: token), code: "", host: short)
        }
    }

    private func handleCode(_ text: String, fromCamera: Bool) {
        if locked || (fromCamera && !scanning) { return }
        guard !checking else { return }
        // the same failed code stays in view: say it once, then give the owner a moment before trying it again
        if fromCamera, let r = rejected, r.text == text, Date() < r.until { return }
        switch PairLink.parse(text) {
        case .failure(let problem):
            reject(text, title: problem.title, message: problem.message)
        case .success(let link):
            checking = true
            UIImpactFeedbackGenerator(style: .medium).impactOccurred()
            let short = String(link.baseURL.host?.split(separator: ".").first ?? "")
            emit("pair", ["state": "checking", "host": short])
            Task { await self.check(link, code: text, host: short) }
        }
    }

    /// The new token's first request (GET /v1/status). It tells the PC the phone has it (Settings > Phones says
    /// "Paired with ..."), and only a token the PC accepts is saved.
    private func check(_ link: PairLink, code: String, host: String) async {
        let t0 = Date()
        let out = await send(base: link.baseURL, token: link.token, method: "GET", path: "/v1/status", query: [:],
                             body: nil, timeout: 15)
        let rtt = Int(Date().timeIntervalSince(t0) * 1000)
        defer { checking = false }
        // kept even if the app locked meanwhile: this request has paired the phone on the PC already
        guard let status = out.status else {
            return reject(code, title: "Can't reach \(host)",
                          message: "Is Tailscale on on this phone, and the PC awake? Then try again.")
        }
        guard status == 200, let json = out.json, json["api"] as? Int == 1 else {
            if status == 401 {
                return reject(code, title: "Code not valid any more",
                              message: "It expired, or another phone used it. Make a new one on the PC.")
            }
            if status == 503 {
                return reject(code, title: "The PC refused it",
                              message: "GupBudget on the PC refuses phones while Tailscale Funnel is on. Turn Funnel off on the PC.")
            }
            return reject(code, title: "The PC said no (HTTP \(status))", message: "Try a new code from the PC.")
        }
        let p = Pairing(baseURL: link.baseURL, token: link.token, pairedAt: Date(), pendingToken: nil)
        guard PairingStore.save(p) else {
            return reject(code, title: "Couldn't save the key", message: "The iPhone Keychain refused it. Unlock the phone and try again.")
        }
        cancelAll()                                   // anything still running used the old pairing
        pairing = p
        stopScanning()
        UINotificationFeedbackGenerator().notificationOccurred(.success)
        emit("pair", ["state": "paired", "host": host, "fqdn": link.baseURL.host ?? "", "rtt": rtt,
                      "pairedAt": iso(p.pairedAt)])
    }

    private func reject(_ code: String, title: String, message: String) {
        rejected = (code, Date().addingTimeInterval(4))
        UINotificationFeedbackGenerator().notificationOccurred(.error)
        emit("pair", ["state": "failed", "title": title, "message": message])
    }

    /// "Unpair this phone": the PC is asked to drop this phone's key (POST /v1/auth/unpair), then the Keychain item
    /// goes either way. pcRemoved false = the PC couldn't be told (it still accepts the key until it's removed in
    /// Settings > Phones there).
    private func forget() async -> [String: Any] {
        cancelAll()
        let p = pairing ?? (try? PairingStore.load())
        var removed = false
        if let p {
            let out = await send(base: p.baseURL, token: p.pendingToken ?? p.token, method: "POST", path: "/v1/auth/unpair",
                                 query: [:], body: Data("{}".utf8), timeout: 8)
            removed = out.status == 200 || out.status == 401
        }
        PairingStore.clear()
        pairing = nil
        return ["paired": false, "pcRemoved": removed]
    }

    // MARK: - events to the page

    private func emit(_ name: String, _ data: [String: Any], done: (() -> Void)? = nil) {
        guard let json = try? JSONSerialization.data(withJSONObject: data),
              let name = try? JSONSerialization.data(withJSONObject: [name]), let webView else { done?(); return }
        // `; true`: the script's value must be something WebKit can hand back, or the completion reports an error
        let js = "window.GupNative && GupNative._event(\(String(decoding: name, as: UTF8.self))[0], \(String(decoding: json, as: UTF8.self))); true"
        webView.evaluateJavaScript(js) { _, _ in done?() }
    }

    private func iso(_ d: Date) -> String {
        let f = ISO8601DateFormatter()
        f.formatOptions = [.withInternetDateTime]
        return f.string(from: d)
    }
}

/// The API never redirects; a redirect would mean something between the phone and the PC is wrong, so it's not
/// followed (the 3xx goes to the page as an error answer).
private final class NoRedirects: NSObject, URLSessionTaskDelegate {
    static let shared = NoRedirects()

    func urlSession(_ session: URLSession, task: URLSessionTask, willPerformHTTPRedirection response: HTTPURLResponse,
                    newRequest request: URLRequest, completionHandler: @escaping (URLRequest?) -> Void) {
        completionHandler(nil)
    }
}
