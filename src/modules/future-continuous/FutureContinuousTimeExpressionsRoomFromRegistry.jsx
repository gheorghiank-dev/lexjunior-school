import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureContinuousMapPath,
  futureContinuousTheoryPath,
  futureContinuousRoomPath,
} from "./future-paths.js";
import {
  getFutureContinuousTimeExpressionsExercises,
  getFutureContinuousTimeExpressionsGlossaryItems,
} from "./rooms/future-continuous-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Continuous – Time Expressions – Camera 1",
  2: "Future Continuous – Time Expressions – Camera 2",
  3: "Future Continuous – Time Expressions – Camera 3",
  4: "Future Continuous – Time Expressions – Camera 4",
  5: "Future Continuous – Time Expressions – Camera 5",
  6: "Future Continuous – Time Expressions – Camera 6",
  7: "Future Continuous – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Continuous – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureContinuousTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getFutureContinuousTimeExpressionsExercises,
  getDictionaryItems: getFutureContinuousTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futureContinuousTheoryPath,
  getMapRoute: futureContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Continuous – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Continuous – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
