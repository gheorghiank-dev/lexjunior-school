import React from "react";
import { Navigate, useParams } from "react-router-dom";

/**
 * TenseRoomRoute
 *
 * Generic room route handler for any tense.
 * Expects:
 *  - basePath: string (e.g. "/grammar/tenses/present-continuous")
 *  - sections: array of section ids (e.g. ["affirmative", "negative", ...])
 *  - roomsPerSection: number (e.g. 7)
 *  - sectionComponents: map sectionId -> RoomComponent ({ roomNumber } -> JSX)
 *  - sectionId (optional): when the route encodes sectionId in the path itself
 *    (e.g. "/present-continuous/affirmative/:roomSlug"), pass it via props.
 *
 * URL pattern expected: either:
 *  - /.../:sectionId/room-:n  (sectionId from params), or
 *  - /.../fixed-section-id/:roomSlug and sectionId from props.
 */
export function TenseRoomRoute({
  basePath,
  sections,
  roomsPerSection,
  sectionComponents,
  sectionId: sectionIdProp,
}) {
  const { sectionId: sectionIdParam, roomSlug } = useParams();
  const sectionId = sectionIdProp ?? sectionIdParam;

  if (!sectionId || !Array.isArray(sections) || !sections.includes(sectionId)) {
    return <Navigate to={basePath} replace />;
  }

  const slug = roomSlug || "";
  const match = /^room-(\d+)$/.exec(slug);
  if (!match) {
    return <Navigate to={basePath} replace />;
  }

  const roomIndex = Number(match[1]);
  if (
    !Number.isInteger(roomIndex) ||
    roomIndex < 1 ||
    roomIndex > roomsPerSection
  ) {
    return <Navigate to={basePath} replace />;
  }

  const RoomComponent = sectionComponents?.[sectionId];
  if (!RoomComponent) {
    return <Navigate to={basePath} replace />;
  }

  return <RoomComponent roomNumber={roomIndex} />;
}
