import { presentPerfectContinuousCore } from "./storage.js";

export const theoryProgress = presentPerfectContinuousCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
