import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import { pastPerfectMapPath, pastPerfectOverviewPath, pastPerfectRoomPath } from "../past-perfect-paths.js";

const SECTION_ID = "uses";

export default function PastPerfectUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastPerfectMapPath()}
      backLabel="← Înapoi la harta Past Perfect"
      title="Past Perfect – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Past Perfect for the earlier of two past actions or for background that happened before another past moment." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["the earlier of two past actions", "cause before a past result", "reported past background", "completed action before a past point"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Past Perfect does not stand alone very often; it usually relates to another past reference point.", "Think timeline: first = Past Perfect, second = Past Simple.", "Do not overuse it when simple past sequence is already clear."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
