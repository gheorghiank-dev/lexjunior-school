import { presentPerfectCore } from "./storage.js";

export const theoryProgress = presentPerfectCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  theoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
