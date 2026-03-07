// Future Perfect Continuous > Affirmative content registry (playable preview scaffold)
import { FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, FUTURE_PERFECT_CONTINUOUS_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_ID = "affirmative";
const FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL =
  FUTURE_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-perfect-continuous-affirmative",
  tenseLabel: "Future Perfect Continuous",
  sectionLabel: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
});

export function getFuturePerfectContinuousAffirmativeExercises(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Perfect Continuous",
  sectionLabel: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
});

export function getFuturePerfectContinuousAffirmativeGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS = Array.from(
  { length: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
