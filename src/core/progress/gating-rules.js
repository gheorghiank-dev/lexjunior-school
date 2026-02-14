/**
 * Gating and map helpers (tense-agnostic).
 */

export function computeRoomStatus(overview, theoryDone, roomIndex) {
  const roomNumber = roomIndex + 1;
  const state = overview[roomIndex] || { passed: false, hasKey: false };

  if (!theoryDone) {
    return { status: "locked", state };
  }

  if (roomNumber === 1) {
    if (state.passed) return { status: "done", state };
    return { status: "available", state };
  }

  const prevState = overview[roomIndex - 1] || { passed: false, hasKey: false };

  if (!prevState.passed) return { status: "locked", state };
  if (state.passed) return { status: "done", state };

  return { status: "available", state };
}

export function buildKeysInfoBySection(progressManager) {
  const infoById = Object.create(null);
  try {
    const allKeys = progressManager.getAllKeysPerSection();
    for (const section of allKeys || []) {
      if (section?.id) {
        infoById[section.id] = section;
      }
    }
  } catch (e) {
    // ignore
  }
  return infoById;
}


/**
 * Build a safe total-keys meta object from a progress manager.
 *
 * Expected shape of progressManager.getTotalKeysInfo():
 *   { obtainedKeys: number, totalRequired: number, hasAllKeys: boolean }
 */
export function buildTotalKeysMeta(progressManager) {
  try {
    const info = progressManager.getTotalKeysInfo();
    if (!info || typeof info !== "object") {
      return { obtainedKeys: 0, totalRequired: 0, hasAllKeys: false };
    }
    const { obtainedKeys = 0, totalRequired = 0, hasAllKeys = false } = info;
    return { obtainedKeys, totalRequired, hasAllKeys };
  } catch (e) {
    return { obtainedKeys: 0, totalRequired: 0, hasAllKeys: false };
  }
}


/**
 * Build a safe per-room overview array for a given section.
 *
 * It prefers a fast `progressManager.getSectionOverview(sectionId, totalRooms)`
 * if available, but falls back to looping over `getRoomState(sectionId, room)`.
 *
 * Each entry in the returned array has the shape:
 *   { passed: boolean, hasKey: boolean, ... }
 */
export function buildSectionOverview(progressManager, sectionId, totalRooms) {
  if (!progressManager || !sectionId || !totalRooms) {
    return [];
  }

  try {
    if (typeof progressManager.getSectionOverview === "function") {
      const overview = progressManager.getSectionOverview(sectionId, totalRooms);
      if (Array.isArray(overview) && overview.length > 0) {
        return overview;
      }
    }
  } catch (e) {
    // ignore and fall back
  }

  const rooms = [];
  for (let room = 1; room <= totalRooms; room++) {
    try {
      rooms.push(progressManager.getRoomState(sectionId, room));
    } catch (e) {
      rooms.push({ passed: false, hasKey: false });
    }
  }
  return rooms;
}
