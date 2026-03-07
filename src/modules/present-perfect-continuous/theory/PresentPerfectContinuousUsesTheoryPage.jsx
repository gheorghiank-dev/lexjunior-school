import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectContinuousMapPath, presentPerfectContinuousOverviewPath, presentPerfectContinuousRoomPath } from "../present-paths.js";

const SECTION_ID = "uses";

export default function PresentPerfectContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={presentPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Present Perfect Continuous"
      title="Present Perfect Continuous – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Present Perfect Continuous for actions that started in the past and are still continuing or have visible present effects." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["duration up to now", "recent activity with visible result", "temporary ongoing situations", "emphasis on process rather than result"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["for and since are especially common here.", "Choose Present Perfect Continuous when you want to stress activity/process, not completion.", "Some stative verbs usually prefer Present Perfect instead."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
