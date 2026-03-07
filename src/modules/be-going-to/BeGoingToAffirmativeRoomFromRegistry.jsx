import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./be-core/useRoomEngine.js";
import { BE_GOING_TO_LEX_HEAD_SVG } from "./be-core/assets.js";
import {
  beGoingToMapPath,
  beGoingToTheoryPath,
  beGoingToRoomPath,
} from "./be-paths.js";
import {
  getBeGoingToAffirmativeExercises,
  getBeGoingToAffirmativeGlossaryItems,
} from "./rooms/be-going-to-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Be Going To – Affirmative – Camera 1",
  2: "Be Going To – Affirmative – Camera 2",
  3: "Be Going To – Affirmative – Camera 3",
  4: "Be Going To – Affirmative – Camera 4",
  5: "Be Going To – Affirmative – Camera 5",
  6: "Be Going To – Affirmative – Camera 6",
  7: "Be Going To – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Be Going To – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "BeGoingToAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getBeGoingToAffirmativeExercises,
  getDictionaryItems: getBeGoingToAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: BE_GOING_TO_LEX_HEAD_SVG,
  getTheoryRoute: beGoingToTheoryPath,
  getMapRoute: beGoingToMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? beGoingToRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Be Going To – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Be Going To – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
