// Future Perfect Continuous > Uses content registry (skeleton)
import { FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, FUTURE_PERFECT_CONTINUOUS_SECTIONS } from "../future-core/config.js";

export const FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM = {};

export function getFuturePerfectContinuousUsesExercises(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM = {};

export function getFuturePerfectContinuousUsesGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID = "uses";
const FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL =
  FUTURE_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID)?.title ?? "Uses";

export const FUTURE_PERFECT_CONTINUOUS_USES_ROOMS = Array.from(
  { length: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
      roomNumber,
      exercises:
        FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
