import React from "react";
import "./pc-theme.css";

import {
  PC_SECTIONS,
  PC_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./pc-core/config.js";
import { PC_ASSETS_BASE, PC_LEX_HEAD_SVG } from "./pc-core/assets.js";

import { PC_AFFIRMATIVE_ROOMS } from "./rooms/pc-affirmative-rooms.jsx";
import { PC_NEGATIVE_ROOMS } from "./rooms/pc-negative-rooms.jsx";
import { PC_INTERROGATIVE_ROOMS } from "./rooms/pc-interrogative-rooms.jsx";
import { PC_USES_ROOMS } from "./rooms/pc-uses-rooms.jsx";
import { PC_TIMEEXPRESSIONS_ROOMS } from "./rooms/pc-time-expressions-rooms.jsx";

import {
  presentContinuousAffirmativeLexHints,
  presentContinuousNegativeLexHints,
  presentContinuousInterrogativeLexHints,
  presentContinuousUsesLexHints,
  presentContinuousTimeExpressionsLexHints,
  presentContinuousBadgeLexHints,
} from "../lex-hints/present-continuous/index.js";

import PresentContinuousPage from "./pages/PresentContinuousPage.jsx";
import PresentContinuousOverviewPage from "./pages/PresentContinuousOverviewPage.jsx";
import PcBadgePage from "./pages/PcBadgePage.jsx";
import PcMapPage from "./pages/PcMapPage.jsx";

import { PC_SECTION_PAGES } from "./pc-section-pages.jsx";
import { PC_BASE_PATH, pcTheoryPath } from "./pc-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPresentContinuousRoutes() {
  const PcRoomRoute = React.lazy(() => import("./pages/PcRoomRoute.jsx"));

  return createTenseRoutes({
    basePath: PC_BASE_PATH,
    topLevelRoutes: [
      { path: PC_BASE_PATH, element: <PresentContinuousPage /> },
      {
        path: `${PC_BASE_PATH}/overview`,
        element: <PresentContinuousOverviewPage />,
      },
      { path: `${PC_BASE_PATH}/badge`, element: <PcBadgePage /> },
      { path: `${PC_BASE_PATH}/map`, element: <PcMapPage /> },
    ],
    sections: PC_SECTIONS,
    sectionPages: PC_SECTION_PAGES,
    theoryPath: pcTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PcRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PC_SECTIONS_META = PC_SECTIONS.reduce((acc, section) => {
  acc[section.id] = {
    id: section.id,
    title: section.title,
    description: section.description,
  };
  return acc;
}, {});

const PC_ROOM_REGISTRIES = {
  affirmative: PC_AFFIRMATIVE_ROOMS,
  negative: PC_NEGATIVE_ROOMS,
  interrogative: PC_INTERROGATIVE_ROOMS,
  uses: PC_USES_ROOMS,
  timeexpressions: PC_TIMEEXPRESSIONS_ROOMS,
};

const PC_HINTS_REGISTRY = {
  affirmative: presentContinuousAffirmativeLexHints,
  negative: presentContinuousNegativeLexHints,
  interrogative: presentContinuousInterrogativeLexHints,
  uses: presentContinuousUsesLexHints,
  "time-expressions": presentContinuousTimeExpressionsLexHints,
  badge: presentContinuousBadgeLexHints,
};

export const PRESENT_CONTINUOUS_MANIFEST = {
  id: "present-continuous",
  label: "Present Continuous",
  passwordEnvKey: "VITE_PASSWORD_PRESENT_CONTINUOUS",
  themeClass: "present-continuous-theme",
  assetsBase: PC_ASSETS_BASE,
  brandAvatarSrc: PC_LEX_HEAD_SVG,
  status: "preview",
  order: 2,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Present Continuous.",
  basePath: PC_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PC_ROOMS_PER_SECTION,
  sections: PC_SECTIONS,
  sectionsMeta: PC_SECTIONS_META,
  roomRegistries: PC_ROOM_REGISTRIES,
  hintsRegistry: PC_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PRESENT_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: PC_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pcTheoryPath("affirmative") },
    { sectionId: "negative", path: pcTheoryPath("negative") },
    { sectionId: "interrogative", path: pcTheoryPath("interrogative") },
    { sectionId: "uses", path: pcTheoryPath("uses") },
    { sectionId: "time-expressions", path: pcTheoryPath("time-expressions") },
  ],
});

export const PRESENT_CONTINUOUS_ROOMS_CONFIG =
  defineTenseRooms(PC_ROOM_REGISTRIES);

export const PRESENT_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "present-continuous",
  themeClass: "present-continuous-theme",
});

export const PRESENT_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PRESENT_CONTINUOUS_MANIFEST),
  rooms: PRESENT_CONTINUOUS_ROOMS_CONFIG,
  theory: PRESENT_CONTINUOUS_THEORY_CONFIG,
  theme: PRESENT_CONTINUOUS_THEME_CONFIG,
});
