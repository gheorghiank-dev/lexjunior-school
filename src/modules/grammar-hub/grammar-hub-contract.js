/**
 * Grammar Hub item contract.
 *
 * Drives the /grammar hub cards.
 * Intentionally UI-oriented and tense-agnostic.
 */

const ALLOWED_STATUSES = ["ready", "preview", "soon", "disabled"];

export function assertGrammarHubItem(item) {
  if (!item || typeof item !== "object") {
    throw new Error("GrammarHub: item must be an object");
  }

  const mustBeString = (key) => {
    if (typeof item[key] !== "string" || item[key].trim().length === 0) {
      throw new Error(`GrammarHub: '${key}' must be a non-empty string`);
    }
  };

  mustBeString("id");
  mustBeString("label");
  mustBeString("description");

  if (item.status != null) {
    if (typeof item.status !== "string" || !ALLOWED_STATUSES.includes(item.status)) {
      throw new Error(
        `GrammarHub: 'status' must be one of ${ALLOWED_STATUSES.join(", ")}`
      );
    }
  }

  if (item.order != null && typeof item.order !== "number") {
    throw new Error("GrammarHub: 'order' must be a number when provided");
  }

  if (item.to != null && typeof item.to !== "string") {
    throw new Error("GrammarHub: 'to' must be a string when provided");
  }

  if (item.ctaLabel != null && typeof item.ctaLabel !== "string") {
    throw new Error("GrammarHub: 'ctaLabel' must be a string when provided");
  }
}
