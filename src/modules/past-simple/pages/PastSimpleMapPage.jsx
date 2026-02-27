// src/modules/past-simple/pages/PastSimpleMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  pastSimpleTheoryPath,
  pastSimpleMapPath,
  pastSimpleRoomPath,
  pastSimpleBadgePath,
  pastSimpleOverviewPath,
} from "../past-paths.js";
import { isTheoryCompleted } from "../past-core/theory-progress.js";
import { progressManager } from "../past-core/progress-manager.js";
import { PAST_SIMPLE_ROOMS_PER_SECTION } from "../past-core/config.js";

const PAST_SIMPLE_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Past Simple.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Past Simple.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Past Simple.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Past Simple? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Past Simple (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function PastSimpleMapPage() {
  return (
    <TenseMapPage
      tenseId="past-simple"
      tenseLabel="Past Simple"
      basePath={pastSimpleMapPath()}
      overviewPath={pastSimpleOverviewPath()}
      badgePath={pastSimpleBadgePath()}
      mapSections={PAST_SIMPLE_MAP_SECTIONS}
      roomsPerSection={PAST_SIMPLE_ROOMS_PER_SECTION}
      buildTheoryPath={pastSimpleTheoryPath}
      buildRoomPath={pastSimpleRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/past-simple-certificate-template.pdf"
    />
  );
}
