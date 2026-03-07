// Future Perfect Continuous paths (shared by routing + map + other pages)

export const FUTURE_PERFECT_CONTINUOUS_BASE_PATH = "/grammar/tenses/future-perfect-continuous";

export function futurePerfectContinuousOverviewPath() {
  return `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/overview`;
}

export function futurePerfectContinuousMapPath() {
  return `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/map`;
}

export function futurePerfectContinuousBadgePath() {
  return `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/badge`;
}

export function futurePerfectContinuousTheoryPath(sectionId) {
  return `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/theory`;
}


export function futurePerfectContinuousRoomPath(sectionId, roomNumber) {
  return `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
