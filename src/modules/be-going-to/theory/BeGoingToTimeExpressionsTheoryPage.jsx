import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import { beGoingToMapPath, beGoingToOverviewPath, beGoingToRoomPath } from "../be-paths.js";

const SECTION_ID = "time-expressions";

export default function BeGoingToTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={beGoingToMapPath()}
      backLabel="← Înapoi la harta Be Going To"
      title="Be Going To – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Be going to often appears with near-future expressions and contexts showing intention or evidence." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Near future", items: ["tomorrow", "tonight", "next week"] }, { title: "Plan markers", items: ["soon", "in a minute", "this weekend"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["Time expressions help, but intention/evidence matters more than the adverb itself.", "Tomorrow can also appear with Present Continuous for arrangements or with will in other contexts.", "Look! and Watch out! often introduce evidence-based predictions."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: beGoingToRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
