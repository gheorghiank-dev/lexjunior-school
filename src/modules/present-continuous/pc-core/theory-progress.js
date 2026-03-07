import { pcCore } from "./storage.js";

export const pcTheoryProgress = pcCore.theoryProgress;

export const markTheoryCompleted = (sectionId) =>
  pcTheoryProgress.markTheoryCompleted(sectionId);

export const isTheoryCompleted = (sectionId) =>
  pcTheoryProgress.isTheoryCompleted(sectionId);
