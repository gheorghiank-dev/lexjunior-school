// src/modules/future-simple/pages/FutureSimpleMapPage.jsx
import React from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import {
  futureSimpleTheoryPath,
  futureSimpleMapPath,
  futureSimpleRoomPath,
  futureSimpleBadgePath,
  futureSimpleOverviewPath,
} from "../future-paths.js";
import { isTheoryCompleted } from "../future-core/theory-progress.js";
import { progressManager } from "../future-core/progress-manager.js";
import { FUTURE_SIMPLE_ROOMS_PER_SECTION } from "../future-core/config.js";

const FUTURE_SIMPLE_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Învață cum se formează propozițiile afirmative în Future Simple.",
    pathTestId: "past-path-affirmative",
    startTheoryTestId: "past-start-theory-affirmative",
    roomTestIdPrefix: "past-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte de camerele Future Simple.",
    pathTestId: "past-path-negative",
    startTheoryTestId: "past-start-theory-negative",
    roomTestIdPrefix: "past-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte de camerele Future Simple.",
    pathTestId: "past-path-interrogative",
    startTheoryTestId: "past-start-theory-interrogative",
    roomTestIdPrefix: "past-room-interrogative",
  },
  {
    id: "uses",
    title: "Întrebuințări",
    description: "Când folosim Future Simple? Recapitulează înainte de camere.",
    pathTestId: "past-path-uses",
    startTheoryTestId: "past-start-theory-uses",
    roomTestIdPrefix: "past-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Expresii de timp tipice pentru Future Simple (yesterday, last week etc.).",
    pathTestId: "past-path-time-expressions",
    startTheoryTestId: "past-start-theory-time-expressions",
    roomTestIdPrefix: "past-room-time-expressions",
  },
];

export default function FutureSimpleMapPage() {
  return (
    <TenseMapPage
      tenseId="future-simple"
      tenseLabel="Future Simple"
      basePath={futureSimpleMapPath()}
      overviewPath={futureSimpleOverviewPath()}
      badgePath={futureSimpleBadgePath()}
      mapSections={FUTURE_SIMPLE_MAP_SECTIONS}
      roomsPerSection={FUTURE_SIMPLE_ROOMS_PER_SECTION}
      buildTheoryPath={futureSimpleTheoryPath}
      buildRoomPath={futureSimpleRoomPath}
      isTheoryCompleted={isTheoryCompleted}
      progressManager={progressManager}
      certificateTemplateUrl="/pdf/certificates/future-simple-certificate-template.pdf"
    />
  );
}
