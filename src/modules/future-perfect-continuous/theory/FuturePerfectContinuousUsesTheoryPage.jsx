import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futurePerfectContinuousMapPath, futurePerfectContinuousOverviewPath, futurePerfectContinuousRoomPath } from "../future-paths.js";

const SECTION_ID = "uses";

export default function FuturePerfectContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futurePerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Future Perfect Continuous"
      title="Future Perfect Continuous – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Future Perfect Continuous for the duration of an activity up to a future point." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["duration up to a future moment", "emphasis on process before a deadline", "future result explained by long activity", "formal long-range timeline descriptions"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["This tense combines future viewpoint with duration.", "by + future point and for + duration are especially important together.", "Choose it when the process matters more than simple completion."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
