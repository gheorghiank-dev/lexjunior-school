/**
 * Room registry builder helpers.
 *
 * Goals:
 * - Reduce copy/paste when adding new tenses/sections.
 * - Keep registries "data-first" while preserving the current runtime contract.
 * - Dev-only validation (no runtime behavior changes in prod).
 *
 * Guardrails:
 * - Core stays agnostic: no imports from modules.
 */

import { validateRoomRegistry } from "./validate-room-registry.js";

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

function freezeDev(x) {
  if (!import.meta.env.DEV) return x;
  try {
    return Object.freeze(x);
  } catch {
    return x;
  }
}

/**
 * Utility: [1..n]
 * @param {number} n
 */
export function range1to(n) {
  const size = Number(n);
  if (!Number.isFinite(size) || size <= 0) return [];
  return Array.from({ length: size }, (_, i) => i + 1);
}

/**
 * Build a single room definition. (Mostly a semantic helper.)
 * @template T
 * @param {T} room
 * @returns {T}
 */
export function defineRoom(room) {
  if (!isPlainObject(room)) {
    throw new Error("defineRoom(room): expected a plain object");
  }
  return freezeDev(room);
}

/**
 * Build a section room registry by applying section metadata to each room.
 *
 * Input rooms SHOULD omit sectionId/sectionLabel (they'll be applied), but can override if needed.
 *
 * @param {{
 *  registryName: string;
 *  sectionId: string;
 *  sectionLabel: string;
 *  rooms: any[];
 *  expectedRoomNumbers?: number[] | null;
 *  validate?: boolean;
 * }} cfg
 */
export function createSectionRoomRegistry(cfg) {
  const {
    registryName,
    sectionId,
    sectionLabel,
    rooms,
    expectedRoomNumbers = null,
    validate = true,
  } = cfg || {};

  if (typeof registryName !== "string" || !registryName.trim()) {
    throw new Error("createSectionRoomRegistry: registryName must be a non-empty string");
  }
  if (typeof sectionId !== "string" || !sectionId.trim()) {
    throw new Error("createSectionRoomRegistry: sectionId must be a non-empty string");
  }
  if (typeof sectionLabel !== "string" || !sectionLabel.trim()) {
    throw new Error("createSectionRoomRegistry: sectionLabel must be a non-empty string");
  }
  if (!Array.isArray(rooms)) {
    throw new Error("createSectionRoomRegistry: rooms must be an array");
  }

  const built = rooms.map((r, idx) => {
    if (!isPlainObject(r)) {
      throw new Error(`[${registryName}][${idx}] expected a plain object room definition`);
    }
    const room = {
      sectionId,
      sectionLabel,
      ...r,
    };

    // Small ergonomics: allow common aliases without changing existing contract.
    if (room.dictionaryItems == null && room.glossaryItems != null) {
      room.dictionaryItems = room.glossaryItems;
      delete room.glossaryItems;
    }

    return freezeDev(room);
  });

  if (import.meta.env.DEV && validate) {
    validateRoomRegistry(built, {
      registryName,
      sectionId,
      expectedRoomNumbers,
    });
  }

  return freezeDev(built);
}
