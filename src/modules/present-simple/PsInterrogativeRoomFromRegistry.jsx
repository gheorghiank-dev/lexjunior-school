import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsInterrogativeExercises,
  getPsInterrogativeGlossaryItems,
} from "./rooms/ps-interrogative-rooms.jsx";
import { presentSimpleInterrogativeLexHints } from "../lex-hints/present-simple/interrogative.js";

const cardTitleByRoom = {
  1: "Completează spațiile libere cu Do sau Does",
  2: "Completează spațiile libere cu forma de interogativ a verbului din propoziția dată",
  3: "Scrie cuvintele date în ordinea corectă pentru a forma propoziții la Present Simple interogativ",
  4: "Corectează propozițiile completând spațiile libere cu forma corectă a verbului la Present Simple interogativ",
  5: "Bifează propoziția corectă la Present Simple interogativ",
  6: "Scrie răspunsuri scurte (Yes / No) pentru întrebările la Present Simple",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple interogativ",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu do sau does pentru a forma întrebări corecte la Present Simple.",
  2: "Completează spațiile libere cu forma de interogativ a verbului din propoziția dată.",
  3: "Scrie cuvintele în ordinea corectă pentru a transforma șirurile date în întrebări la Present Simple interogativ.",
  4: "Corectează întrebările greșite completând spațiile libere cu forma corectă a verbului auxiliar la Present Simple interogativ.",
  5: "Alege propoziția corectă la Present Simple interogativ în fiecare set.",
  6: "Pentru fiecare întrebare, scrie răspunsul scurt afirmativ și răspunsul scurt negativ, folosind pronumele și auxiliarul potrivit.",
  7: "Tradu întrebările din română în engleză, folosind structura cu do / does și mini-dicționarul camerei.",
};

export default createRegistryRoomComponent({
  displayName: "PsInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPsInterrogativeExercises,
  getDictionaryItems: getPsInterrogativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentSimpleInterrogativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PS_LEX_HEAD_SVG,
  getTheoryRoute: psTheoryPath,
  getMapRoute: psMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: "Present Simple – Interrogative",
  getRetryForKeyTestId: (roomNumber) => `ps-int-room${roomNumber}-retry-key`,
  getTestIdPrefix: (roomNumber) => `ps-int-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) =>
    `ps-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Simple – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [1, 2, 4],
    MCQ_ROOMS: [5],
    TEXTAREA_ROOMS: [3, 7],
    YESNO_PAIRS_ROOMS: [6],
    TEXTAREA_ROWS: 1,
    TEXTAREA_STACKED: true,
    TEXTAREA_SHOW_INDEX: true,
  },
});
