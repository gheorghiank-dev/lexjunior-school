import { createTheoryProgress } from "../../../core/theory/createTheoryProgress.js";
import { pcStorage } from "./storage.js";

export const pcTheoryProgress = createTheoryProgress({ storage: pcStorage });

// Backwards-friendly named exports for future parity with PS.
export const markTheoryCompleted = (sectionId) =>
  pcTheoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  pcTheoryProgress.isTheoryCompleted(sectionId);
