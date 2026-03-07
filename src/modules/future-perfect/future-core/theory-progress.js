import { futurePerfectCore } from "./storage.js";

export const theoryProgress = futurePerfectCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
