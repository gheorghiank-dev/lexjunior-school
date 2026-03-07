// Past Perfect paths (shared by routing + map + other pages)

export const PAST_PERFECT_BASE_PATH = "/grammar/tenses/past-perfect";

export function pastPerfectOverviewPath() {
  return `${PAST_PERFECT_BASE_PATH}/overview`;
}

export function pastPerfectMapPath() {
  return `${PAST_PERFECT_BASE_PATH}/map`;
}

export function pastPerfectBadgePath() {
  return `${PAST_PERFECT_BASE_PATH}/badge`;
}

export function pastPerfectTheoryPath(sectionId) {
  return `${PAST_PERFECT_BASE_PATH}/${sectionId}/theory`;
}


export function pastPerfectRoomPath(sectionId, roomNumber) {
  return `${PAST_PERFECT_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
