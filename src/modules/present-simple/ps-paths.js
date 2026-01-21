// Present Simple paths (shared by routing + map + other pages)
// Keeping this file dependency-free avoids circular imports.

export const PS_BASE_PATH = "/grammar/tenses/present-simple";

export function psOverviewPath() {
  return `${PS_BASE_PATH}/overview`;
}

export function psMapPath() {
  return `${PS_BASE_PATH}/map`;
}

export function psDownloadsPath() {
  return `${PS_BASE_PATH}/downloads`;
}

export function psNotesPath() {
  return `${PS_BASE_PATH}/notes`;
}

export function psBadgePath() {
  return `${PS_BASE_PATH}/badge`;
}

export function psTheoryPath(sectionId) {
  return `${PS_BASE_PATH}/${sectionId}/theory`;
}

export function psSensoryTheoryPath() {
  return `${PS_BASE_PATH}/uses/theory-sensory`;
}

export function psRoomPath(sectionId, roomNumber) {
  return `${PS_BASE_PATH}/${sectionId}/room-${roomNumber}`;
}
