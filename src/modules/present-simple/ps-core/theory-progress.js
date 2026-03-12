import { psCore } from "./storage.js";
import { savePresentSimpleTheoryProgress } from "../../../core/platform/present-simple-progress.js";

export const theoryProgress = psCore.theoryProgress;

export const markTheoryCompleted = (sectionId) => {
  theoryProgress.markTheoryCompleted(sectionId);

  return Promise.resolve(savePresentSimpleTheoryProgress(sectionId)).catch(
    (error) => {
      console.warn("Failed to persist Present Simple theory progress:", error);
    },
  );
};

export const isTheoryCompleted = (sectionId) =>
  theoryProgress.isTheoryCompleted(sectionId);
