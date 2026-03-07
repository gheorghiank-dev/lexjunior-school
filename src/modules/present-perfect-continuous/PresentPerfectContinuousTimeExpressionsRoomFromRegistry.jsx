import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectContinuousMapPath,
  presentPerfectContinuousTheoryPath,
  presentPerfectContinuousRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectContinuousTimeExpressionsExercises,
  getPresentPerfectContinuousTimeExpressionsGlossaryItems,
} from "./rooms/present-perfect-continuous-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect Continuous – Time Expressions – Camera 1",
  2: "Present Perfect Continuous – Time Expressions – Camera 2",
  3: "Present Perfect Continuous – Time Expressions – Camera 3",
  4: "Present Perfect Continuous – Time Expressions – Camera 4",
  5: "Present Perfect Continuous – Time Expressions – Camera 5",
  6: "Present Perfect Continuous – Time Expressions – Camera 6",
  7: "Present Perfect Continuous – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect Continuous – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectContinuousTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getPresentPerfectContinuousTimeExpressionsExercises,
  getDictionaryItems: getPresentPerfectContinuousTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectContinuousTheoryPath,
  getMapRoute: presentPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect Continuous – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect Continuous – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
