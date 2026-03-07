import React from "react";
import "./past-perfect-theme.css";

import {
  PAST_PERFECT_SECTIONS,
  PAST_PERFECT_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./past-perfect-core/config.js";
import {
  PAST_PERFECT_ASSETS_BASE,
  PAST_PERFECT_LEX_HEAD_SVG,
} from "./past-perfect-core/assets.js";

import { PAST_PERFECT_AFFIRMATIVE_ROOMS } from "./rooms/past-perfect-affirmative-rooms.jsx";
import { PAST_PERFECT_NEGATIVE_ROOMS } from "./rooms/past-perfect-negative-rooms.jsx";
import { PAST_PERFECT_INTERROGATIVE_ROOMS } from "./rooms/past-perfect-interrogative-rooms.jsx";
import { PAST_PERFECT_USES_ROOMS } from "./rooms/past-perfect-uses-rooms.jsx";
import { PAST_PERFECT_TIME_EXPRESSIONS_ROOMS } from "./rooms/past-perfect-time-expressions-rooms.jsx";

import {
  pastPerfectAffirmativeLexHints,
  pastPerfectNegativeLexHints,
  pastPerfectInterrogativeLexHints,
  pastPerfectUsesLexHints,
  pastPerfectTimeExpressionsLexHints,
  pastPerfectBadgeLexHints,
} from "../lex-hints/past-perfect/index.js";

import PastPerfectPage from "./pages/PastPerfectPage.jsx";
import PastPerfectOverviewPage from "./pages/PastPerfectOverviewPage.jsx";
import PastPerfectBadgePage from "./pages/PastPerfectBadgePage.jsx";
import PastPerfectMapPage from "./pages/PastPerfectMapPage.jsx";

import { PAST_PERFECT_SECTION_PAGES } from "./past-perfect-section-pages.jsx";
import { PAST_PERFECT_BASE_PATH, pastPerfectTheoryPath } from "./past-perfect-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPastPerfectRoutes() {
  const PastPerfectRoomRoute = React.lazy(
    () => import("./pages/PastPerfectRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: PAST_PERFECT_BASE_PATH,
    topLevelRoutes: [
      { path: PAST_PERFECT_BASE_PATH, element: <PastPerfectPage /> },
      {
        path: `${PAST_PERFECT_BASE_PATH}/overview`,
        element: <PastPerfectOverviewPage />,
      },
      {
        path: `${PAST_PERFECT_BASE_PATH}/badge`,
        element: <PastPerfectBadgePage />,
      },
      { path: `${PAST_PERFECT_BASE_PATH}/map`, element: <PastPerfectMapPage /> },
    ],
    sections: PAST_PERFECT_SECTIONS,
    sectionPages: PAST_PERFECT_SECTION_PAGES,
    theoryPath: pastPerfectTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PastPerfectRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PAST_PERFECT_SECTIONS_META = PAST_PERFECT_SECTIONS.reduce(
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

const PAST_PERFECT_ROOM_REGISTRIES = {
  affirmative: PAST_PERFECT_AFFIRMATIVE_ROOMS,
  negative: PAST_PERFECT_NEGATIVE_ROOMS,
  interrogative: PAST_PERFECT_INTERROGATIVE_ROOMS,
  uses: PAST_PERFECT_USES_ROOMS,
  "time-expressions": PAST_PERFECT_TIME_EXPRESSIONS_ROOMS,
};

const PAST_PERFECT_HINTS_REGISTRY = {
  affirmative: pastPerfectAffirmativeLexHints,
  negative: pastPerfectNegativeLexHints,
  interrogative: pastPerfectInterrogativeLexHints,
  uses: pastPerfectUsesLexHints,
  "time-expressions": pastPerfectTimeExpressionsLexHints,
  badge: pastPerfectBadgeLexHints,
};

export const PAST_PERFECT_MANIFEST = {
  id: "past-perfect",
  label: "Past Perfect",
  passwordEnvKey: "VITE_PASSWORD_PAST_PERFECT",
  themeClass: "past-perfect-theme",
  assetsBase: PAST_PERFECT_ASSETS_BASE,
  brandAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  status: "preview",
  order: 9,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Past Perfect.",
  basePath: PAST_PERFECT_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PAST_PERFECT_ROOMS_PER_SECTION,
  sections: PAST_PERFECT_SECTIONS,
  sectionsMeta: PAST_PERFECT_SECTIONS_META,
  roomRegistries: PAST_PERFECT_ROOM_REGISTRIES,
  hintsRegistry: PAST_PERFECT_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PAST_PERFECT_THEORY_CONFIG = defineTenseTheory({
  basePath: PAST_PERFECT_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pastPerfectTheoryPath("affirmative") },
    { sectionId: "negative", path: pastPerfectTheoryPath("negative") },
    { sectionId: "interrogative", path: pastPerfectTheoryPath("interrogative") },
    { sectionId: "uses", path: pastPerfectTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: pastPerfectTheoryPath("time-expressions"),
    },
  ],
});

export const PAST_PERFECT_ROOMS_CONFIG = defineTenseRooms(
  PAST_PERFECT_ROOM_REGISTRIES,
);

export const PAST_PERFECT_THEME_CONFIG = defineTenseTheme({
  id: "past-perfect",
  themeClass: "past-perfect-theme",
});

export const PAST_PERFECT_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PAST_PERFECT_MANIFEST),
  rooms: PAST_PERFECT_ROOMS_CONFIG,
  theory: PAST_PERFECT_THEORY_CONFIG,
  theme: PAST_PERFECT_THEME_CONFIG,
});
