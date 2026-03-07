import { futurePerfectContinuousCore } from "./storage.js";

export const theoryProgress = futurePerfectContinuousCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
