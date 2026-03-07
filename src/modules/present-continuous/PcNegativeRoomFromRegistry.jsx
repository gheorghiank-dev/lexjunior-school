import { getRoomValidationPolicy } from "../../core/validation/getRoomValidationPolicy.js";
import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcNegativeExercises,
  getPcNegativeGlossaryItems,
} from "./rooms/pc-negative-rooms.jsx";
import { presentContinuousNegativeLexHints } from "../lex-hints/present-continuous/negative.js";

const cardTitleByRoom = {
  1: "Transformă propozițiile în forma negativă (I / you / we / they)",
  2: "Transformă propozițiile în forma negativă (he / she / it)",
  3: "Completează cu don't / doesn't",
  4: "Scrie forma negativă cu verbe de rutină",
  5: "Corectează propozițiile la forma negativă",
  6: "Pune verbele în forma negativă corectă",
  7: "Traduceri în forma negativă",
};

const cardIntroByRoom = {
  1: "Rescrie propozițiile la forma negativă, folosind timpul Present Continuous.",
  2: "Ai grijă la he / she / it – acordă corect auxiliarul.",
  3: "Alege sau scrie forma corectă a lui don't / doesn't în propoziții.",
  4: "Transformă propozițiile astfel încât să fie la forma negativă.",
  5: "Unele propoziții sunt greșite – scrie varianta negativă corectă.",
  6: "Concentrează-te pe ordinea cuvintelor și forma lui to be.",
  7: "Tradu propozițiile în engleză, folosind Present Continuous negativ.",
};

export default createRegistryRoomComponent({
  displayName: "PcNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPcNegativeExercises,
  getDictionaryItems: getPcNegativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentContinuousNegativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PC_LEX_HEAD_SVG,
  getTheoryRoute: pcTheoryPath,
  getMapRoute: pcMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) =>
    `Camera ${roomNumber} – Present Continuous – Negative`,
  getRetryForKeyTestId: (roomNumber) =>
    `pc-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `pc-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `pc-negative-room${roomNumber}-lexbubble`,
  getValidationPolicy: (roomNumber, sectionId) =>
    getRoomValidationPolicy({
      moduleKey: "present-continuous",
      sectionId,
      roomNumber,
    }),
  validationFamily: "BE_NEGATIVE",
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Continuous – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [1, 2, 4, 5],
    MCQ_ROOMS: [3],
    TEXTAREA_ROOMS: [6, 7],
  },
});
