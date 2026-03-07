// Past Perfect Continuous > Negative content registry (playable preview scaffold)
import { PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PAST_PERFECT_CONTINUOUS_SECTIONS } from "../past-perfect-continuous-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_ID = "negative";
const PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_LABEL =
  PAST_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_ID)?.title ?? "Negative";

export const PAST_PERFECT_CONTINUOUS_NEGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-perfect-continuous-negative",
  tenseLabel: "Past Perfect Continuous",
  sectionLabel: PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_LABEL,
});

export function getPastPerfectContinuousNegativeExercises(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_CONTINUOUS_NEGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Perfect Continuous",
  sectionLabel: PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_LABEL,
});

export function getPastPerfectContinuousNegativeGlossaryItems(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_NEGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_PERFECT_CONTINUOUS_NEGATIVE_ROOMS = Array.from(
  { length: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_ID,
      sectionLabel: PAST_PERFECT_CONTINUOUS_NEGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PAST_PERFECT_CONTINUOUS_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
