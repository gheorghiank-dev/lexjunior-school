import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectMapPath,
  futurePerfectTheoryPath,
  futurePerfectRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectInterrogativeExercises,
  getFuturePerfectInterrogativeGlossaryItems,
} from "./rooms/future-perfect-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect – Interrogative – Camera 1",
  2: "Future Perfect – Interrogative – Camera 2",
  3: "Future Perfect – Interrogative – Camera 3",
  4: "Future Perfect – Interrogative – Camera 4",
  5: "Future Perfect – Interrogative – Camera 5",
  6: "Future Perfect – Interrogative – Camera 6",
  7: "Future Perfect – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getFuturePerfectInterrogativeExercises,
  getDictionaryItems: getFuturePerfectInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectTheoryPath,
  getMapRoute: futurePerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
