import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futurePerfectContinuousMapPath, futurePerfectContinuousOverviewPath, futurePerfectContinuousRoomPath } from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FuturePerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futurePerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Future Perfect Continuous"
      title="Future Perfect Continuous – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Future Perfect Continuous is strongly linked to duration markers and a clear future endpoint." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Duration + endpoint", items: ["for two hours by 6 p.m.", "for ten years by 2035"] }, { title: "Reference points", items: ["by then", "by the time you arrive"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["for shows duration; by introduces the future endpoint.", "Compare with Future Perfect when the focus shifts from process to completion.", "This tense is rarer, so clear timeline logic matters a lot."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
