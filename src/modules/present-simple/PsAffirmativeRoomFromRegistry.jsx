import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsAffirmativeExercises,
  getPsAffirmativeGlossaryItems,
} from "./rooms/ps-affirmative-rooms.jsx";
import { presentSimpleAffirmativeLexHints } from "../lex-hints/present-simple/affirmative.js";

const cardTitleByRoom = {
  1: "Completează cu forma corectă la persoana a III-a singular",
  2: "Completează cu forma corectă a verbului din paranteză",
  3: "Completează cu forma corectă a verbului din propoziția dată",
  4: "Bifează varianta corectă a verbului",
  5: "Corectează propozițiile completând verbul corect",
  6: "Pune cuvintele în ordinea corectă (Present Simple afirmativ)",
  7: "Tradu propozițiile din română în engleză (Present Simple afirmativ)",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu forma corectă a verbului la persoana a III-a singular.",
  2: "Completează spațiile libere cu forma corectă a verbului din paranteză.",
  3: "Completează spațiile libere cu forma corectă a verbului din propoziția dată.",
  4: "Alege forma corectă a verbului în fiecare propoziție.",
  5: "Propoziția este greșită. Completează spațiul liber cu forma corectă a verbului.",
  6: "Scrie cuvintele date în ordinea corectă pentru a obține propoziții la Present Simple afirmativ.",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple afirmativ. Folosește mini-dicționarul pentru cuvintele necunoscute.",
};

export default createRegistryRoomComponent({
  displayName: "PsAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Afirmativ",
  getExercises: getPsAffirmativeExercises,
  getDictionaryItems: getPsAffirmativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentSimpleAffirmativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PS_LEX_HEAD_SVG,
  getTheoryRoute: psTheoryPath,
  getMapRoute: psMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: "Present Simple – Affirmative",
  getRetryForKeyTestId: (roomNumber) => `ps-aff-room${roomNumber}-retry-key`,
  getTestIdPrefix: (roomNumber) => `ps-aff-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) =>
    `ps-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Simple – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [1],
    GAP_ROOMS: [2, 3, 5],
    MCQ_ROOMS: [4],
    TEXTAREA_ROOMS: [6, 7],
    GAP_SHOW_INDEX_BY_ROOM: { 2: false },
    TEXTAREA_ROWS: 1,
    TEXTAREA_STACKED: true,
    TEXTAREA_SHOW_INDEX: true,
  },
});
