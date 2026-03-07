import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcUsesExercises,
  getPcUsesGlossaryItems,
} from "./rooms/pc-uses-rooms.jsx";
import { presentContinuousUsesLexHints } from "../lex-hints/present-continuous/uses.js";

const cardTitleByRoom = {
  1: "Use 1 – Actions happening now",
  2: "Use 2 – Temporary actions",
  3: "Use 3 – Future arrangements",
  4: "Use 4 – Changing and developing situations",
  5: "Use 5 – Annoying habits with always",
  6: "Use 6 – Repeated actions around now",
  7: "Use 7 – Alte situații speciale",
};

const cardIntroByRoom = {
  1: "Completează sau rescrie propoziții despre acțiuni care se întâmplă chiar acum.",
  2: "Lucruri temporare – ce se întâmplă doar pentru o perioadă scurtă.",
  3: "Planuri și programări de viitor folosind Present Continuous.",
  4: "Situații care se schimbă treptat sau se dezvoltă.",
  5: "Plângeri și obiceiuri enervante cu always.",
  6: "Acțiuni repetate în jurul momentului prezent.",
  7: "Alte utilizări interesante ale timpului.",
};

export default createRegistryRoomComponent({
  displayName: "PcUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPcUsesExercises,
  getDictionaryItems: getPcUsesGlossaryItems,
  getLexHintsForRoom: (roomNumber) => presentContinuousUsesLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PC_LEX_HEAD_SVG,
  getTheoryRoute: pcTheoryPath,
  getMapRoute: pcMapPath,
  getNextTo: (roomNumber, sectionId) => roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `pc-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `pc-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `pc-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
