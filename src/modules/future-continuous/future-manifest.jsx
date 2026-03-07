import React from "react";
import "./future-theme.css";

import {
  FUTURE_CONTINUOUS_SECTIONS,
  FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./future-core/config.js";
import {
  FUTURE_CONTINUOUS_ASSETS_BASE,
  FUTURE_CONTINUOUS_LEX_HEAD_SVG,
} from "./future-core/assets.js";

import { FUTURE_CONTINUOUS_AFFIRMATIVE_ROOMS } from "./rooms/future-continuous-affirmative-rooms.jsx";
import { FUTURE_CONTINUOUS_NEGATIVE_ROOMS } from "./rooms/future-continuous-negative-rooms.jsx";
import { FUTURE_CONTINUOUS_INTERROGATIVE_ROOMS } from "./rooms/future-continuous-interrogative-rooms.jsx";
import { FUTURE_CONTINUOUS_USES_ROOMS } from "./rooms/future-continuous-uses-rooms.jsx";
import { FUTURE_CONTINUOUS_TIME_EXPRESSIONS_ROOMS } from "./rooms/future-continuous-time-expressions-rooms.jsx";

import {
  futureContinuousAffirmativeLexHints,
  futureContinuousNegativeLexHints,
  futureContinuousInterrogativeLexHints,
  futureContinuousUsesLexHints,
  futureContinuousTimeExpressionsLexHints,
  futureContinuousBadgeLexHints,
} from "../lex-hints/future-continuous/index.js";

import FutureContinuousPage from "./pages/FutureContinuousPage.jsx";
import FutureContinuousOverviewPage from "./pages/FutureContinuousOverviewPage.jsx";
import FutureContinuousBadgePage from "./pages/FutureContinuousBadgePage.jsx";
import FutureContinuousMapPage from "./pages/FutureContinuousMapPage.jsx";

import { FUTURE_CONTINUOUS_SECTION_PAGES } from "./future-section-pages.jsx";
import {
  FUTURE_CONTINUOUS_BASE_PATH,
  futureContinuousTheoryPath,
} from "./future-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildFutureContinuousRoutes() {
  const FutureContinuousRoomRoute = React.lazy(
    () => import("./pages/FutureContinuousRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: FUTURE_CONTINUOUS_BASE_PATH,
    topLevelRoutes: [
      { path: FUTURE_CONTINUOUS_BASE_PATH, element: <FutureContinuousPage /> },
      {
        path: `${FUTURE_CONTINUOUS_BASE_PATH}/overview`,
        element: <FutureContinuousOverviewPage />,
      },
      {
        path: `${FUTURE_CONTINUOUS_BASE_PATH}/badge`,
        element: <FutureContinuousBadgePage />,
      },
      {
        path: `${FUTURE_CONTINUOUS_BASE_PATH}/map`,
        element: <FutureContinuousMapPage />,
      },
    ],
    sections: FUTURE_CONTINUOUS_SECTIONS,
    sectionPages: FUTURE_CONTINUOUS_SECTION_PAGES,
    theoryPath: futureContinuousTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <FutureContinuousRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const FUTURE_CONTINUOUS_SECTIONS_META = FUTURE_CONTINUOUS_SECTIONS.reduce(
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

const FUTURE_CONTINUOUS_ROOM_REGISTRIES = {
  affirmative: FUTURE_CONTINUOUS_AFFIRMATIVE_ROOMS,
  negative: FUTURE_CONTINUOUS_NEGATIVE_ROOMS,
  interrogative: FUTURE_CONTINUOUS_INTERROGATIVE_ROOMS,
  uses: FUTURE_CONTINUOUS_USES_ROOMS,
  "time-expressions": FUTURE_CONTINUOUS_TIME_EXPRESSIONS_ROOMS,
};

const FUTURE_CONTINUOUS_HINTS_REGISTRY = {
  affirmative: futureContinuousAffirmativeLexHints,
  negative: futureContinuousNegativeLexHints,
  interrogative: futureContinuousInterrogativeLexHints,
  uses: futureContinuousUsesLexHints,
  "time-expressions": futureContinuousTimeExpressionsLexHints,
  badge: futureContinuousBadgeLexHints,
};

export const FUTURE_CONTINUOUS_MANIFEST = {
  id: "future-continuous",
  label: "Future Continuous",
  passwordEnvKey: "VITE_PASSWORD_FUTURE_CONTINUOUS",
  themeClass: "future-continuous-theme",
  assetsBase: FUTURE_CONTINUOUS_ASSETS_BASE,
  brandAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  status: "preview",
  order: 11,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Future Continuous.",
  basePath: FUTURE_CONTINUOUS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: FUTURE_CONTINUOUS_ROOMS_PER_SECTION,
  sections: FUTURE_CONTINUOUS_SECTIONS,
  sectionsMeta: FUTURE_CONTINUOUS_SECTIONS_META,
  roomRegistries: FUTURE_CONTINUOUS_ROOM_REGISTRIES,
  hintsRegistry: FUTURE_CONTINUOUS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const FUTURE_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: FUTURE_CONTINUOUS_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: futureContinuousTheoryPath("affirmative") },
    { sectionId: "negative", path: futureContinuousTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: futureContinuousTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: futureContinuousTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: futureContinuousTheoryPath("time-expressions"),
    },
  ],
});

export const FUTURE_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(
  FUTURE_CONTINUOUS_ROOM_REGISTRIES,
);

export const FUTURE_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "future-continuous",
  themeClass: "future-continuous-theme",
});

export const FUTURE_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(FUTURE_CONTINUOUS_MANIFEST),
  rooms: FUTURE_CONTINUOUS_ROOMS_CONFIG,
  theory: FUTURE_CONTINUOUS_THEORY_CONFIG,
  theme: FUTURE_CONTINUOUS_THEME_CONFIG,
});
