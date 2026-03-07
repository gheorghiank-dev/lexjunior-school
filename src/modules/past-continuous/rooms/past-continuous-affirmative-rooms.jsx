// Past Continuous > Affirmative content registry (playable preview scaffold)
import { PAST_CONTINUOUS_ROOMS_PER_SECTION, PAST_CONTINUOUS_SECTIONS } from "../past-continuous-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_CONTINUOUS_AFFIRMATIVE_SECTION_ID = "affirmative";
const PAST_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL =
  PAST_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_CONTINUOUS_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const PAST_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-continuous-affirmative",
  tenseLabel: "Past Continuous",
  sectionLabel: PAST_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastContinuousAffirmativeExercises(roomNumber) {
  return PAST_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Continuous",
  sectionLabel: PAST_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastContinuousAffirmativeGlossaryItems(roomNumber) {
  return PAST_CONTINUOUS_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_CONTINUOUS_AFFIRMATIVE_ROOMS = Array.from(
  { length: PAST_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_CONTINUOUS_AFFIRMATIVE_SECTION_ID,
      sectionLabel: PAST_CONTINUOUS_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PAST_CONTINUOUS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
