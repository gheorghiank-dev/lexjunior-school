import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./be-core/useRoomEngine.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "./be-core/assets.js";
import {
  beGoingToMapPath,
  beGoingToTheoryPath,
  beGoingToRoomPath,
} from "./be-paths.js";
import {
  getBeGoingToUsesExercises,
  getBeGoingToUsesGlossaryItems,
} from "./rooms/be-going-to-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Be Going To – Uses – Camera 1",
  2: "Be Going To – Uses – Camera 2",
  3: "Be Going To – Uses – Camera 3",
  4: "Be Going To – Uses – Camera 4",
  5: "Be Going To – Uses – Camera 5",
  6: "Be Going To – Uses – Camera 6",
  7: "Be Going To – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Be Going To – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "BeGoingToUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getBeGoingToUsesExercises,
  getDictionaryItems: getBeGoingToUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  getTheoryRoute: beGoingToTheoryPath,
  getMapRoute: beGoingToMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? beGoingToRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Be Going To – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Be Going To – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
