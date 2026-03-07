import React from "react";
import "./past-perfect-continuous-theme.css";

import {
  PAST_PERFECT_CONTINUOUS_SECTIONS,
  PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./past-perfect-continuous-core/config.js";
import {
  PAST_PERFECT_CONTINUOUS_ASSETS_BASE,
  PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
} from "./past-perfect-continuous-core/assets.js";

import { PAST_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS } from "./rooms/past-perfect-continuous-affirmative-rooms.jsx";
import { PAST_PERFECT_CONTINUOUS_NEGATIVE_ROOMS } from "./rooms/past-perfect-continuous-negative-rooms.jsx";
import { PAST_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS } from "./rooms/past-perfect-continuous-interrogative-rooms.jsx";
import { PAST_PERFECT_CONTINUOUS_USES_ROOMS } from "./rooms/past-perfect-continuous-uses-rooms.jsx";
import { PAST_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS } from "./rooms/past-perfect-continuous-time-expressions-rooms.jsx";

import {
  pastPerfectContinuousAffirmativeLexHints,
  pastPerfectContinuousNegativeLexHints,
  pastPerfectContinuousInterrogativeLexHints,
  pastPerfectContinuousUsesLexHints,
  pastPerfectContinuousTimeExpressionsLexHints,
  pastPerfectContinuousBadgeLexHints,
} from "../lex-hints/past-perfect-continuous/index.js";

import PastPerfectContinuousPage from "./pages/PastPerfectContinuousPage.jsx";
import PastPerfectContinuousOverviewPage from "./pages/PastPerfectContinuousOverviewPage.jsx";
import PastPerfectContinuousBadgePage from "./pages/PastPerfectContinuousBadgePage.jsx";
import PastPerfectContinuousMapPage from "./pages/PastPerfectContinuousMapPage.jsx";

import { PAST_PERFECT_CONTINUOUS_SECTION_PAGES } from "./past-perfect-continuous-section-pages.jsx";
import { PAST_PERFECT_CONTINUOUS_BASE_PATH, pastPerfectContinuousTheoryPath } from "./past-perfect-continuous-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPastPerfectContinuousRoutes() {
  const PastPerfectContinuousRoomRoute = React.lazy(
    () => import("./pages/PastPerfectContinuousRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: PAST_PERFECT_CONTINUOUS_BASE_PATH,
    topLevelRoutes: [
      { path: PAST_PERFECT_CONTINUOUS_BASE_PATH, element: <PastPerfectContinuousPage /> },
      {
        path: `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/overview`,
        element: <PastPerfectContinuousOverviewPage />,
      },
      {
        path: `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/badge`,
        element: <PastPerfectContinuousBadgePage />,
      },
      { path: `${PAST_PERFECT_CONTINUOUS_BASE_PATH}/map`, element: <PastPerfectContinuousMapPage /> },
    ],
    sections: PAST_PERFECT_CONTINUOUS_SECTIONS,
    sectionPages: PAST_PERFECT_CONTINUOUS_SECTION_PAGES,
    theoryPath: pastPerfectContinuousTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PastPerfectContinuousRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PAST_PERFECT_CONTINUOUS_SECTIONS_META = PAST_PERFECT_CONTINUOUS_SECTIONS.reduce(
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

const PAST_PERFECT_CONTINUOUS_ROOM_REGISTRIES = {
  affirmative: PAST_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS,
  negative: PAST_PERFECT_CONTINUOUS_NEGATIVE_ROOMS,
  interrogative: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS,
  uses: PAST_PERFECT_CONTINUOUS_USES_ROOMS,
  "time-expressions": PAST_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS,
};

const PAST_PERFECT_CONTINUOUS_HINTS_REGISTRY = {
  affirmative: pastPerfectContinuousAffirmativeLexHints,
  negative: pastPerfectContinuousNegativeLexHints,
  interrogative: pastPerfectContinuousInterrogativeLexHints,
  uses: pastPerfectContinuousUsesLexHints,
  "time-expressions": pastPerfectContinuousTimeExpressionsLexHints,
  badge: pastPerfectContinuousBadgeLexHints,
};

export const PAST_PERFECT_CONTINUOUS_MANIFEST = {
  id: "past-perfect-continuous",
  label: "Past Perfect Continuous",
  passwordEnvKey: "VITE_PASSWORD_PAST_PERFECT_CONTINUOUS",
  themeClass: "past-perfect-continuous-theme",
  assetsBase: PAST_PERFECT_CONTINUOUS_ASSETS_BASE,
  brandAvatarSrc: PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  status: "preview",
  order: 10,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Past Perfect Continuous.",
  basePath: PAST_PERFECT_CONTINUOUS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sections: PAST_PERFECT_CONTINUOUS_SECTIONS,
  sectionsMeta: PAST_PERFECT_CONTINUOUS_SECTIONS_META,
  roomRegistries: PAST_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
  hintsRegistry: PAST_PERFECT_CONTINUOUS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PAST_PERFECT_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: PAST_PERFECT_CONTINUOUS_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pastPerfectContinuousTheoryPath("affirmative") },
    { sectionId: "negative", path: pastPerfectContinuousTheoryPath("negative") },
    { sectionId: "interrogative", path: pastPerfectContinuousTheoryPath("interrogative") },
    { sectionId: "uses", path: pastPerfectContinuousTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: pastPerfectContinuousTheoryPath("time-expressions"),
    },
  ],
});

export const PAST_PERFECT_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(
  PAST_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
);

export const PAST_PERFECT_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "past-perfect-continuous",
  themeClass: "past-perfect-continuous-theme",
});

export const PAST_PERFECT_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PAST_PERFECT_CONTINUOUS_MANIFEST),
  rooms: PAST_PERFECT_CONTINUOUS_ROOMS_CONFIG,
  theory: PAST_PERFECT_CONTINUOUS_THEORY_CONFIG,
  theme: PAST_PERFECT_CONTINUOUS_THEME_CONFIG,
});
