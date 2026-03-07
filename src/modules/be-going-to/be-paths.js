// Be Going To paths (shared by routing + map + other pages)

export const BE_GOING_TO_BASE_PATH = "/grammar/tenses/be-going-to";

export function beGoingToOverviewPath() {
  return `${BE_GOING_TO_BASE_PATH}/overview`;
}

export function beGoingToMapPath() {
  return `${BE_GOING_TO_BASE_PATH}/map`;
}

export function beGoingToBadgePath() {
  return `${BE_GOING_TO_BASE_PATH}/badge`;
}

export function beGoingToTheoryPath(sectionId) {
  return `${BE_GOING_TO_BASE_PATH}/${sectionId}/theory`;
}


export function beGoingToRoomPath(sectionId, roomNumber) {
  return `${BE_GOING_TO_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
