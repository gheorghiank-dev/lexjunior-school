// Sprint 14 – Download helper (browser)

import { getBrowserWindow, triggerFileDownload } from "../../../core/platform/browser-dom.js";

export function downloadPdfBytes(bytes, filename) {
  const blob = new Blob([bytes], { type: "application/pdf" });
  const w = getBrowserWindow();
  const url = w?.URL?.createObjectURL ? w.URL.createObjectURL(blob) : null;

  if (!url) return;

  triggerFileDownload({ href: url, filename: filename || "certificate.pdf" });
  w.setTimeout(() => {
    try {
      w.URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
  }, 0);
}