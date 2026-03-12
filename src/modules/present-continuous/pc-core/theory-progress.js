import { pcCore } from "./storage.js";
import { savePresentContinuousTheoryProgress } from "../../../core/platform/present-continuous-progress.js";

export const theoryProgress = pcCore.theoryProgress;

export const markTheoryCompleted = (sectionId) => {
  theoryProgress.markTheoryCompleted(sectionId);

  return Promise.resolve(savePresentContinuousTheoryProgress(sectionId)).catch(
    (error) => {
      console.warn(
        "Failed to persist Present Continuous theory progress:",
        error,
      );
    },
  );
};

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
