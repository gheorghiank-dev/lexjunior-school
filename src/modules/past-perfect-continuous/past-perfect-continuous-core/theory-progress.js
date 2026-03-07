import { pastPerfectContinuousCore } from "./storage.js";

export const theoryProgress = pastPerfectContinuousCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
