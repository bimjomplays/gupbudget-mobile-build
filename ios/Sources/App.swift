import UIKit
import WebKit

@main
final class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil) -> Bool {
        true
    }

    func application(_ application: UIApplication,
                     configurationForConnecting session: UISceneSession,
                     options: UIScene.ConnectionOptions) -> UISceneConfiguration {
        UISceneConfiguration(name: "Default", sessionRole: session.role)
    }
}

final class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options: UIScene.ConnectionOptions) {
        guard let scene = scene as? UIWindowScene else { return }
        let window = UIWindow(windowScene: scene)
        window.overrideUserInterfaceStyle = .dark
        window.rootViewController = WebViewController()
        window.makeKeyAndVisible()
        self.window = window
    }
}

/// The whole app: one full-screen WKWebView showing the bundled web UI (web/index.html, built into ios/web/ by
/// scripts/build-mobile-web.mjs). The page reads only inside web/ (loadFileURL's read access is that folder), keeps
/// nothing on the phone (non-persistent data store: no cookies, storage or cache survive a restart) and lays itself
/// out under the notch and home bar with env(safe-area-inset-*), so the web view ignores the safe area. A tapped
/// http(s) link opens in Safari; every other way out of web/ is refused. Web Inspector only in Debug builds.
final class WebViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    private var webView: WKWebView!
    /// web/ inside the app bundle; nil only if the build left it out
    private let webRoot = Bundle.main.url(forResource: "web", withExtension: nil)
    private let background = UIColor(named: "LaunchBG") ?? .black

    override var preferredStatusBarStyle: UIStatusBarStyle { .lightContent }

    override func loadView() {
        let config = WKWebViewConfiguration()
        config.websiteDataStore = .nonPersistent()
        config.defaultWebpagePreferences.preferredContentMode = .mobile
        config.preferences.javaScriptCanOpenWindowsAutomatically = false
        config.dataDetectorTypes = []

        webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = self
        webView.uiDelegate = self
        // no white flash before the page paints: the web view shows the launch screen colour until then
        webView.isOpaque = false
        webView.backgroundColor = background
        webView.scrollView.backgroundColor = background
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.bounces = false
        webView.allowsBackForwardNavigationGestures = false
        webView.allowsLinkPreview = false
        #if DEBUG
        if #available(iOS 16.4, *) { webView.isInspectable = true }
        #endif
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        loadHome()
    }

    private func loadHome() {
        guard let root = webRoot else { return showMissingUI() }
        let index = root.appendingPathComponent("index.html")
        guard FileManager.default.fileExists(atPath: index.path) else { return showMissingUI() }
        webView.loadFileURL(index, allowingReadAccessTo: root)
    }

    private func showMissingUI() {
        webView.loadHTMLString("""
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <body style="background:#0d0e10;color:#ececef;font:17px -apple-system;padding:60px 24px">
            GupBudget: the web UI (web/index.html) is missing from this build.</body>
            """, baseURL: nil)
    }

    private func isInsideWebRoot(_ url: URL) -> Bool {
        guard url.isFileURL, let root = webRoot?.standardizedFileURL.resolvingSymlinksInPath().path else { return false }
        let path = url.standardizedFileURL.resolvingSymlinksInPath().path
        return path == root || path.hasPrefix(root + "/")
    }

    // MARK: - WKNavigationDelegate

    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        guard let url = navigationAction.request.url else { return decisionHandler(.cancel) }
        if isInsideWebRoot(url) || url.absoluteString == "about:blank" {
            return decisionHandler(.allow)
        }
        // only a link the user tapped leaves the app; the page can't push the phone to another site on its own
        if url.scheme == "https" || url.scheme == "http", navigationAction.navigationType == .linkActivated {
            UIApplication.shared.open(url)
        }
        decisionHandler(.cancel)
    }

    /// iOS can kill the page's process in the background (memory pressure); start it again instead of a blank screen
    func webViewWebContentProcessDidTerminate(_ webView: WKWebView) {
        loadHome()
    }

    // MARK: - WKUIDelegate

    /// target=_blank links: a tapped http(s) one opens in Safari, nothing else (no second web view)
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = navigationAction.request.url, url.scheme == "https" || url.scheme == "http",
           navigationAction.navigationType == .linkActivated {
            UIApplication.shared.open(url)
        }
        return nil
    }

    func webView(_ webView: WKWebView, runJavaScriptAlertPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping () -> Void) {
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in completionHandler() })
        present(alert, animated: true)
    }

    func webView(_ webView: WKWebView, runJavaScriptConfirmPanelWithMessage message: String,
                 initiatedByFrame frame: WKFrameInfo, completionHandler: @escaping (Bool) -> Void) {
        let alert = UIAlertController(title: nil, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel) { _ in completionHandler(false) })
        alert.addAction(UIAlertAction(title: "OK", style: .default) { _ in completionHandler(true) })
        present(alert, animated: true)
    }
}
