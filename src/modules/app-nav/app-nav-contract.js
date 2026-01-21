/**
 * App-level navigation contract.
 *
 * UI-only (no gameplay logic). Keeps the header menu configurable
 * as the project expands beyond Grammar into Vocabulary / Cambridge etc.
 */

export const APP_NAV_STATUS = {
  READY: "ready",
  DISABLED: "disabled",
};

/**
 * Soft validator used in dev to catch broken registry entries.
 * We keep it forgiving (returns null when OK) to avoid runtime crashes.
 */
export function validateAppNavItem(item) {
  if (!item || typeof item !== "object") return "Nav item must be an object";
  if (typeof item.id !== "string" || !item.id.trim()) return "Nav item missing id";
  if (typeof item.label !== "string" || !item.label.trim())
    return `Nav item '${item.id}' missing label`;

  if (item.status !== APP_NAV_STATUS.READY && item.status !== APP_NAV_STATUS.DISABLED)
    return `Nav item '${item.id}' has invalid status`;

  if (item.status === APP_NAV_STATUS.READY) {
    if (typeof item.href !== "string" || !item.href.trim())
      return `Nav item '${item.id}' is READY but missing href`;
  }

  if (item.order != null && typeof item.order !== "number")
    return `Nav item '${item.id}' has invalid order`;

  return null;
}
