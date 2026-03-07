// Future Perfect Continuous > Uses content registry (playable preview scaffold)
import { FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, FUTURE_PERFECT_CONTINUOUS_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID = "uses";
const FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL =
  FUTURE_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID)?.title ?? "Uses";

export const FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-perfect-continuous-uses",
  tenseLabel: "Future Perfect Continuous",
  sectionLabel: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
});

export function getFuturePerfectContinuousUsesExercises(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Perfect Continuous",
  sectionLabel: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
});

export function getFuturePerfectContinuousUsesGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_PERFECT_CONTINUOUS_USES_ROOMS = Array.from(
  { length: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
