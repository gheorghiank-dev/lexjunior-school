import React from "react";
import "./past-continuous-theme.css";

import {
  PAST_CONTINUOUS_SECTIONS,
  PAST_CONTINUOUS_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./past-continuous-core/config.js";
import {
  PAST_CONTINUOUS_ASSETS_BASE,
  PAST_CONTINUOUS_LEX_HEAD_SVG,
} from "./past-continuous-core/assets.js";

import { PAST_CONTINUOUS_AFFIRMATIVE_ROOMS } from "./rooms/past-continuous-affirmative-rooms.jsx";
import { PAST_CONTINUOUS_NEGATIVE_ROOMS } from "./rooms/past-continuous-negative-rooms.jsx";
import { PAST_CONTINUOUS_INTERROGATIVE_ROOMS } from "./rooms/past-continuous-interrogative-rooms.jsx";
import { PAST_CONTINUOUS_USES_ROOMS } from "./rooms/past-continuous-uses-rooms.jsx";
import { PAST_CONTINUOUS_TIME_EXPRESSIONS_ROOMS } from "./rooms/past-continuous-time-expressions-rooms.jsx";

import {
  pastContinuousAffirmativeLexHints,
  pastContinuousNegativeLexHints,
  pastContinuousInterrogativeLexHints,
  pastContinuousUsesLexHints,
  pastContinuousTimeExpressionsLexHints,
  pastContinuousBadgeLexHints,
} from "../lex-hints/past-continuous/index.js";

import PastContinuousPage from "./pages/PastContinuousPage.jsx";
import PastContinuousOverviewPage from "./pages/PastContinuousOverviewPage.jsx";
import PastContinuousBadgePage from "./pages/PastContinuousBadgePage.jsx";
import PastContinuousMapPage from "./pages/PastContinuousMapPage.jsx";

import { PAST_CONTINUOUS_SECTION_PAGES } from "./past-continuous-section-pages.jsx";
import { PAST_CONTINUOUS_BASE_PATH, pastContinuousTheoryPath } from "./past-continuous-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildPastContinuousRoutes() {
  const PastContinuousRoomRoute = React.lazy(
    () => import("./pages/PastContinuousRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: PAST_CONTINUOUS_BASE_PATH,
    topLevelRoutes: [
      { path: PAST_CONTINUOUS_BASE_PATH, element: <PastContinuousPage /> },
      {
        path: `${PAST_CONTINUOUS_BASE_PATH}/overview`,
        element: <PastContinuousOverviewPage />,
      },
      {
        path: `${PAST_CONTINUOUS_BASE_PATH}/badge`,
        element: <PastContinuousBadgePage />,
      },
      { path: `${PAST_CONTINUOUS_BASE_PATH}/map`, element: <PastContinuousMapPage /> },
    ],
    sections: PAST_CONTINUOUS_SECTIONS,
    sectionPages: PAST_CONTINUOUS_SECTION_PAGES,
    theoryPath: pastContinuousTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <PastContinuousRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const PAST_CONTINUOUS_SECTIONS_META = PAST_CONTINUOUS_SECTIONS.reduce(
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

const PAST_CONTINUOUS_ROOM_REGISTRIES = {
  affirmative: PAST_CONTINUOUS_AFFIRMATIVE_ROOMS,
  negative: PAST_CONTINUOUS_NEGATIVE_ROOMS,
  interrogative: PAST_CONTINUOUS_INTERROGATIVE_ROOMS,
  uses: PAST_CONTINUOUS_USES_ROOMS,
  "time-expressions": PAST_CONTINUOUS_TIME_EXPRESSIONS_ROOMS,
};

const PAST_CONTINUOUS_HINTS_REGISTRY = {
  affirmative: pastContinuousAffirmativeLexHints,
  negative: pastContinuousNegativeLexHints,
  interrogative: pastContinuousInterrogativeLexHints,
  uses: pastContinuousUsesLexHints,
  "time-expressions": pastContinuousTimeExpressionsLexHints,
  badge: pastContinuousBadgeLexHints,
};

export const PAST_CONTINUOUS_MANIFEST = {
  id: "past-continuous",
  label: "Past Continuous",
  passwordEnvKey: "VITE_PASSWORD_PAST_CONTINUOUS",
  themeClass: "past-continuous-theme",
  assetsBase: PAST_CONTINUOUS_ASSETS_BASE,
  brandAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  status: "preview",
  order: 4,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Past Continuous.",
  basePath: PAST_CONTINUOUS_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: PAST_CONTINUOUS_ROOMS_PER_SECTION,
  sections: PAST_CONTINUOUS_SECTIONS,
  sectionsMeta: PAST_CONTINUOUS_SECTIONS_META,
  roomRegistries: PAST_CONTINUOUS_ROOM_REGISTRIES,
  hintsRegistry: PAST_CONTINUOUS_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const PAST_CONTINUOUS_THEORY_CONFIG = defineTenseTheory({
  basePath: PAST_CONTINUOUS_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: pastContinuousTheoryPath("affirmative") },
    { sectionId: "negative", path: pastContinuousTheoryPath("negative") },
    { sectionId: "interrogative", path: pastContinuousTheoryPath("interrogative") },
    { sectionId: "uses", path: pastContinuousTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: pastContinuousTheoryPath("time-expressions"),
    },
  ],
});

export const PAST_CONTINUOUS_ROOMS_CONFIG = defineTenseRooms(
  PAST_CONTINUOUS_ROOM_REGISTRIES,
);

export const PAST_CONTINUOUS_THEME_CONFIG = defineTenseTheme({
  id: "past-continuous",
  themeClass: "past-continuous-theme",
});

export const PAST_CONTINUOUS_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(PAST_CONTINUOUS_MANIFEST),
  rooms: PAST_CONTINUOUS_ROOMS_CONFIG,
  theory: PAST_CONTINUOUS_THEORY_CONFIG,
  theme: PAST_CONTINUOUS_THEME_CONFIG,
});
