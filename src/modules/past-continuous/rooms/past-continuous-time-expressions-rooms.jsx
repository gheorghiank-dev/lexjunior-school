// Past Continuous > Time Expressions content registry (playable preview scaffold)
import { PAST_CONTINUOUS_ROOMS_PER_SECTION, PAST_CONTINUOUS_SECTIONS } from "../past-continuous-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL =
  PAST_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-continuous-time-expressions",
  tenseLabel: "Past Continuous",
  sectionLabel: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getPastContinuousTimeExpressionsExercises(roomNumber) {
  return PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Continuous",
  sectionLabel: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getPastContinuousTimeExpressionsGlossaryItems(roomNumber) {
  return PAST_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_CONTINUOUS_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PAST_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises: PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
