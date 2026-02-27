// Past Simple paths (shared by routing + map + other pages)

export const PAST_SIMPLE_BASE_PATH = "/grammar/tenses/past-simple";

export function pastSimpleOverviewPath() {
  return `${PAST_SIMPLE_BASE_PATH}/overview`;
}

export function pastSimpleMapPath() {
  return `${PAST_SIMPLE_BASE_PATH}/map`;
}

export function pastSimpleBadgePath() {
  return `${PAST_SIMPLE_BASE_PATH}/badge`;
}

export function pastSimpleTheoryPath(sectionId) {
  return `${PAST_SIMPLE_BASE_PATH}/${sectionId}`;
}

export function pastSimpleSensoryTheoryPath() {
  return `${PAST_SIMPLE_BASE_PATH}/uses/theory-sensory`;
}

export function pastSimpleRoomPath(sectionId, roomNumber) {
  return `${PAST_SIMPLE_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
