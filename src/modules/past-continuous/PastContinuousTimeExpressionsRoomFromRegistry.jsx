import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-continuous-core/useRoomEngine.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "./past-continuous-core/assets.js";
import {
  pastContinuousMapPath,
  pastContinuousTheoryPath,
  pastContinuousRoomPath,
} from "./past-continuous-paths.js";
import {
  getPastContinuousTimeExpressionsExercises,
  getPastContinuousTimeExpressionsGlossaryItems,
} from "./rooms/past-continuous-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Continuous – Time Expressions – Camera 1",
  2: "Past Continuous – Time Expressions – Camera 2",
  3: "Past Continuous – Time Expressions – Camera 3",
  4: "Past Continuous – Time Expressions – Camera 4",
  5: "Past Continuous – Time Expressions – Camera 5",
  6: "Past Continuous – Time Expressions – Camera 6",
  7: "Past Continuous – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Continuous – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastContinuousTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getPastContinuousTimeExpressionsExercises,
  getDictionaryItems: getPastContinuousTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastContinuousTheoryPath,
  getMapRoute: pastContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Continuous – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Continuous – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
