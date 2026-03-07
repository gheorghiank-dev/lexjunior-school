// Past Perfect Continuous paths (shared by routing + map + other pages)

export const PAST_PERFECT_CONTINUOUS_BASE_PATH = "/grammar/tenses/past-perfect-continuous";

export function pastPerfectContinuousOverviewPath() {
  return `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/overview`;
}

export function pastPerfectContinuousMapPath() {
  return `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/map`;
}

export function pastPerfectContinuousBadgePath() {
  return `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/badge`;
}

export function pastPerfectContinuousTheoryPath(sectionId) {
  return `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/theory`;
}


export function pastPerfectContinuousRoomPath(sectionId, roomNumber) {
  return `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
