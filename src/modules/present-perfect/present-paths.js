// Present Perfect paths (shared by routing + map + other pages)

export const PRESENT_PERFECT_BASE_PATH = "/grammar/tenses/present-perfect";

export function presentPerfectOverviewPath() {
  return `${PRESENT_PERFECT_BASE_PATH}/overview`;
}

export function presentPerfectMapPath() {
  return `${PRESENT_PERFECT_BASE_PATH}/map`;
}

export function presentPerfectBadgePath() {
  return `${PRESENT_PERFECT_BASE_PATH}/badge`;
}

export function presentPerfectTheoryPath(sectionId) {
  return `${PRESENT_PERFECT_BASE_PATH}/${sectionId}/theory`;
}


export function presentPerfectRoomPath(sectionId, roomNumber) {
  return `${PRESENT_PERFECT_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
