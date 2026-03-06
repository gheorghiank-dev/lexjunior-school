import React from "react";
import { TenseRoomRoute } from "./ui/TenseRoomRoute.jsx";

/**
 * Small factory for per-tense room route wrappers.
 *
 * Goal:
 * - keep current behavior identical
 * - reduce repeated boilerplate in Ps/Pc/Past room route wrappers
 * - keep section-to-component mapping explicit for now
 */
export function createSectionRoomRoute({
  basePath,
  sections,
  roomsPerSection,
  sectionComponents,
}) {
  const sectionIds = sections.map((section) => section.id);

  return function SectionRoomRoute({ sectionId }) {
    return (
      <TenseRoomRoute
        basePath={basePath}
        sections={sectionIds}
        roomsPerSection={roomsPerSection}
        sectionComponents={sectionComponents}
        sectionId={sectionId}
      />
    );
  };
}
