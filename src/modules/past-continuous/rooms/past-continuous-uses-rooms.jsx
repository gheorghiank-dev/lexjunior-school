// Past Continuous > Uses content registry (skeleton)
import { PAST_CONTINUOUS_ROOMS_PER_SECTION, PAST_CONTINUOUS_SECTIONS } from "../past-continuous-core/config.js";

export const PAST_CONTINUOUS_USES_EXERCISES_BY_ROOM = {};

export function getPastContinuousUsesExercises(roomNumber) {
  return PAST_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_USES_GLOSSARY_BY_ROOM = {};

export function getPastContinuousUsesGlossaryItems(roomNumber) {
  return PAST_CONTINUOUS_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_USES_SECTION_ID = "uses";
const PAST_CONTINUOUS_USES_SECTION_LABEL =
  PAST_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_CONTINUOUS_USES_SECTION_ID)?.title ?? "Uses";

export const PAST_CONTINUOUS_USES_ROOMS = Array.from(
  { length: PAST_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_CONTINUOUS_USES_SECTION_ID,
      sectionLabel: PAST_CONTINUOUS_USES_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
