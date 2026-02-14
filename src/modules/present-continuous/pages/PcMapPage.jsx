import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import { isTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcProgressManager } from "../pc-core/progress-manager.js";
import { PC_ROOMS_PER_SECTION } from "../pc-core/config.js";
import { pcOverviewPath, pcRoomPath, pcTheoryPath, pcBadgePath } from "../pc-paths.js";

/**
 * Map sections metadata for Present Continuous.
 * Keeps the same text, test ids and prefixes as the previous PcMapPage.
 */
const PC_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Recapitulează regulile pentru forma afirmativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-affirmative",
    startTheoryTestId: "pc-start-theory-affirmative",
    roomTestIdPrefix: "pc-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-negative",
    startTheoryTestId: "pc-start-theory-negative",
    roomTestIdPrefix: "pc-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-interrogative",
    startTheoryTestId: "pc-start-theory-interrogative",
    roomTestIdPrefix: "pc-room-interrogative",
  },
  {
    id: "uses",
    title: "Uses",
    description:
      "Recapitulează regulile pentru întrebuințările Present Continuous înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-uses",
    startTheoryTestId: "pc-start-theory-uses",
    roomTestIdPrefix: "pc-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Recapitulează expresiile de timp specifice Present Continuous înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-time-expressions",
    startTheoryTestId: "pc-start-theory-time-expressions",
    roomTestIdPrefix: "pc-room-time-expressions",
  },
];

/**
 * PcMapPage – Present Continuous map, implemented via the generic TenseMapPage.
 */
export default function PcMapPage() {
  return (
    <TenseMapPage
      tenseId="present-continuous"
      tenseLabel="Present Continuous"
      overviewPath={pcOverviewPath()}
      progressManager={pcProgressManager}
      isTheoryCompleted={isTheoryCompleted}
      roomsPerSection={PC_ROOMS_PER_SECTION}
      mapSections={PC_MAP_SECTIONS}
      buildTheoryPath={pcTheoryPath}
      buildRoomPath={(sectionId, roomNumber) =>
        pcRoomPath(sectionId, roomNumber)
      }
      badgePath={pcBadgePath()}
      certificateTemplateUrl="/pdf/certificates/present-continuous-certificate-template.pdf"
    />
  );
}
