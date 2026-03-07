import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./be-core/useRoomEngine.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "./be-core/assets.js";
import {
  beGoingToMapPath,
  beGoingToTheoryPath,
  beGoingToRoomPath,
} from "./be-paths.js";
import {
  getBeGoingToNegativeExercises,
  getBeGoingToNegativeGlossaryItems,
} from "./rooms/be-going-to-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Be Going To – Negative – Camera 1",
  2: "Be Going To – Negative – Camera 2",
  3: "Be Going To – Negative – Camera 3",
  4: "Be Going To – Negative – Camera 4",
  5: "Be Going To – Negative – Camera 5",
  6: "Be Going To – Negative – Camera 6",
  7: "Be Going To – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Be Going To – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "BeGoingToNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getBeGoingToNegativeExercises,
  getDictionaryItems: getBeGoingToNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  getTheoryRoute: beGoingToTheoryPath,
  getMapRoute: beGoingToMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? beGoingToRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Be Going To – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Be Going To – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
