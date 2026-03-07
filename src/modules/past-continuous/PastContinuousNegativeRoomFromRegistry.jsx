import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-continuous-core/useRoomEngine.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "./past-continuous-core/assets.js";
import {
  pastContinuousMapPath,
  pastContinuousTheoryPath,
  pastContinuousRoomPath,
} from "./past-continuous-paths.js";
import {
  getPastContinuousNegativeExercises,
  getPastContinuousNegativeGlossaryItems,
} from "./rooms/past-continuous-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Continuous – Negative – Camera 1",
  2: "Past Continuous – Negative – Camera 2",
  3: "Past Continuous – Negative – Camera 3",
  4: "Past Continuous – Negative – Camera 4",
  5: "Past Continuous – Negative – Camera 5",
  6: "Past Continuous – Negative – Camera 6",
  7: "Past Continuous – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Continuous – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastContinuousNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPastContinuousNegativeExercises,
  getDictionaryItems: getPastContinuousNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastContinuousTheoryPath,
  getMapRoute: pastContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Continuous – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Continuous – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
