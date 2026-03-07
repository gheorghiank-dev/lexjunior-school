// Present Perfect Continuous > Time Expressions content registry (playable preview scaffold)
import { PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PRESENT_PERFECT_CONTINUOUS_SECTIONS } from "../present-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL =
  PRESENT_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "present-perfect-continuous-time-expressions",
  tenseLabel: "Present Perfect Continuous",
  sectionLabel: PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getPresentPerfectContinuousTimeExpressionsExercises(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Present Perfect Continuous",
  sectionLabel: PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getPresentPerfectContinuousTimeExpressionsGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises: PRESENT_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
