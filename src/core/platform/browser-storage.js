/**
 * Browser storage access (platform edge).
 *
 * Goal: keep direct window/localStorage usage in ONE place.
 * This module is intentionally tiny and defensive.
 */

export function getBrowserStorage() {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage || null;
  } catch {
    return null;
  }
}
