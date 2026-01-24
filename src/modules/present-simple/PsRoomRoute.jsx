import React from "react";
import { Navigate, useParams } from "react-router-dom";

import { PS_BASE_PATH } from "./ps-paths.js";
import PsAffirmativeRoomFromRegistry from "./PsAffirmativeRoomFromRegistry.jsx";
import PsNegativeRoomFromRegistry from "./PsNegativeRoomFromRegistry.jsx";
import PsInterrogativeRoomFromRegistry from "./PsInterrogativeRoomFromRegistry.jsx";
import PsTimeExpressionsRoomFromRegistry from "./PsTimeExpressionsRoomFromRegistry.jsx";
import PsUsesRoomFromRegistry from "./PsUsesRoomFromRegistry.jsx";
import { PS_SECTION_PAGES } from "./ps-section-pages.jsx";

/**
 * Generic room route renderer.
 *
 * Keeps URLs stable (e.g. /present-simple/negative/room-1), while letting
 * routing be data-driven.
 */
export default function PsRoomRoute({ sectionId }) {
  const { roomSlug } = useParams();

  const pages = PS_SECTION_PAGES[sectionId];

  // URLs are like "room-1". React Router can't do "room-:n" params, so we
  // match the whole slug and parse it here.
  const match = /^room-(\d+)$/.exec(roomSlug ?? "");
  const n = match ? Number.parseInt(match[1], 10) : NaN;
  const idx = Number.isFinite(n) ? n - 1 : -1;

  // Affirmative is now rendered from content registry (Sprint G5)
  if (sectionId === "affirmative") {
    if (idx < 0 || idx >= 7) {
      return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
    }
    return (
      <PsAffirmativeRoomFromRegistry key={`${sectionId}-${n}`} roomNumber={n} />
    );
  }

  // Uses is now rendered from content registry (Sprint 16)
  if (sectionId === "uses") {
    if (idx < 0 || idx >= 7) {
      return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
    }
    return <PsUsesRoomFromRegistry key={`${sectionId}-${n}`} roomNumber={n} />;
  }

  // Negative is now rendered from content registry (Sprint G6)
  if (sectionId === "negative") {
    if (idx < 0 || idx >= 7) {
      return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
    }
    return (
      <PsNegativeRoomFromRegistry key={`${sectionId}-${n}`} roomNumber={n} />
    );
  }

  // Interrogative is now rendered from content registry (Sprint G7)
  if (sectionId === "interrogative") {
    if (idx < 0 || idx >= 7) {
      return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
    }
    return (
      <PsInterrogativeRoomFromRegistry
        key={`${sectionId}-${n}`}
        roomNumber={n}
      />
    );
  }

  // Time Expressions is now rendered from content registry (Sprint G8)
  if (sectionId === "time-expressions") {
    if (idx < 0 || idx >= 7) {
      return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
    }
    return (
      <PsTimeExpressionsRoomFromRegistry
        key={`${sectionId}-${n}`}
        roomNumber={n}
      />
    );
  }

  if (!pages || idx < 0 || idx >= pages.rooms.length) {
    return <Navigate to={`${PS_BASE_PATH}/map`} replace />;
  }

  const RoomComponent = pages.rooms[idx];
  return <RoomComponent key={`${sectionId}-${n}`} />;
}
