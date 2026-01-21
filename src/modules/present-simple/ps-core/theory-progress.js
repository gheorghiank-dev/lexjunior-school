import { storage } from "./storage.js";
import { createTheoryProgress } from "../../../core/theory/createTheoryProgress.js";

export const THEORY_SECTION_IDS = {
  AFFIRMATIVE: "affirmative",
  NEGATIVE: "negative",
  INTERROGATIVE: "interrogative",
  USES: "uses",
  TIME_EXPRESSIONS: "time-expressions",
};

const api = createTheoryProgress({ storage });

/**
 * Marchează teoria unei secțiuni ca fiind parcursă.
 * Cheia efectivă în localStorage va fi prefixată (ex: "ps_affirmative_theory_completed").
 */
export function markTheoryCompleted(sectionId) {
  return api.markTheoryCompleted(sectionId);
}

/**
 * Verifică dacă teoria unei secțiuni a fost parcursă.
 */
export function isTheoryCompleted(sectionId) {
  return api.isTheoryCompleted(sectionId);
}
