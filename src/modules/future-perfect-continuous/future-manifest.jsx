import React from "react";
import "./future-theme.css";

import {
  FUTURE_PERFECT_CONTINUOUS_SECTIONS,
  FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./future-core/config.js";
import {
  FUTURE_PERFECT_CONTINUOUS_ASSETS_BASE,
  FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
} from "./future-core/assets.js";

import { FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS } from "./rooms/future-perfect-continuous-affirmative-rooms.jsx";
import { FUTURE_PERFECT_CONTINUOUS_NEGATIVE_ROOMS } from "./rooms/future-perfect-continuous-negative-rooms.jsx";
import { FUTURE_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS } from "./rooms/future-perfect-continuous-interrogative-rooms.jsx";
import { FUTURE_PERFECT_CONTINUOUS_USES_ROOMS } from "./rooms/future-perfect-continuous-uses-rooms.jsx";
import { FUTURE_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS } from "./rooms/future-perfect-continuous-time-expressions-rooms.jsx";

import {
  futurePerfectContinuousAffirmativeLexHints,
  futurePerfectContinuousNegativeLexHints,
  futurePerfectContinuousInterrogativeLexHints,
  futurePerfectContinuousUsesLexHints,
  futurePerfectContinuousTimeExpressionsLexHints,
  futurePerfectContinuousBadgeLexHints,
} from "../lex-hints/future-perfect-continuous/index.js";

import FuturePerfectContinuousPage from "./pages/FuturePerfectContinuousPage.jsx";
import FuturePerfectContinuousOverviewPage from "./pages/FuturePerfectContinuousOverviewPage.jsx";
import FuturePerfectContinuousBadgePage from "./pages/FuturePerfectContinuousBadgePage.jsx";
import FuturePerfectContinuousMapPage from "./pages/FuturePerfectContinuousMapPage.jsx";

import { FUTURE_PERFECT_CONTINUOUS_SECTION_PAGES } from "./future-section-pages.jsx";
import {
  FUTURE_PERFECT_CONTINUOUS_BASE_PATH,
  futurePerfectContinuousTheoryPath,
} from "./future-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildFuturePerfectContinuousRoutes() {
  const FuturePerfectContinuousRoomRoute = React.lazy(
    () => import("./pages/FuturePerfectContinuousRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: FUTURE_PERFECT_CONTINUOUS_BASE_PATH,
    topLevelRoutes: [
      { path: FUTURE_PERFECT_CONTINUOUS_BASE_PATH, element: <FuturePerfectContinuousPage /> },
      {
        path: `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/overview`,
        element: <FuturePerfectContinuousOverviewPage />,
      },
      {
        path: `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/badge`,
        element: <FuturePerfectContinuousBadgePage />,
      },
      {
        path: `${FUTURE_PERFECT_CONTINUOUS_BASE_PATH}/map`,
        element: <FuturePerfectContinuousMapPage />,
      },
    ],
    sections: FUTURE_PERFECT_CONTINUOUS_SECTIONS,
    sectionPages: FUTURE_PERFECT_CONTINUOUS_SECTION_PAGES,
    theoryPath: futurePerfectContinuousTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <FuturePerfectContinuousRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const FUTURE_PERFECT_CONTINUOUS_SECTIONS_META = FUTURE_PERFECT_CONTINUOUS_SECTIONS.reduce(
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

const FUTURE_PERFECT_CONTINUOUS_ROOM_REGISTRIES = {
  affirmative: FUTURE_PERFECT_CONTINUOUS_AFFIRMATIVE_ROOMS,
  negative: FUTURE_PERFECT_CONTINUOUS_NEGATIVE_ROOMS,
  interrogative: FUTURE_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS,
  uses: FUTURE_PERFECT_CONTINUOUS_USES_ROOMS,
  "time-expressions": FUTURE_PERFECT_CONTINUOUS_TIME_EXPRESSIONS_ROOMS,
};

const FUTURE_PERFECT_CONTINUOUS_HINTS_REGISTRY = {
  affirmative: futurePerfectContinuousAffirmativeLexHints,
  negative: futurePerfectContinuousNegativeLexHints,
  interrogative: futurePerfectContinuousInterrogativeLexHints,
  uses: futurePerfectContinuousUsesLexHints,
  "time-expressions": futurePerfectContinuousTimeExpressionsLexHints,
  badge: futurePerfectContinuousBadgeLexHints,
};

export const FUTURE_PERFECT_CONTINUOUS_MANIFEST = {
  id: "future-perfect-continuous",
  label: "Future Perfect Continuous",
  passwordEnvKey: "VITE_PASSWORD_FUTURE_PERFECT_CONTINUOUS",
  themeClass: "future-perfect-continuous-theme",
  assetsBase: FUTURE_PERFECT_CONTINUOUS_ASSETS_BASE,
  brandAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  status: "preview",
  order: 13,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Future Perfect Continuous.",
  basePath: FUTURE_PERFECT_CONTINUOUS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: FUTURE_PERFECT_CONTINUOUS_ROOMS_PER_SECTION,
  sections: FUTURE_PERFECT_CONTINUOUS_SECTIONS,
  sectionsMeta: FUTURE_PERFECT_CONTINUOUS_SECTIONS_META,
  roomRegistries: FUTURE_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
  hintsRegistry: FUTURE_PERFECT_CONTINUOUS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const FUTURE_PERFECT_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: FUTURE_PERFECT_CONTINUOUS_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: futurePerfectContinuousTheoryPath("affirmative") },
    { sectionId: "negative", path: futurePerfectContinuousTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: futurePerfectContinuousTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: futurePerfectContinuousTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: futurePerfectContinuousTheoryPath("time-expressions"),
    },
  ],
});

export const FUTURE_PERFECT_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(
  FUTURE_PERFECT_CONTINUOUS_ROOM_REGISTRIES,
);

export const FUTURE_PERFECT_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "future-perfect-continuous",
  themeClass: "future-perfect-continuous-theme",
});

export const FUTURE_PERFECT_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(FUTURE_PERFECT_CONTINUOUS_MANIFEST),
  rooms: FUTURE_PERFECT_CONTINUOUS_ROOMS_CONFIG,
  theory: FUTURE_PERFECT_CONTINUOUS_THEORY_CONFIG,
  theme: FUTURE_PERFECT_CONTINUOUS_THEME_CONFIG,
});
