// Future Perfect > Time Expressions content registry (playable preview scaffold)
import { FUTURE_PERFECT_ROOMS_PER_SECTION, FUTURE_PERFECT_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL =
  FUTURE_PERFECT_SECTIONS.find((s) => s.id === FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const FUTURE_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-perfect-time-expressions",
  tenseLabel: "Future Perfect",
  sectionLabel: FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getFuturePerfectTimeExpressionsExercises(roomNumber) {
  return FUTURE_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Perfect",
  sectionLabel: FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getFuturePerfectTimeExpressionsGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_PERFECT_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: FUTURE_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
