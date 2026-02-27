import { pastSimpleStorage } from "./storage.js";
import { createTenseTheoryProgress } from "../../tenses/core/tense-progress-kit.js";

export const pastSimpleTheoryProgress = createTenseTheoryProgress(pastSimpleStorage);

export function markTheoryCompleted(sectionId) {
  return pastSimpleTheoryProgress.markTheoryCompleted(sectionId);
}

export function isTheoryCompleted(sectionId) {
  return pastSimpleTheoryProgress.isTheoryCompleted(sectionId);
}
