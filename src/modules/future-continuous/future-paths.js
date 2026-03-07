// Future Continuous paths (shared by routing + map + other pages)

export const FUTURE_CONTINUOUS_BASE_PATH = "/grammar/tenses/future-continuous";

export function futureContinuousOverviewPath() {
  return `${FUTURE_CONTINUOUS_BASE_PATH}/overview`;
}

export function futureContinuousMapPath() {
  return `${FUTURE_CONTINUOUS_BASE_PATH}/map`;
}

export function futureContinuousBadgePath() {
  return `${FUTURE_CONTINUOUS_BASE_PATH}/badge`;
}

export function futureContinuousTheoryPath(sectionId) {
  return `${FUTURE_CONTINUOUS_BASE_PATH}/${sectionId}/theory`;
}


export function futureContinuousRoomPath(sectionId, roomNumber) {
  return `${FUTURE_CONTINUOUS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
