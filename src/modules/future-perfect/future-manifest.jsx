import React from "react";
import "./future-theme.css";

import {
  FUTURE_PERFECT_SECTIONS,
  FUTURE_PERFECT_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./future-core/config.js";
import {
  FUTURE_PERFECT_ASSETS_BASE,
  FUTURE_PERFECT_LEX_HEAD_SVG,
} from "./future-core/assets.js";

import { FUTURE_PERFECT_AFFIRMATIVE_ROOMS } from "./rooms/future-perfect-affirmative-rooms.jsx";
import { FUTURE_PERFECT_NEGATIVE_ROOMS } from "./rooms/future-perfect-negative-rooms.jsx";
import { FUTURE_PERFECT_INTERROGATIVE_ROOMS } from "./rooms/future-perfect-interrogative-rooms.jsx";
import { FUTURE_PERFECT_USES_ROOMS } from "./rooms/future-perfect-uses-rooms.jsx";
import { FUTURE_PERFECT_TIME_EXPRESSIONS_ROOMS } from "./rooms/future-perfect-time-expressions-rooms.jsx";

import {
  futurePerfectAffirmativeLexHints,
  futurePerfectNegativeLexHints,
  futurePerfectInterrogativeLexHints,
  futurePerfectUsesLexHints,
  futurePerfectTimeExpressionsLexHints,
  futurePerfectBadgeLexHints,
} from "../lex-hints/future-perfect/index.js";

import FuturePerfectPage from "./pages/FuturePerfectPage.jsx";
import FuturePerfectOverviewPage from "./pages/FuturePerfectOverviewPage.jsx";
import FuturePerfectBadgePage from "./pages/FuturePerfectBadgePage.jsx";
import FuturePerfectMapPage from "./pages/FuturePerfectMapPage.jsx";

import { FUTURE_PERFECT_SECTION_PAGES } from "./future-section-pages.jsx";
import {
  FUTURE_PERFECT_BASE_PATH,
  futurePerfectTheoryPath,
} from "./future-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildFuturePerfectRoutes() {
  const FuturePerfectRoomRoute = React.lazy(
    () => import("./pages/FuturePerfectRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: FUTURE_PERFECT_BASE_PATH,
    topLevelRoutes: [
      { path: FUTURE_PERFECT_BASE_PATH, element: <FuturePerfectPage /> },
      {
        path: `${FUTURE_PERFECT_BASE_PATH}/overview`,
        element: <FuturePerfectOverviewPage />,
      },
      {
        path: `${FUTURE_PERFECT_BASE_PATH}/badge`,
        element: <FuturePerfectBadgePage />,
      },
      {
        path: `${FUTURE_PERFECT_BASE_PATH}/map`,
        element: <FuturePerfectMapPage />,
      },
    ],
    sections: FUTURE_PERFECT_SECTIONS,
    sectionPages: FUTURE_PERFECT_SECTION_PAGES,
    theoryPath: futurePerfectTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <FuturePerfectRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const FUTURE_PERFECT_SECTIONS_META = FUTURE_PERFECT_SECTIONS.reduce(
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

const FUTURE_PERFECT_ROOM_REGISTRIES = {
  affirmative: FUTURE_PERFECT_AFFIRMATIVE_ROOMS,
  negative: FUTURE_PERFECT_NEGATIVE_ROOMS,
  interrogative: FUTURE_PERFECT_INTERROGATIVE_ROOMS,
  uses: FUTURE_PERFECT_USES_ROOMS,
  "time-expressions": FUTURE_PERFECT_TIME_EXPRESSIONS_ROOMS,
};

const FUTURE_PERFECT_HINTS_REGISTRY = {
  affirmative: futurePerfectAffirmativeLexHints,
  negative: futurePerfectNegativeLexHints,
  interrogative: futurePerfectInterrogativeLexHints,
  uses: futurePerfectUsesLexHints,
  "time-expressions": futurePerfectTimeExpressionsLexHints,
  badge: futurePerfectBadgeLexHints,
};

export const FUTURE_PERFECT_MANIFEST = {
  id: "future-perfect",
  label: "Future Perfect",
  passwordEnvKey: "VITE_PASSWORD_FUTURE_PERFECT",
  themeClass: "future-perfect-theme",
  assetsBase: FUTURE_PERFECT_ASSETS_BASE,
  brandAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  status: "preview",
  order: 12,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Future Perfect.",
  basePath: FUTURE_PERFECT_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: FUTURE_PERFECT_ROOMS_PER_SECTION,
  sections: FUTURE_PERFECT_SECTIONS,
  sectionsMeta: FUTURE_PERFECT_SECTIONS_META,
  roomRegistries: FUTURE_PERFECT_ROOM_REGISTRIES,
  hintsRegistry: FUTURE_PERFECT_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const FUTURE_PERFECT_THEORY_CONFIG = defineTenseTheory({
  basePath: FUTURE_PERFECT_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: futurePerfectTheoryPath("affirmative") },
    { sectionId: "negative", path: futurePerfectTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: futurePerfectTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: futurePerfectTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: futurePerfectTheoryPath("time-expressions"),
    },
  ],
});

export const FUTURE_PERFECT_ROOMS_CONFIG = defineTenseRooms(
  FUTURE_PERFECT_ROOM_REGISTRIES,
);

export const FUTURE_PERFECT_THEME_CONFIG = defineTenseTheme({
  id: "future-perfect",
  themeClass: "future-perfect-theme",
});

export const FUTURE_PERFECT_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(FUTURE_PERFECT_MANIFEST),
  rooms: FUTURE_PERFECT_ROOMS_CONFIG,
  theory: FUTURE_PERFECT_THEORY_CONFIG,
  theme: FUTURE_PERFECT_THEME_CONFIG,
});
