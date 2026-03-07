import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcAffirmativeExercises,
  getPcAffirmativeGlossaryItems,
} from "./rooms/pc-affirmative-rooms.jsx";
import { presentContinuousAffirmativeLexHints } from "../lex-hints/present-continuous/affirmative.js";

const cardTitleByRoom = {
  1: "Verbele la -ing (spelling)",
  2: "Completează cu am / is / are",
  3: "Alege forma corectă (MCQ)",
  4: "Transformă din Present Simple în Present Continuous",
  5: "Corectează propoziția",
  6: "Pune cuvintele în ordinea corectă",
  7: "Tradu în engleză (Present Continuous)",
};

const cardIntroByRoom = {
  1: "Scrie forma corectă cu -ing pentru fiecare verb.",
  2: "Alege forma corectă a lui to be pentru fiecare propoziție.",
  3: "Bifează varianta corectă pentru fiecare propoziție.",
  4: "Transformă propoziția din Present Simple în Present Continuous.",
  5: "Propoziția este greșită. Scrie varianta corectă.",
  6: "Rearanjează cuvintele în minte și scrie propoziția corectă.",
  7: "Tradu propoziția în engleză, folosind Present Continuous.",
};

export default createRegistryRoomComponent({
  displayName: "PcAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPcAffirmativeExercises,
  getDictionaryItems: getPcAffirmativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentContinuousAffirmativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PC_LEX_HEAD_SVG,
  getTheoryRoute: pcTheoryPath,
  getMapRoute: pcMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) =>
    roomNumber === 1
      ? "Camera 1 – Present Continuous – Affirmative"
      : `Present Continuous – Camera ${roomNumber}`,
  getRetryForKeyTestId: (roomNumber) =>
    roomNumber === 1
      ? "pc-retry-for-key"
      : `pc-affirmative-room${roomNumber}-retry-for-key`,
  getTestIdPrefix: (roomNumber) => `pc-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) =>
    `pc-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Continuous – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [1],
    GAP_ROOMS: [2, 4, 5],
    MCQ_ROOMS: [3],
    TEXTAREA_ROOMS: [6, 7],
  },
});
