import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./be-core/useRoomEngine.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "./be-core/assets.js";
import {
  beGoingToMapPath,
  beGoingToTheoryPath,
  beGoingToRoomPath,
} from "./be-paths.js";
import {
  getBeGoingToInterrogativeExercises,
  getBeGoingToInterrogativeGlossaryItems,
} from "./rooms/be-going-to-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Be Going To – Interrogative – Camera 1",
  2: "Be Going To – Interrogative – Camera 2",
  3: "Be Going To – Interrogative – Camera 3",
  4: "Be Going To – Interrogative – Camera 4",
  5: "Be Going To – Interrogative – Camera 5",
  6: "Be Going To – Interrogative – Camera 6",
  7: "Be Going To – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Be Going To – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "BeGoingToInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getBeGoingToInterrogativeExercises,
  getDictionaryItems: getBeGoingToInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  getTheoryRoute: beGoingToTheoryPath,
  getMapRoute: beGoingToMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? beGoingToRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Be Going To – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Be Going To – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
