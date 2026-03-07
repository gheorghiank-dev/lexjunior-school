// Past Perfect > Affirmative content registry (playable preview scaffold)
import { PAST_PERFECT_ROOMS_PER_SECTION, PAST_PERFECT_SECTIONS } from "../past-perfect-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_PERFECT_AFFIRMATIVE_SECTION_ID = "affirmative";
const PAST_PERFECT_AFFIRMATIVE_SECTION_LABEL =
  PAST_PERFECT_SECTIONS.find((s) => s.id === PAST_PERFECT_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const PAST_PERFECT_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-perfect-affirmative",
  tenseLabel: "Past Perfect",
  sectionLabel: PAST_PERFECT_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastPerfectAffirmativeExercises(roomNumber) {
  return PAST_PERFECT_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Perfect",
  sectionLabel: PAST_PERFECT_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastPerfectAffirmativeGlossaryItems(roomNumber) {
  return PAST_PERFECT_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_PERFECT_AFFIRMATIVE_ROOMS = Array.from(
  { length: PAST_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_AFFIRMATIVE_SECTION_ID,
      sectionLabel: PAST_PERFECT_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PAST_PERFECT_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
