// Present Perfect > Uses content registry (playable preview scaffold)
import { PRESENT_PERFECT_ROOMS_PER_SECTION, PRESENT_PERFECT_SECTIONS } from "../present-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PRESENT_PERFECT_USES_SECTION_ID = "uses";
const PRESENT_PERFECT_USES_SECTION_LABEL =
  PRESENT_PERFECT_SECTIONS.find((s) => s.id === PRESENT_PERFECT_USES_SECTION_ID)?.title ?? "Uses";

export const PRESENT_PERFECT_USES_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "present-perfect-uses",
  tenseLabel: "Present Perfect",
  sectionLabel: PRESENT_PERFECT_USES_SECTION_LABEL,
});

export function getPresentPerfectUsesExercises(roomNumber) {
  return PRESENT_PERFECT_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_USES_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Present Perfect",
  sectionLabel: PRESENT_PERFECT_USES_SECTION_LABEL,
});

export function getPresentPerfectUsesGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PRESENT_PERFECT_USES_ROOMS = Array.from(
  { length: PRESENT_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_USES_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_USES_SECTION_LABEL,
      roomNumber,
      exercises: PRESENT_PERFECT_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
