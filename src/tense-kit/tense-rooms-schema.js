import { assertRoomSequence, ensureObject } from "./utils.js";

/**
 * @typedef {Object} TenseExercise
 * @property {string} id
 * @property {string} type
 * @property {object} props
 */

/**
 * @typedef {Object} TenseRoom
 * @property {number} roomNumber
 * @property {string} roomId
 * @property {string} title
 * @property {string} [intro]
 * @property {TenseExercise[]} exercises
 * @property {object[]} [dictionaryItems]
 * @property {string} [lexHintsKey]
 */

/**
 * @typedef {Record<string, TenseRoom[]>} TenseSectionRooms
 */

export function defineTenseRooms(roomRegistries) {
  ensureObject(roomRegistries, "defineTenseRooms: roomRegistries");

  for (const [sectionId, rooms] of Object.entries(roomRegistries)) {
    assertRoomSequence(sectionId, rooms);
  }

  return roomRegistries;
}
