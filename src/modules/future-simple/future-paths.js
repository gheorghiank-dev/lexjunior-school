// Future Simple paths (shared by routing + map + other pages)

export const FUTURE_SIMPLE_BASE_PATH = "/grammar/tenses/future-simple";

export function futureSimpleOverviewPath() {
  return `${FUTURE_SIMPLE_BASE_PATH}/overview`;
}

export function futureSimpleMapPath() {
  return `${FUTURE_SIMPLE_BASE_PATH}/map`;
}

export function futureSimpleBadgePath() {
  return `${FUTURE_SIMPLE_BASE_PATH}/badge`;
}

export function futureSimpleTheoryPath(sectionId) {
  return `${FUTURE_SIMPLE_BASE_PATH}/${sectionId}/theory`;
}


export function futureSimpleRoomPath(sectionId, roomNumber) {
  return `${FUTURE_SIMPLE_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
