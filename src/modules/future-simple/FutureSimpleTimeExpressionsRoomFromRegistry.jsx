import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_SIMPLE_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureSimpleMapPath,
  futureSimpleTheoryPath,
  futureSimpleRoomPath,
} from "./future-paths.js";
import {
  getFutureSimpleTimeExpressionsExercises,
  getFutureSimpleTimeExpressionsGlossaryItems,
} from "./rooms/future-simple-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Simple – Time Expressions – Camera 1",
  2: "Future Simple – Time Expressions – Camera 2",
  3: "Future Simple – Time Expressions – Camera 3",
  4: "Future Simple – Time Expressions – Camera 4",
  5: "Future Simple – Time Expressions – Camera 5",
  6: "Future Simple – Time Expressions – Camera 6",
  7: "Future Simple – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Simple – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureSimpleTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getFutureSimpleTimeExpressionsExercises,
  getDictionaryItems: getFutureSimpleTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: futureSimpleTheoryPath,
  getMapRoute: futureSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Simple – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Simple – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
