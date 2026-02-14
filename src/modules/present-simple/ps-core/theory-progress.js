import { storage } from "./storage.js";
import { createTenseTheoryProgress } from "../../tenses/core/tense-progress-kit.js";

export const THEORY_SECTION_IDS = {
  AFFIRMATIVE: "affirmative",
  NEGATIVE: "negative",
  INTERROGATIVE: "interrogative",
  USES: "uses",
  TIME_EXPRESSIONS: "time-expressions",
};

const api = createTenseTheoryProgress(storage);

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
