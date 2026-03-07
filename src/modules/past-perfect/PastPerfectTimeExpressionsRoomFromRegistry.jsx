import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-core/useRoomEngine.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "./past-perfect-core/assets.js";
import {
  pastPerfectMapPath,
  pastPerfectTheoryPath,
  pastPerfectRoomPath,
} from "./past-perfect-paths.js";
import {
  getPastPerfectTimeExpressionsExercises,
  getPastPerfectTimeExpressionsGlossaryItems,
} from "./rooms/past-perfect-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect – Time Expressions – Camera 1",
  2: "Past Perfect – Time Expressions – Camera 2",
  3: "Past Perfect – Time Expressions – Camera 3",
  4: "Past Perfect – Time Expressions – Camera 4",
  5: "Past Perfect – Time Expressions – Camera 5",
  6: "Past Perfect – Time Expressions – Camera 6",
  7: "Past Perfect – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getPastPerfectTimeExpressionsExercises,
  getDictionaryItems: getPastPerfectTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectTheoryPath,
  getMapRoute: pastPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
