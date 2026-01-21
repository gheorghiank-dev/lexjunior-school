// Tense Services
// Opt-in helpers for building a tense module without copy-paste.
// Kept separate from `tense-kit.js` to avoid changing the module graph
// for existing tenses.

import { createNamespacedStorage } from "../storage/namespaced-storage.js";
import { createProgressManager } from "../progress/createProgressManager.js";
import { createTheoryProgress } from "../theory/createTheoryProgress.js";
import { createUseRoomEngine } from "../room-engine/createUseRoomEngine.js";
import { HUD as DefaultHUD } from "../room-engine/hud.js";

/**
 * Create a namespaced storage wrapper for a tense.
 *
 * @param {string} storagePrefix e.g. "ps_"
 */
export function createTenseStorage(storagePrefix) {
  return createNamespacedStorage(storagePrefix || "");
}

/**
 * Create the standard progress services for a tense.
 * Keeps legacy key patterns via createProgressManager + createTheoryProgress.
 */
export function createTenseProgress({ storage, sections = [], roomsPerSection = 7 }) {
  const progressManager = createProgressManager({
    storage,
    sections,
    roomsPerSection,
  });

  const theoryProgress = createTheoryProgress({ storage });

  return { progressManager, theoryProgress };
}

/**
 * Convenience factory for a standard room engine hook + its dependencies.
 *
 * This does NOT change UX by itself; it's an opt-in helper for new tenses.
 */
export function createTenseRoomEngine({
  storagePrefix,
  sections = [],
  roomsPerSection = 7,
  normalizeAnswer,
  HUD = DefaultHUD,
}) {
  const storage = createTenseStorage(storagePrefix);
  const { progressManager, theoryProgress } = createTenseProgress({
    storage,
    sections,
    roomsPerSection,
  });

  const useRoomEngine = createUseRoomEngine({
    normalizeAnswer,
    progressManager,
    HUD,
  });

  return {
    storage,
    progressManager,
    theoryProgress,
    useRoomEngine,
  };
}
