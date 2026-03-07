import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { pastPerfectContinuousMapPath, pastPerfectContinuousOverviewPath, pastPerfectContinuousRoomPath } from "../past-perfect-continuous-paths.js";

const SECTION_ID = "uses";

export default function PastPerfectContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Past Perfect Continuous"
      title="Past Perfect Continuous – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Past Perfect Continuous for an action that had been continuing up to a point in the past." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["duration before a past moment", "cause of a past result", "background process before another event", "emphasis on length/activity before the past point"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["This tense highlights the process and duration before another moment in the past.", "for and since are frequent clues here too.", "Compare carefully with Past Perfect when the result matters more than the process."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
