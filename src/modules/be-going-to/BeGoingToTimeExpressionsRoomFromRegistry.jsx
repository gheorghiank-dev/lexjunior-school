import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./be-core/useRoomEngine.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "./be-core/assets.js";
import {
  beGoingToMapPath,
  beGoingToTheoryPath,
  beGoingToRoomPath,
} from "./be-paths.js";
import {
  getBeGoingToTimeExpressionsExercises,
  getBeGoingToTimeExpressionsGlossaryItems,
} from "./rooms/be-going-to-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Be Going To – Time Expressions – Camera 1",
  2: "Be Going To – Time Expressions – Camera 2",
  3: "Be Going To – Time Expressions – Camera 3",
  4: "Be Going To – Time Expressions – Camera 4",
  5: "Be Going To – Time Expressions – Camera 5",
  6: "Be Going To – Time Expressions – Camera 6",
  7: "Be Going To – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Be Going To – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "BeGoingToTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getBeGoingToTimeExpressionsExercises,
  getDictionaryItems: getBeGoingToTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  getTheoryRoute: beGoingToTheoryPath,
  getMapRoute: beGoingToMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? beGoingToRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Be Going To – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Be Going To – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
