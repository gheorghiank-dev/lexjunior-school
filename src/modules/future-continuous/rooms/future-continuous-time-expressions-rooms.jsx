// Future Continuous > Time Expressions content registry (playable preview scaffold)
import { FUTURE_CONTINUOUS_ROOMS_PER_SECTION, FUTURE_CONTINUOUS_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL =
  FUTURE_CONTINUOUS_SECTIONS.find((s) => s.id === FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const FUTURE_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-continuous-time-expressions",
  tenseLabel: "Future Continuous",
  sectionLabel: FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getFutureContinuousTimeExpressionsExercises(roomNumber) {
  return FUTURE_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Continuous",
  sectionLabel: FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getFutureContinuousTimeExpressionsGlossaryItems(roomNumber) {
  return FUTURE_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_CONTINUOUS_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: FUTURE_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: FUTURE_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
