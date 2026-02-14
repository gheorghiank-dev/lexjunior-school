// TenseKit v1 – rooms / sections contract
// -----------------------------------------------
// This file documents and lightly validates the shape of a tense's
// room registries. A tense can have multiple sections (branches);
// each section has an ordered list of rooms.

/**
 * @typedef {Object} TenseExercise
 * @property {string} id              Stable exercise id (for debugging / analytics)
 * @property {string} type            Exercise type id (e.g. "mcq", "gap", "pairs")
 * @property {object} props           Props passed directly to the shared exercise component
 */

/**
 * @typedef {Object} TenseRoom
 * @property {number} roomNumber      1‑indexed room number inside the section
 * @property {string} roomId          Stable room id (used in storage keys, tests)
 * @property {string} title           Short room title
 * @property {string} [intro]         Optional intro text / Lex blurb
 * @property {TenseExercise[]} exercises
 * @property {object[]} [dictionaryItems]
 * @property {string} [lexHintsKey]   Key into the Lex hints registry
 */

/**
 * @typedef {Record<string, TenseRoom[]>} TenseSectionRooms
 *   sectionId -> list of rooms
 */

/**
 * Pass‑through helper for documenting room registries.
 *
 * @param {TenseSectionRooms} roomRegistries
 * @returns {TenseSectionRooms}
 */
export function defineTenseRooms(roomRegistries) {
  if (!roomRegistries || typeof roomRegistries !== "object") {
    throw new Error("[TenseKit] defineTenseRooms: roomRegistries must be an object.");
  }
  return roomRegistries;
}
