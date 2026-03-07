import { futureContinuousCore } from "./storage.js";

export const theoryProgress = futureContinuousCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
