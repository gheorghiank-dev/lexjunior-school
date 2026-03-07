// Present Perfect Continuous paths (shared by routing + map + other pages)

export const PRESENT_PERFECT_CONTINUOUS_BASE_PATH = "/grammar/tenses/present-perfect-continuous";

export function presentPerfectContinuousOverviewPath() {
  return `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/overview`;
}

export function presentPerfectContinuousMapPath() {
  return `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/map`;
}

export function presentPerfectContinuousBadgePath() {
  return `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/badge`;
}

export function presentPerfectContinuousTheoryPath(sectionId) {
  return `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/theory`;
}


export function presentPerfectContinuousRoomPath(sectionId, roomNumber) {
  return `${PRESENT_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
