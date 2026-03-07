import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-continuous-core/useRoomEngine.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "./past-continuous-core/assets.js";
import {
  pastContinuousMapPath,
  pastContinuousTheoryPath,
  pastContinuousRoomPath,
} from "./past-continuous-paths.js";
import {
  getPastContinuousUsesExercises,
  getPastContinuousUsesGlossaryItems,
} from "./rooms/past-continuous-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Continuous – Uses – Camera 1",
  2: "Past Continuous – Uses – Camera 2",
  3: "Past Continuous – Uses – Camera 3",
  4: "Past Continuous – Uses – Camera 4",
  5: "Past Continuous – Uses – Camera 5",
  6: "Past Continuous – Uses – Camera 6",
  7: "Past Continuous – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Continuous – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastContinuousUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPastContinuousUsesExercises,
  getDictionaryItems: getPastContinuousUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastContinuousTheoryPath,
  getMapRoute: pastContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
