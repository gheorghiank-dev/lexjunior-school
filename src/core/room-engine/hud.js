const ICON_KEY = "\u{1F511}";
const ICON_LOCKED = "\u{1F512}";

// Default copy (kept identical to the legacy Present Simple HUD_TEXT)
const DEFAULT_HUD_TEXT = {
  keyObtainedLabel: "Cheia este obtinuta.",
  keyMissingLabel: "Cheia nu este obtinuta.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia inca.",
};

const WARNED_ROOTS = new WeakSet();

export class HUD {
  constructor(root, hudText = DEFAULT_HUD_TEXT) {
    this.root = root;
    this.hudText = hudText || DEFAULT_HUD_TEXT;

    // Preferred: React-driven HUD API (set by <RoomHud /> on the root element)
    this.api = root?.__hudApi || null;
  }

  /**
   * Lazily pick up the React-driven API from the root element.
   *
   * This makes the HUD resilient to timing differences:
   * - if the HUD is constructed before <RoomHud /> attaches __hudApi,
   *   the first call to setProgress/setKeyState/showMessage will
   *   re-sync this.api from root.__hudApi.
   */
  ensureApi() {
    const root = this.root;
    if (!root) return;

    if (!this.api && root.__hudApi) {
      this.api = root.__hudApi;
    }
  }

  warnIfMissingApi() {
    const root = this.root;
    if (!root || this.api) return;
    if (WARNED_ROOTS.has(root)) return;
    WARNED_ROOTS.add(root);
    // Non-fatal: keep the game running, but surface a clear signal during dev.
    // (Some environments may not expose console — guard it.)
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined" && console?.warn) {
      console.warn(
        "[HUD] Missing root.__hudApi. Ensure <RoomHud ref={hudRootRef} /> is mounted and the ref points to it."
      );
    }
  }

  setProgress(percent) {
    this.ensureApi();
    if (!this.api?.setProgress) {
      this.warnIfMissingApi();
      return;
    }
    this.api.setProgress(percent ?? 0);
  }

  setKeyState({ hasKey, passed }) {
    this.ensureApi();
    if (!this.api?.setKeyState) {
      this.warnIfMissingApi();
      return;
    }

    const t = this.hudText || DEFAULT_HUD_TEXT;
    let label = t?.keyMissingLabel || "";
    if (hasKey) {
      label = t?.keyObtainedLabel || "";
    } else if (passed) {
      label = t?.keyMissingAfterPassLabel || "";
    }

    this.api.setKeyState({
      icon: hasKey ? ICON_KEY : ICON_LOCKED,
      label,
    });
  }

  // compat cu vechea versiune
  setKey(hasKey) {
    this.setKeyState({ hasKey, passed: !!hasKey });
  }

  showMessage(text, type = "info") {
    this.ensureApi();
    if (!this.api?.showMessage) {
      this.warnIfMissingApi();
      return;
    }
    this.api.showMessage(text || "", type || "info");
  }
}
