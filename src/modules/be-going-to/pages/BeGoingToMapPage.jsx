// src/modules/be-going-to/pages/BeGoingToMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  beGoingToTheoryPath,
  beGoingToMapPath,
  beGoingToRoomPath,
  beGoingToBadgePath,
  beGoingToOverviewPath,
} from "../be-paths.js";
import { isTheoryCompleted } from "../be-core/theory-progress.js";
import { progressManager } from "../be-core/progress-manager.js";
import { BE_GOING_TO_ROOMS_PER_SECTION } from "../be-core/config.js";

const BE_GOING_TO_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Be Going To.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Be Going To.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Be Going To.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Be Going To? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Be Going To (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function BeGoingToMapPage() {
  return (
    <TenseMapPage
      tenseId="be-going-to"
      tenseLabel="Be Going To"
      basePath={beGoingToMapPath()}
      overviewPath={beGoingToOverviewPath()}
      badgePath={beGoingToBadgePath()}
      mapSections={BE_GOING_TO_MAP_SECTIONS}
      roomsPerSection={BE_GOING_TO_ROOMS_PER_SECTION}
      buildTheoryPath={beGoingToTheoryPath}
      buildRoomPath={beGoingToRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/be-going-to-certificate-template.pdf"
    />
  );
}
