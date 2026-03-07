import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-continuous-core/useRoomEngine.js";
import { PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./past-perfect-continuous-core/assets.js";
import {
  pastPerfectContinuousMapPath,
  pastPerfectContinuousTheoryPath,
  pastPerfectContinuousRoomPath,
} from "./past-perfect-continuous-paths.js";
import {
  getPastPerfectContinuousUsesExercises,
  getPastPerfectContinuousUsesGlossaryItems,
} from "./rooms/past-perfect-continuous-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect Continuous – Uses – Camera 1",
  2: "Past Perfect Continuous – Uses – Camera 2",
  3: "Past Perfect Continuous – Uses – Camera 3",
  4: "Past Perfect Continuous – Uses – Camera 4",
  5: "Past Perfect Continuous – Uses – Camera 5",
  6: "Past Perfect Continuous – Uses – Camera 6",
  7: "Past Perfect Continuous – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect Continuous – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectContinuousUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPastPerfectContinuousUsesExercises,
  getDictionaryItems: getPastPerfectContinuousUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectContinuousTheoryPath,
  getMapRoute: pastPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
