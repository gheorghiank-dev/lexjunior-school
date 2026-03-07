import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectMapPath,
  futurePerfectTheoryPath,
  futurePerfectRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectAffirmativeExercises,
  getFuturePerfectAffirmativeGlossaryItems,
} from "./rooms/future-perfect-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect – Affirmative – Camera 1",
  2: "Future Perfect – Affirmative – Camera 2",
  3: "Future Perfect – Affirmative – Camera 3",
  4: "Future Perfect – Affirmative – Camera 4",
  5: "Future Perfect – Affirmative – Camera 5",
  6: "Future Perfect – Affirmative – Camera 6",
  7: "Future Perfect – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getFuturePerfectAffirmativeExercises,
  getDictionaryItems: getFuturePerfectAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectTheoryPath,
  getMapRoute: futurePerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
