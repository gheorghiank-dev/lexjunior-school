import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import { pastPerfectMapPath, pastPerfectOverviewPath, pastPerfectRoomPath } from "../past-perfect-paths.js";

const SECTION_ID = "time-expressions";

export default function PastPerfectTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pastPerfectMapPath()}
      backLabel="← Înapoi la harta Past Perfect"
      title="Past Perfect – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Past Perfect often appears with markers that show sequence or a point before another past event." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Sequence markers", items: ["before", "after", "by the time"] }, { title: "Past reference points", items: ["when I arrived", "by 2010", "before that"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["by the time often introduces the later action, while Past Perfect marks what was completed first.", "already and just can also appear with Past Perfect in appropriate contexts.", "Look for two layers of past time."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
