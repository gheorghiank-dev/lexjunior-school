/**
 * Generic "theory done" gating.
 *
 * Storage key pattern is kept identical to legacy:
 *   `${sectionId}_theory_completed`
 */

export function createTheoryProgress({ storage }) {
  return {
    markTheoryCompleted(sectionId) {
      if (!sectionId) return;
      storage.set(`${sectionId}_theory_completed`, true);
    },

    isTheoryCompleted(sectionId) {
      if (!sectionId) return false;
      return Boolean(storage.get(`${sectionId}_theory_completed`, false));
    },
  };
}
