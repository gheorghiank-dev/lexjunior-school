import React from "react";
import "./future-theme.css";

import {
  FUTURE_SIMPLE_SECTIONS,
  FUTURE_SIMPLE_ROOMS_PER_SECTION,
  STORAGE_PREFIX,
  HUD_TEXT,
} from "./future-core/config.js";
import {
  FUTURE_SIMPLE_ASSETS_BASE,
  FUTURE_SIMPLE_LEX_HEAD_SVG,
} from "./future-core/assets.js";

import { FUTURE_SIMPLE_AFFIRMATIVE_ROOMS } from "./rooms/future-simple-affirmative-rooms.jsx";
import { FUTURE_SIMPLE_NEGATIVE_ROOMS } from "./rooms/future-simple-negative-rooms.jsx";
import { FUTURE_SIMPLE_INTERROGATIVE_ROOMS } from "./rooms/future-simple-interrogative-rooms.jsx";
import { FUTURE_SIMPLE_USES_ROOMS } from "./rooms/future-simple-uses-rooms.jsx";
import { FUTURE_SIMPLE_TIME_EXPRESSIONS_ROOMS } from "./rooms/future-simple-time-expressions-rooms.jsx";

import {
  futureSimpleAffirmativeLexHints,
  futureSimpleNegativeLexHints,
  futureSimpleInterrogativeLexHints,
  futureSimpleUsesLexHints,
  futureSimpleTimeExpressionsLexHints,
  futureSimpleBadgeLexHints,
} from "../lex-hints/future-simple/index.js";

import FutureSimplePage from "./pages/FutureSimplePage.jsx";
import FutureSimpleOverviewPage from "./pages/FutureSimpleOverviewPage.jsx";
import FutureSimpleBadgePage from "./pages/FutureSimpleBadgePage.jsx";
import FutureSimpleMapPage from "./pages/FutureSimpleMapPage.jsx";

import { FUTURE_SIMPLE_SECTION_PAGES } from "./future-section-pages.jsx";
import {
  FUTURE_SIMPLE_BASE_PATH,
  futureSimpleTheoryPath,
} from "./future-paths.js";

import {
  defineTenseManifest,
  defineTenseRooms,
  defineTenseTheory,
  defineTenseKit,
  defineTenseTheme,
} from "../../tense-kit";
import { createTenseRoutes } from "../tenses/createTenseRoutes.jsx";

export function buildFutureSimpleRoutes() {
  const FutureSimpleRoomRoute = React.lazy(
    () => import("./pages/FutureSimpleRoomRoute.jsx"),
  );

  return createTenseRoutes({
    basePath: FUTURE_SIMPLE_BASE_PATH,
    topLevelRoutes: [
      { path: FUTURE_SIMPLE_BASE_PATH, element: <FutureSimplePage /> },
      {
        path: `${FUTURE_SIMPLE_BASE_PATH}/overview`,
        element: <FutureSimpleOverviewPage />,
      },
      {
        path: `${FUTURE_SIMPLE_BASE_PATH}/badge`,
        element: <FutureSimpleBadgePage />,
      },
      {
        path: `${FUTURE_SIMPLE_BASE_PATH}/map`,
        element: <FutureSimpleMapPage />,
      },
    ],
    sections: FUTURE_SIMPLE_SECTIONS,
    sectionPages: FUTURE_SIMPLE_SECTION_PAGES,
    theoryPath: futureSimpleTheoryPath,
    createRoomRouteElement: (sectionId) => (
      <React.Suspense fallback={null}>
        <FutureSimpleRoomRoute sectionId={sectionId} />
      </React.Suspense>
    ),
  });
}

const FUTURE_SIMPLE_SECTIONS_META = FUTURE_SIMPLE_SECTIONS.reduce(
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

const FUTURE_SIMPLE_ROOM_REGISTRIES = {
  affirmative: FUTURE_SIMPLE_AFFIRMATIVE_ROOMS,
  negative: FUTURE_SIMPLE_NEGATIVE_ROOMS,
  interrogative: FUTURE_SIMPLE_INTERROGATIVE_ROOMS,
  uses: FUTURE_SIMPLE_USES_ROOMS,
  "time-expressions": FUTURE_SIMPLE_TIME_EXPRESSIONS_ROOMS,
};

const FUTURE_SIMPLE_HINTS_REGISTRY = {
  affirmative: futureSimpleAffirmativeLexHints,
  negative: futureSimpleNegativeLexHints,
  interrogative: futureSimpleInterrogativeLexHints,
  uses: futureSimpleUsesLexHints,
  "time-expressions": futureSimpleTimeExpressionsLexHints,
  badge: futureSimpleBadgeLexHints,
};

export const FUTURE_SIMPLE_MANIFEST = {
  id: "future-simple",
  label: "Future Simple",
  passwordEnvKey: "VITE_PASSWORD_FUTURE_SIMPLE",
  themeClass: "future-simple-theme",
  assetsBase: FUTURE_SIMPLE_ASSETS_BASE,
  brandAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  status: "preview",
  order: 5,
  description:
    "Teorie, camere de exerciții, cameră finală și badge pentru Future Simple.",
  basePath: FUTURE_SIMPLE_BASE_PATH,
  storagePrefix: STORAGE_PREFIX,
  roomsPerSection: FUTURE_SIMPLE_ROOMS_PER_SECTION,
  sections: FUTURE_SIMPLE_SECTIONS,
  sectionsMeta: FUTURE_SIMPLE_SECTIONS_META,
  roomRegistries: FUTURE_SIMPLE_ROOM_REGISTRIES,
  hintsRegistry: FUTURE_SIMPLE_HINTS_REGISTRY,
  hudText: HUD_TEXT,
};

export const FUTURE_SIMPLE_THEORY_CONFIG = defineTenseTheory({
  basePath: FUTURE_SIMPLE_BASE_PATH,
  pages: [
    { sectionId: "affirmative", path: futureSimpleTheoryPath("affirmative") },
    { sectionId: "negative", path: futureSimpleTheoryPath("negative") },
    {
      sectionId: "interrogative",
      path: futureSimpleTheoryPath("interrogative"),
    },
    { sectionId: "uses", path: futureSimpleTheoryPath("uses") },
    {
      sectionId: "time-expressions",
      path: futureSimpleTheoryPath("time-expressions"),
    },
  ],
});

export const FUTURE_SIMPLE_ROOMS_CONFIG = defineTenseRooms(
  FUTURE_SIMPLE_ROOM_REGISTRIES,
);

export const FUTURE_SIMPLE_THEME_CONFIG = defineTenseTheme({
  id: "future-simple",
  themeClass: "future-simple-theme",
});

export const FUTURE_SIMPLE_TENSE_KIT = defineTenseKit({
  manifest: defineTenseManifest(FUTURE_SIMPLE_MANIFEST),
  rooms: FUTURE_SIMPLE_ROOMS_CONFIG,
  theory: FUTURE_SIMPLE_THEORY_CONFIG,
  theme: FUTURE_SIMPLE_THEME_CONFIG,
});
