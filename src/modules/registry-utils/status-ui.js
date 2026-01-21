/**
 * Shared UI mapping for registry-driven cards.
 *
 * Keep the "status -> tag + CTA" behavior consistent across hubs.
 */

export function getTagForStatus(status, { readyLabel = "Module active", soonLabel = "Coming soon" } = {}) {
  const s = status || "soon";

  const tagLabel = s === "ready" ? readyLabel : soonLabel;
  const tagClass = s === "ready" ? "card-tag" : "card-tag card-tag-soon";

  return { tagLabel, tagClass };
}

export function getCtaForStatus(status, {
  to,
  readyLabel,
  previewLabel,
} = {}) {
  const s = status || "soon";

  if (!to) return null;

  if (s === "ready") {
    return { label: readyLabel || "Intră", to };
  }

  if (s === "preview") {
    return { label: previewLabel || "Vezi preview", to };
  }

  return null;
}
