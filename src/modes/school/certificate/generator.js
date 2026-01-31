// Sprint 14 – Certificate PDF generator (pdf-lib)
// - Edits an existing PDF template (background) by drawing text on top.
// - Keeps gameplay and production UX untouched (School Mode only uses this).
//
// Notes:
// - Templates can vary (A4 portrait placeholders vs real landscape certificates).
// - We auto-adapt layout based on page aspect ratio.

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

// Portrait placeholder layout (A4) – kept for compatibility.
const PORTRAIT_LAYOUT = {
  name: { x: 180, y: 320, size: 28 },
  code: { x: 200, y: 245, size: 16 },
  date: { x: 180, y: 215, size: 16 },
  tense: { x: 180, y: 280, size: 18 },
};

// Landscape certificate layout (e.g. 2048x1365) – tuned for the new "CERTIFICAT" background.
// - Name: centered in the free space between "...se adeverește că" and "a absolvit modulul".
// - Code: top-left corner.
// - Date: just under the code.
const LANDSCAPE_LAYOUT = {
  // x is computed (centered); y is a good baseline for that free band.
  name: { yRatio: 0.48, maxWidthRatio: 0.62, sizeMax: 80, sizeMin: 40 },
  code: { x: 90, yFromTop: 90, size: 18, prefix: "Cod: " },
  date: { x: 90, yFromTop: 128, size: 16 },
  // Tense is usually already printed on the background; omit by default.
  tense: null,
};

function asString(v) {
  return (v ?? "").toString();
}

function isLandscape(page) {
  const w = page.getWidth();
  const h = page.getHeight();
  return w / h >= 1.2;
}

function drawTopLeft(page, text, { x, yFromTop, size, font, color }) {
  if (!text) return;
  const y = page.getHeight() - yFromTop;
  page.drawText(text, { x, y, size, font, color });
}

function drawCenteredAutoFit(
  page,
  text,
  { y, font, color, sizeMax, sizeMin, maxWidth },
) {
  if (!text) return;
  const w = page.getWidth();
  let size = sizeMax;

  // Shrink until it fits the max width.
  // (pdf-lib provides widthOfTextAtSize for embedded fonts.)
  while (size > sizeMin) {
    const tw = font.widthOfTextAtSize(text, size);
    if (tw <= maxWidth) break;
    size -= 2;
  }

  const textWidth = font.widthOfTextAtSize(text, size);
  const x = Math.max(24, (w - textWidth) / 2 + w * 0.1);

  page.drawText(text, {
    x,
    y,
    size,
    font,
    color,
  });
}

export async function generateCertificatePdf({
  templateBytes,
  studentName,
  studentCode,
  dateLabel,
  tenseLabel,
  layout,
}) {
  const bytes = templateBytes;
  if (!bytes || bytes.length === 0) {
    throw new Error("Certificate template is empty");
  }

  const pdfDoc = await PDFDocument.load(bytes);
  const pages = pdfDoc.getPages();
  if (!pages.length) {
    throw new Error("Certificate template has no pages");
  }

  const page = pages[0];
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  // Simple, readable dark ink. (We avoid relying on CSS.)
  const ink = rgb(0.12, 0.14, 0.18);

  const name = asString(studentName).trim();
  const code = asString(studentCode).trim();
  const dateStr = asString(dateLabel).trim();
  const tenseStr = asString(tenseLabel).trim();

  const landscape = isLandscape(page);
  const base = landscape ? LANDSCAPE_LAYOUT : PORTRAIT_LAYOUT;
  const L = { ...base, ...(layout || {}) };

  // LANDSCAPE path (certificate background)
  if (landscape) {
    // Code (top-left)
    if (code && L.code) {
      const c = `${L.code.prefix || ""}${code}`;
      drawTopLeft(page, c, {
        x: L.code.x,
        yFromTop: L.code.yFromTop,
        size: L.code.size,
        font,
        color: ink,
      });
    }

    // Date (under the code)
    if (dateStr && L.date) {
      drawTopLeft(page, dateStr, {
        x: L.date.x,
        yFromTop: L.date.yFromTop,
        size: L.date.size,
        font,
        color: ink,
      });
    }

    // Name (centered, auto-fit)
    if (L.name) {
      const y = page.getHeight() * (L.name.yRatio ?? 0.61);
      const maxWidth = page.getWidth() * (L.name.maxWidthRatio ?? 0.62);
      drawCenteredAutoFit(page, name, {
        y,
        font: bold,
        color: ink,
        sizeMax: L.name.sizeMax ?? 56,
        sizeMin: L.name.sizeMin ?? 28,
        maxWidth,
      });
    }

    // Tense is omitted by default for landscape certificates. If a tense layout is explicitly provided, draw it.
    if (tenseStr && L.tense) {
      page.drawText(tenseStr, {
        x: L.tense.x,
        y: L.tense.y,
        size: L.tense.size,
        font,
        color: ink,
      });
    }

    return await pdfDoc.save();
  }

  // PORTRAIT path (placeholder background)
  if (tenseStr) {
    page.drawText(tenseStr, {
      x: L.tense.x,
      y: L.tense.y,
      size: L.tense.size,
      font,
      color: ink,
    });
  }

  page.drawText(name || "", {
    x: L.name.x,
    y: L.name.y,
    size: L.name.size,
    font: bold,
    color: ink,
  });

  if (code) {
    page.drawText(code, {
      x: L.code.x,
      y: L.code.y,
      size: L.code.size,
      font,
      color: ink,
    });
  }

  if (dateStr) {
    page.drawText(dateStr, {
      x: L.date.x,
      y: L.date.y,
      size: L.date.size,
      font,
      color: ink,
    });
  }

  return await pdfDoc.save();
}
