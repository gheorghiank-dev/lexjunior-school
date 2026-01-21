// Browser DOM helpers (platform layer)
// Keep direct window/document usage out of feature code.

export function getBrowserWindow() {
  return typeof window !== "undefined" ? window : null;
}

export function getBrowserDocument() {
  const w = getBrowserWindow();
  if (w?.document) return w.document;
  return typeof document !== "undefined" ? document : null;
}

export function scrollToTop(options = {}) {
  const { smooth = false } = options;
  const w = getBrowserWindow();
  if (!w || typeof w.scrollTo !== "function") return;

  if (smooth) {
    w.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    w.scrollTo(0, 0);
  }
}

// Used by theory pages to replicate the existing behavior:
// 1) scroll main into view (if present), then 2) force window scrollTo top.
export function scrollMainToTop(options = {}) {
  const { smooth = false, forceWindowTop = false } = options;
  const doc = getBrowserDocument();
  const mainEl = doc?.querySelector?.("main");

  if (mainEl && typeof mainEl.scrollIntoView === "function") {
    mainEl.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "start",
    });
    if (forceWindowTop) scrollToTop({ smooth });
    return;
  }

  scrollToTop({ smooth });
}

export function addDocumentEventListener(type, handler, options) {
  const doc = getBrowserDocument();
  if (!doc || typeof doc.addEventListener !== "function") return () => {};

  doc.addEventListener(type, handler, options);
  return () => {
    try {
      doc.removeEventListener(type, handler, options);
    } catch {
      // no-op
    }
  };
}

export function openPrintDialog() {
  const w = getBrowserWindow();
  if (w && typeof w.print === "function") w.print();
}

export function triggerFileDownload({ href, filename }) {
  const doc = getBrowserDocument();
  if (!doc) return;

  const a = doc.createElement("a");
  a.href = href;
  if (filename) a.download = filename;
  a.style.display = "none";

  doc.body.appendChild(a);
  a.click();
  a.remove();
}
