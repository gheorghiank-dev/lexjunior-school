// Past Continuous paths (shared by routing + map + other pages)

export const PAST_CONTINUOUS_BASE_PATH = "/grammar/tenses/past-continuous";

export function pastContinuousOverviewPath() {
  return `${PAST_CONTINUOUS_BASE_PATH}/overview`;
}

export function pastContinuousMapPath() {
  return `${PAST_CONTINUOUS_BASE_PATH}/map`;
}

export function pastContinuousBadgePath() {
  return `${PAST_CONTINUOUS_BASE_PATH}/badge`;
}

export function pastContinuousTheoryPath(sectionId) {
  return `${PAST_CONTINUOUS_BASE_PATH}/${sectionId}/theory`;
}


export function pastContinuousRoomPath(sectionId, roomNumber) {
  return `${PAST_CONTINUOUS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
