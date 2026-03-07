// Present Perfect Continuous > Uses content registry (skeleton)
import { PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PRESENT_PERFECT_CONTINUOUS_SECTIONS } from "../present-core/config.js";

export const PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM = {};

export function getPresentPerfectContinuousUsesExercises(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM = {};

export function getPresentPerfectContinuousUsesGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID = "uses";
const PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL =
  PRESENT_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID)?.title ?? "Uses";

export const PRESENT_PERFECT_CONTINUOUS_USES_ROOMS = Array.from(
  { length: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
      roomNumber,
      exercises:
        PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
