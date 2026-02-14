import React from "react";
import TenseMapPage from "../tenses/ui/TenseMapPage.jsx";
import { progressManager } from "./ps-core/progress-manager.js";
import { ROOMS_PER_SECTION } from "./ps-core/config.js";
import { isTheoryCompleted } from "./ps-core/theory-progress.js";
import {
  psBadgePath,
  psOverviewPath,
  psRoomPath,
  psTheoryPath,
} from "./ps-paths.js";

/**
 * Map sections metadata for Present Simple.
 * Păstrează textele și test ID-urile existente din PsMapPage.
 */
const PS_MAP_SECTIONS = [
      {
        id: "affirmative",
        title: "Afirmativ",
        description:
          "Recapitulează regulile pentru forma afirmativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-affirmative",
        startTheoryTestId: "ps-start-theory-affirmative",
        roomTestIdPrefix: "ps-room-affirmative",
      },
      {
        id: "negative",
        title: "Negativ",
        description:
          "Recapitulează regulile pentru forma negativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-negative",
        startTheoryTestId: "ps-start-theory-negative",
        roomTestIdPrefix: "ps-room-negative",
      },
      {
        id: "interrogative",
        title: "Interogativ",
        description:
          "Recapitulează regulile pentru forma interogativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-interrogative",
        startTheoryTestId: "ps-start-theory-interrogative",
        roomTestIdPrefix: "ps-room-interrogative",
      },
      {
        id: "uses",
        title: "Uses",
        description:
          "Recapitulează regulile pentru întrebuințările Prezentului Simplu înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-uses",
        startTheoryTestId: "ps-start-theory-uses",
        roomTestIdPrefix: "ps-room-uses",
      },
      {
        id: "time-expressions",
        title: "Expresii de Timp",
        description:
          "Recapitulează regulile pentru expresiile de timp înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-time-expressions",
        startTheoryTestId: "ps-start-theory-time-expressions",
        roomTestIdPrefix: "ps-room-time-expressions",
      },
    ];

/**
 * PsMapPage – Present Simple map, implementată prin TenseMapPage global.
 */
export default function PsMapPage() {
  return (
    <TenseMapPage
      tenseId="present-simple"
      tenseLabel="Present Simple"
      overviewPath={psOverviewPath()}
      progressManager={progressManager}
      isTheoryCompleted={isTheoryCompleted}
      roomsPerSection={ROOMS_PER_SECTION}
      mapSections={PS_MAP_SECTIONS}
      buildTheoryPath={psTheoryPath}
      buildRoomPath={(sectionId, roomNumber) => psRoomPath(sectionId, roomNumber)}
      badgePath={psBadgePath()}
      certificateTemplateUrl="/pdf/certificates/present-simple-certificate-template.pdf"
    />
  );
}
