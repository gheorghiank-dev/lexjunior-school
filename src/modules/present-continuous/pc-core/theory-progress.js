import { pcStorage } from "./storage.js";
import { createTenseTheoryProgress } from "../../tenses/core/tense-progress-kit.js";

export const pcTheoryProgress = createTenseTheoryProgress(pcStorage);

// Backwards-friendly named exports for future parity with PS.
export const markTheoryCompleted = (sectionId) =>
  pcTheoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  pcTheoryProgress.isTheoryCompleted(sectionId);
