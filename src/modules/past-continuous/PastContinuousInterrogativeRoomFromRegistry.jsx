import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-continuous-core/useRoomEngine.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "./past-continuous-core/assets.js";
import {
  pastContinuousMapPath,
  pastContinuousTheoryPath,
  pastContinuousRoomPath,
} from "./past-continuous-paths.js";
import {
  getPastContinuousInterrogativeExercises,
  getPastContinuousInterrogativeGlossaryItems,
} from "./rooms/past-continuous-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Continuous – Interrogative – Camera 1",
  2: "Past Continuous – Interrogative – Camera 2",
  3: "Past Continuous – Interrogative – Camera 3",
  4: "Past Continuous – Interrogative – Camera 4",
  5: "Past Continuous – Interrogative – Camera 5",
  6: "Past Continuous – Interrogative – Camera 6",
  7: "Past Continuous – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Continuous – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastContinuousInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPastContinuousInterrogativeExercises,
  getDictionaryItems: getPastContinuousInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastContinuousTheoryPath,
  getMapRoute: pastContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
