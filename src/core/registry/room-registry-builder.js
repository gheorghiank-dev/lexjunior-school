// NOTE:
// This file is RESERVED for a future room registry refactor.
// It is NOT used in Lex Junior v2 runtime yet.
//
// Idea for the future:
// - provide small helpers to define and validate room registries
//   for each tense (Present Simple, Present Continuous, Past Simple, ...).
// - keep the room data in the tense modules, but standardise the shape.
//
// Example future direction (pseudo-code):
//
//   import { buildRoomRegistry, defineRoom } from "./room-registry-builder";
//
//   export const PRESENT_SIMPLE_AFFIRMATIVE_ROOMS = buildRoomRegistry({
//     sectionId: "affirmative",
//     rooms: [
//       defineRoom({
//         id: "room-1",
//         slug: "room-1",
//         type: "text-input",
//         lessonId: "ps_aff_1",
//         // ...
//       }),
//       // ...
//     ],
//   });
//
// For now, the existing tenses still use plain arrays of room configs
// defined in each `rooms/*.jsx` file.
//
// When we add many more tenses and patterns stabilise, we can:
// - implement real helpers here (buildRoomRegistry, defineRoom, validateRegistry);
// - add a small validation script for CI / pre-commit that checks
//   the room registries against a common schema.
//
// Until then, this file acts purely as documentation of intent
// and a placeholder for the future refactor.

/**
 * Dummy export so the module has a valid shape.
 * This is NOT used at runtime.
 */
export const ROOM_REGISTRY_BUILDER_DOC = {};
