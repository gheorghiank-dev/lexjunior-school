// Present Perfect Continuous > Uses content registry (playable preview scaffold)
import { PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PRESENT_PERFECT_CONTINUOUS_SECTIONS } from "../present-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID = "uses";
const PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL =
  PRESENT_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID)?.title ?? "Uses";

export const PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "present-perfect-continuous-uses",
  tenseLabel: "Present Perfect Continuous",
  sectionLabel: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
});

export function getPresentPerfectContinuousUsesExercises(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Present Perfect Continuous",
  sectionLabel: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
});

export function getPresentPerfectContinuousUsesGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_CONTINUOUS_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PRESENT_PERFECT_CONTINUOUS_USES_ROOMS = Array.from(
  { length: PRESENT_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_CONTINUOUS_USES_SECTION_LABEL,
      roomNumber,
      exercises: PRESENT_PERFECT_CONTINUOUS_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
