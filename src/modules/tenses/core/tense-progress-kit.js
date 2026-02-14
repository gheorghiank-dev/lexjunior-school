// Shared helpers for tense-specific storage and progress/theory management.
// This keeps Present Simple, Present Continuous (and future tenses) 1:1
// while delegating to the global core utilities.

import { createNamespacedStorage } from "../../../core/storage/namespaced-storage.js";
import { createTheoryProgress } from "../../../core/theory/createTheoryProgress.js";
import { createProgressManager } from "../../../core/progress/createProgressManager.js";

/**
 * Build a namespaced storage instance for a tense, given its local prefix.
 * Example prefix: "ps_" / "pc_".
 */
export function createTenseStorage(storagePrefix) {
  return createNamespacedStorage(storagePrefix);
}

/**
 * Build a theory-progress API over a given storage.
 * Returned API shape:
 *   - markTheoryCompleted(sectionId)
 *   - isTheoryCompleted(sectionId)
 */
export function createTenseTheoryProgress(storage) {
  return createTheoryProgress({ storage });
}

/**
 * Build a room-level progress manager for a tense.
 * Config is expected to be the per-tense config:
 *   - sections: array of section descriptors (with stable ids)
 *   - roomsPerSection: numeric constant (e.g. 7)
 */
export function createTenseProgressManager({ storage, sections, roomsPerSection }) {
  return createProgressManager({
    storage,
    sections,
    roomsPerSection,
  });
}
