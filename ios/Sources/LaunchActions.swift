import AppIntents
import UIKit

/// The ways in from outside the app: the four Home Screen quick actions on the app icon and the two App
/// Shortcuts (Siri, the Action button, Spotlight). Every one only OPENS the app on a screen: it carries no text from
/// outside, reads nothing and writes nothing. The page takes the action only once the app is unlocked (the bridge
/// refuses `launch.take` while locked), so Face ID still comes first, and what it does is put text in the chat
/// field or open a tab; sending and every write stay the same gated flow as always.
enum LaunchAction: String {
    case log        // Ask sheet open, "Spent $" ready in the field
    case ask        // Ask sheet open, empty
    case groceries  // Ask sheet open, "How much is left for groceries?" ready
    case needs      // Spending > Needs a look

    /// the quick actions' `type` strings in Info.plist (ios/project.yml)
    private static let shortcutPrefix = "app.gupbudget.mobile.quick."

    init?(shortcut item: UIApplicationShortcutItem) {
        guard item.type.hasPrefix(Self.shortcutPrefix) else { return nil }
        self.init(rawValue: String(item.type.dropFirst(Self.shortcutPrefix.count)))
    }
}

extension Notification.Name {
    /// a launch action is waiting in PendingLaunch
    static let gupLaunchAction = Notification.Name("app.gupbudget.mobile.launchAction")
}

/// The one waiting action. It goes stale after a few minutes (a Face ID prompt that was never answered must not
/// turn into a screen change much later) and is taken once.
final class PendingLaunch {
    static let shared = PendingLaunch()
    private var waiting: (action: LaunchAction, at: Date)?
    private static let maxAge: TimeInterval = 300

    func set(_ action: LaunchAction) {
        waiting = (action, Date())
        NotificationCenter.default.post(name: .gupLaunchAction, object: nil)
    }

    func take() -> LaunchAction? {
        defer { waiting = nil }
        guard let w = waiting, Date().timeIntervalSince(w.at) < Self.maxAge else { return nil }
        return w.action
    }
}

// MARK: - App Shortcuts (iOS 16+): "Hey Siri, log a spend in GupBudget", the Action button

@available(iOS 16.0, *)
struct LogSpendIntent: AppIntent {
    static var title: LocalizedStringResource = "Log a spend"
    static var description = IntentDescription("Opens GupBudget with the chat ready for a spend. Nothing is saved until you send it.")
    static var openAppWhenRun = true

    @MainActor func perform() async throws -> some IntentResult {
        PendingLaunch.shared.set(.log)
        return .result()
    }
}

@available(iOS 16.0, *)
struct AskFinanceIntent: AppIntent {
    static var title: LocalizedStringResource = "Ask GupBudget"
    static var description = IntentDescription("Opens GupBudget on the Finance chat.")
    static var openAppWhenRun = true

    @MainActor func perform() async throws -> some IntentResult {
        PendingLaunch.shared.set(.ask)
        return .result()
    }
}

@available(iOS 16.0, *)
struct GupBudgetShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(intent: LogSpendIntent(),
                    phrases: ["Log a spend in \(.applicationName)", "Log spending in \(.applicationName)"],
                    shortTitle: "Log a spend", systemImageName: "creditcard")
        AppShortcut(intent: AskFinanceIntent(),
                    phrases: ["Ask \(.applicationName)", "Ask \(.applicationName) about my money"],
                    shortTitle: "Ask GupBudget", systemImageName: "sparkles")
    }
}
