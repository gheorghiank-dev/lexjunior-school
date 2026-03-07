import React from "react";
import "./present-theme.css";

import {
  PRESENT_PERFECT_SECTIONS,
  PRESENT_PERFECT_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./present-core/config.js";
import {
  PRESENT_PERFECT_ASSETS_BASE,
  PRESENT_PERFECT_LEX_HEAD_SVG,
} from "./present-core/assets.js";

import { PRESENT_PERFECT_AFFIRMATIVE_ROOMS } from "./rooms/present-perfect-affirmative-rooms.jsx";
import { PRESENT_PERFECT_NEGATIVE_ROOMS } from "./rooms/present-perfect-negative-rooms.jsx";
import { PRESENT_PERFECT_INTERROGATIVE_ROOMS } from "./rooms/present-perfect-interrogative-rooms.jsx";
import { PRESENT_PERFECT_USES_ROOMS } from "./rooms/present-perfect-uses-rooms.jsx";
import { PRESENT_PERFECT_TIME_EXPRESSIONS_ROOMS } from "./rooms/present-perfect-time-expressions-rooms.jsx";

import {
  presentPerfectAffirmativeLexHints,
  presentPerfectNegativeLexHints,
  presentPerfectInterrogativeLexHints,
  presentPerfectUsesLexHints,
  presentPerfectTimeExpressionsLexHints,
  presentPerfectBadgeLexHints,
} from "../lex-hints/present-perfect/index.js";

import PresentPerfectPage from "./pages/PresentPerfectPage.jsx";
import PresentPerfectOverviewPage from "./pages/PresentPerfectOverviewPage.jsx";
import PresentPerfectBadgePage from "./pages/PresentPerfectBadgePage.jsx";
import PresentPerfectMapPage from "./pages/PresentPerfectMapPage.jsx";

import { PRESENT_PERFECT_SECTION_PAGES } from "./present-section-pages.jsx";
import {
  PRESENT_PERFECT_BASE_PATH,
  presentPerfectTheoryPath,
} from "./present-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPresentPerfectRoutes() {
  const PresentPerfectRoomRoute = React.lazy(
    () => import("./pages/PresentPerfectRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: PRESENT_PERFECT_BASE_PATH,
    topLevelRoutes: [
      { path: PRESENT_PERFECT_BASE_PATH, element: <PresentPerfectPage /> },
      {
        path: `${PRESENT_PERFECT_BASE_PATH}/overview`,
        element: <PresentPerfectOverviewPage />,
      },
      {
        path: `${PRESENT_PERFECT_BASE_PATH}/badge`,
        element: <PresentPerfectBadgePage />,
      },
      {
        path: `${PRESENT_PERFECT_BASE_PATH}/map`,
        element: <PresentPerfectMapPage />,
      },
    ],
    sections: PRESENT_PERFECT_SECTIONS,
    sectionPages: PRESENT_PERFECT_SECTION_PAGES,
    theoryPath: presentPerfectTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PresentPerfectRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PRESENT_PERFECT_SECTIONS_META = PRESENT_PERFECT_SECTIONS.reduce(
  (acc, section) => {
    acc[section.id] = {
      id: section.id,
      title: section.title,
      description: section.description,
    };
    return acc;
  },
  {},
);

const PRESENT_PERFECT_ROOM_REGISTRIES = {
  affirmative: PRESENT_PERFECT_AFFIRMATIVE_ROOMS,
  negative: PRESENT_PERFECT_NEGATIVE_ROOMS,
  interrogative: PRESENT_PERFECT_INTERROGATIVE_ROOMS,
  uses: PRESENT_PERFECT_USES_ROOMS,
  "time-expressions": PRESENT_PERFECT_TIME_EXPRESSIONS_ROOMS,
};

const PRESENT_PERFECT_HINTS_REGISTRY = {
  affirmative: presentPerfectAffirmativeLexHints,
  negative: presentPerfectNegativeLexHints,
  interrogative: presentPerfectInterrogativeLexHints,
  uses: presentPerfectUsesLexHints,
  "time-expressions": presentPerfectTimeExpressionsLexHints,
  badge: presentPerfectBadgeLexHints,
};

export const PRESENT_PERFECT_MANIFEST = {
  id: "present-perfect",
  label: "Present Perfect",
  passwordEnvKey: "VITE_PASSWORD_PRESENT_PERFECT",
  themeClass: "present-perfect-theme",
  assetsBase: PRESENT_PERFECT_ASSETS_BASE,
  brandAvatarSrc: PRESENT_PERFECT_LEX_HEAD_SVG,
  status: "preview",
  order: 7,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Present Perfect.",
  basePath: PRESENT_PERFECT_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PRESENT_PERFECT_ROOMS_PER_SECTION,
  sections: PRESENT_PERFECT_SECTIONS,
  sectionsMeta: PRESENT_PERFECT_SECTIONS_META,
  roomRegistries: PRESENT_PERFECT_ROOM_REGISTRIES,
  hintsRegistry: PRESENT_PERFECT_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PRESENT_PERFECT_THEORY_CONFIG = defineTenseTheory({
  basePath: PRESENT_PERFECT_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: presentPerfectTheoryPath("affirmative") },
    { sectionId: "negative", path: presentPerfectTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: presentPerfectTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: presentPerfectTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: presentPerfectTheoryPath("time-expressions"),
    },
  ],
});

export const PRESENT_PERFECT_ROOMS_CONFIG = defineTenseRooms(
  PRESENT_PERFECT_ROOM_REGISTRIES,
);

export const PRESENT_PERFECT_THEME_CONFIG = defineTenseTheme({
  id: "present-perfect",
  themeClass: "present-perfect-theme",
});

export const PRESENT_PERFECT_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PRESENT_PERFECT_MANIFEST),
  rooms: PRESENT_PERFECT_ROOMS_CONFIG,
  theory: PRESENT_PERFECT_THEORY_CONFIG,
  theme: PRESENT_PERFECT_THEME_CONFIG,
});
