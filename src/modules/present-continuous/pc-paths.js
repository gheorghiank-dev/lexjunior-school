// Present Continuous paths (shared by routing + map + other pages)
// Keeping this file dependency-free avoids circular imports.

export const PC_BASE_PATH = "/grammar/tenses/present-continuous";

export function pcOverviewPath() {
  return `${PC_BASE_PATH}/overview`;
}

export function pcMapPath() {
  return `${PC_BASE_PATH}/map`;
}

export function pcBadgePath() {
  return `${PC_BASE_PATH}/badge`;
}

// For Present Continuous, theory pages live directly at /{sectionId}.
export function pcTheoryPath(sectionId) {
  return `${PC_BASE_PATH}/${sectionId}`;
}

export function pcRoomPath(sectionId, roomNumber) {
  return `${PC_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}

export function pcUsesSensoryTheoryPath() {
  return `${PC_BASE_PATH}/uses/sensory`;
}
