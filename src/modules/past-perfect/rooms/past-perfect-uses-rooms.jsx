// Past Perfect > Uses content registry (playable preview scaffold)
import { PAST_PERFECT_ROOMS_PER_SECTION, PAST_PERFECT_SECTIONS } from "../past-perfect-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_PERFECT_USES_SECTION_ID = "uses";
const PAST_PERFECT_USES_SECTION_LABEL =
  PAST_PERFECT_SECTIONS.find((s) => s.id === PAST_PERFECT_USES_SECTION_ID)?.title ?? "Uses";

export const PAST_PERFECT_USES_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-perfect-uses",
  tenseLabel: "Past Perfect",
  sectionLabel: PAST_PERFECT_USES_SECTION_LABEL,
});

export function getPastPerfectUsesExercises(roomNumber) {
  return PAST_PERFECT_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_USES_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Perfect",
  sectionLabel: PAST_PERFECT_USES_SECTION_LABEL,
});

export function getPastPerfectUsesGlossaryItems(roomNumber) {
  return PAST_PERFECT_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_PERFECT_USES_ROOMS = Array.from(
  { length: PAST_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_USES_SECTION_ID,
      sectionLabel: PAST_PERFECT_USES_SECTION_LABEL,
      roomNumber,
      exercises: PAST_PERFECT_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
