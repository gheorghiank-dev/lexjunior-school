import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { pastPerfectContinuousMapPath, pastPerfectContinuousOverviewPath, pastPerfectContinuousRoomPath } from "../past-perfect-continuous-paths.js";

const SECTION_ID = "time-expressions";

export default function PastPerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Past Perfect Continuous"
      title="Past Perfect Continuous – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Past Perfect Continuous usually appears with duration markers plus a second past reference point." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Duration markers", items: ["for hours", "since morning", "all day"] }, { title: "Reference points", items: ["before she arrived", "when the lesson started", "by then"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["The action may stop at the past reference point or continue beyond it, depending on context.", "Look for the idea of ongoing activity before something else happened.", "for and since remain important clues."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
