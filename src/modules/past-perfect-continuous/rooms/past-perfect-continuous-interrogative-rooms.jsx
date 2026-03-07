// Past Perfect Continuous > Interrogative content registry (playable preview scaffold)
import { PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PAST_PERFECT_CONTINUOUS_SECTIONS } from "../past-perfect-continuous-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID = "interrogative";
const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL =
  PAST_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-perfect-continuous-interrogative",
  tenseLabel: "Past Perfect Continuous",
  sectionLabel: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL,
});

export function getPastPerfectContinuousInterrogativeExercises(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Perfect Continuous",
  sectionLabel: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL,
});

export function getPastPerfectContinuousInterrogativeGlossaryItems(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS = Array.from(
  { length: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID,
      sectionLabel: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
