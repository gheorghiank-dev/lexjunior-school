import React from "react";
import { Navigate, useParams } from "react-router-dom";

import { PC_BASE_PATH } from "./pc-paths.js";

import PcAffirmativeRoom1Page from "./pages/PcAffirmativeRoom1Page.jsx";
import PcAffirmativeRoom2Page from "./pages/PcAffirmativeRoom2Page.jsx";
import PcAffirmativeRoom3Page from "./pages/PcAffirmativeRoom3Page.jsx";
import PcAffirmativeRoom4Page from "./pages/PcAffirmativeRoom4Page.jsx";
import PcAffirmativeRoom5Page from "./pages/PcAffirmativeRoom5Page.jsx";
import PcAffirmativeRoom6Page from "./pages/PcAffirmativeRoom6Page.jsx";
import PcAffirmativeRoom7Page from "./pages/PcAffirmativeRoom7Page.jsx";

import PcNegativeRoom1Page from "./pages/PcNegativeRoom1Page.jsx";
import PcNegativeRoom2Page from "./pages/PcNegativeRoom2Page.jsx";
import PcNegativeRoom3Page from "./pages/PcNegativeRoom3Page.jsx";
import PcNegativeRoom4Page from "./pages/PcNegativeRoom4Page.jsx";
import PcNegativeRoom5Page from "./pages/PcNegativeRoom5Page.jsx";
import PcNegativeRoom6Page from "./pages/PcNegativeRoom6Page.jsx";
import PcNegativeRoom7Page from "./pages/PcNegativeRoom7Page.jsx";

import PcInterrogativeRoom1Page from "./pages/PcInterrogativeRoom1Page.jsx";
import PcInterrogativeRoom2Page from "./pages/PcInterrogativeRoom2Page.jsx";
import PcInterrogativeRoom3Page from "./pages/PcInterrogativeRoom3Page.jsx";
import PcInterrogativeRoom4Page from "./pages/PcInterrogativeRoom4Page.jsx";
import PcInterrogativeRoom5Page from "./pages/PcInterrogativeRoom5Page.jsx";
import PcInterrogativeRoom6Page from "./pages/PcInterrogativeRoom6Page.jsx";
import PcInterrogativeRoom7Page from "./pages/PcInterrogativeRoom7Page.jsx";

import PcUsesRoom1Page from "./pages/PcUsesRoom1Page.jsx";
import PcUsesRoom2Page from "./pages/PcUsesRoom2Page.jsx";
import PcUsesRoom3Page from "./pages/PcUsesRoom3Page.jsx";
import PcUsesRoom4Page from "./pages/PcUsesRoom4Page.jsx";
import PcUsesRoom5Page from "./pages/PcUsesRoom5Page.jsx";
import PcUsesRoom6Page from "./pages/PcUsesRoom6Page.jsx";
import PcUsesRoom7Page from "./pages/PcUsesRoom7Page.jsx";

import PcTimeExpressionsRoom1Page from "./pages/PcTimeExpressionsRoom1Page.jsx";
import PcTimeExpressionsRoom2Page from "./pages/PcTimeExpressionsRoom2Page.jsx";
import PcTimeExpressionsRoom3Page from "./pages/PcTimeExpressionsRoom3Page.jsx";
import PcTimeExpressionsRoom4Page from "./pages/PcTimeExpressionsRoom4Page.jsx";
import PcTimeExpressionsRoom5Page from "./pages/PcTimeExpressionsRoom5Page.jsx";
import PcTimeExpressionsRoom6Page from "./pages/PcTimeExpressionsRoom6Page.jsx";
import PcTimeExpressionsRoom7Page from "./pages/PcTimeExpressionsRoom7Page.jsx";

/**
 * Generic room route renderer for Present Continuous.
 *
 * Keeps URLs stable (e.g. /present-continuous/affirmative/room-1),
 * while letting routing be data-driven per section.
 */
export default function PcRoomRoute({ sectionId }) {
  const { roomSlug } = useParams();

  // URLs are like "room-1". React Router can't do "room-:n" params, so we
  // match the whole slug and parse it here.
  const match = /^room-(\d+)$/.exec(roomSlug ?? "");
  const n = match ? Number.parseInt(match[1], 10) : Number.NaN;
  const idx = Number.isFinite(n) ? n - 1 : -1;

  if (idx < 0 || idx >= 7) {
    return <Navigate to={`${PC_BASE_PATH}/map`} replace />;
  }

  if (sectionId === "affirmative") {
    const Component = AFFIRMATIVE_ROOMS[idx];
    return <Component key={`${sectionId}-${n}`} />;
  }

  if (sectionId === "negative") {
    const Component = NEGATIVE_ROOMS[idx];
    return <Component key={`${sectionId}-${n}`} />;
  }

  if (sectionId === "interrogative") {
    const Component = INTERROGATIVE_ROOMS[idx];
    return <Component key={`${sectionId}-${n}`} />;
  }

  if (sectionId === "uses") {
    const Component = USES_ROOMS[idx];
    return <Component key={`${sectionId}-${n}`} />;
  }

  if (sectionId === "time-expressions") {
    const Component = TIME_EXPRESSIONS_ROOMS[idx];
    return <Component key={`${sectionId}-${n}`} />;
  }

  // Fallback – if sectionId is unknown, go back to map.
  return <Navigate to={`${PC_BASE_PATH}/map`} replace />;
}

const AFFIRMATIVE_ROOMS = [
  PcAffirmativeRoom1Page,
  PcAffirmativeRoom2Page,
  PcAffirmativeRoom3Page,
  PcAffirmativeRoom4Page,
  PcAffirmativeRoom5Page,
  PcAffirmativeRoom6Page,
  PcAffirmativeRoom7Page,
];

const NEGATIVE_ROOMS = [
  PcNegativeRoom1Page,
  PcNegativeRoom2Page,
  PcNegativeRoom3Page,
  PcNegativeRoom4Page,
  PcNegativeRoom5Page,
  PcNegativeRoom6Page,
  PcNegativeRoom7Page,
];

const INTERROGATIVE_ROOMS = [
  PcInterrogativeRoom1Page,
  PcInterrogativeRoom2Page,
  PcInterrogativeRoom3Page,
  PcInterrogativeRoom4Page,
  PcInterrogativeRoom5Page,
  PcInterrogativeRoom6Page,
  PcInterrogativeRoom7Page,
];

const USES_ROOMS = [
  PcUsesRoom1Page,
  PcUsesRoom2Page,
  PcUsesRoom3Page,
  PcUsesRoom4Page,
  PcUsesRoom5Page,
  PcUsesRoom6Page,
  PcUsesRoom7Page,
];

const TIME_EXPRESSIONS_ROOMS = [
  PcTimeExpressionsRoom1Page,
  PcTimeExpressionsRoom2Page,
  PcTimeExpressionsRoom3Page,
  PcTimeExpressionsRoom4Page,
  PcTimeExpressionsRoom5Page,
  PcTimeExpressionsRoom6Page,
  PcTimeExpressionsRoom7Page,
];
