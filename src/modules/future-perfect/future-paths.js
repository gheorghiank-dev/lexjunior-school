// Future Perfect paths (shared by routing + map + other pages)

export const FUTURE_PERFECT_BASE_PATH = "/grammar/tenses/future-perfect";

export function futurePerfectOverviewPath() {
  return `${FUTURE_PERFECT_BASE_PATH}/overview`;
}

export function futurePerfectMapPath() {
  return `${FUTURE_PERFECT_BASE_PATH}/map`;
}

export function futurePerfectBadgePath() {
  return `${FUTURE_PERFECT_BASE_PATH}/badge`;
}

export function futurePerfectTheoryPath(sectionId) {
  return `${FUTURE_PERFECT_BASE_PATH}/${sectionId}/theory`;
}


export function futurePerfectRoomPath(sectionId, roomNumber) {
  return `${FUTURE_PERFECT_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
