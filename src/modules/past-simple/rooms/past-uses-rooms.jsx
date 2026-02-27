// Past Simple > Uses content registry (skeleton)
import { PAST_SIMPLE_ROOMS_PER_SECTION, PAST_SIMPLE_SECTIONS } from "../past-core/config.js";

export const PAST_SIMPLE_USES_EXERCISES_BY_ROOM = {};

export function getPastSimpleUsesExercises(roomNumber) {
  return PAST_SIMPLE_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_USES_GLOSSARY_BY_ROOM = {};

export function getPastSimpleUsesGlossaryItems(roomNumber) {
  return PAST_SIMPLE_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_USES_SECTION_ID = "uses";
const PAST_SIMPLE_USES_SECTION_LABEL =
  PAST_SIMPLE_SECTIONS.find((s) => s.id === PAST_SIMPLE_USES_SECTION_ID)?.title ?? "Uses";

export const PAST_SIMPLE_USES_ROOMS = Array.from(
  { length: PAST_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_SIMPLE_USES_SECTION_ID,
      sectionLabel: PAST_SIMPLE_USES_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_SIMPLE_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
