import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectContinuousMapPath, presentPerfectContinuousOverviewPath, presentPerfectContinuousRoomPath } from "../present-paths.js";

const SECTION_ID = "time-expressions";

export default function PresentPerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={presentPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Present Perfect Continuous"
      title="Present Perfect Continuous – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="The tense is often signalled by duration markers and open-time contexts that connect the past to the present." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Duration markers", items: ["for two hours", "since morning", "all day"] }, { title: "Open-time contexts", items: ["lately", "recently", "these days"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["for = duration; since = starting point.", "recently / lately often support Present Perfect Continuous, especially with temporary repeated activity.", "If the focus is completion/result, Present Perfect may be better."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
