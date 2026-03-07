import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futurePerfectMapPath, futurePerfectOverviewPath, futurePerfectRoomPath } from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FuturePerfectTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Future Perfect usually appears with deadlines or future points before which something will be completed." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Deadlines", items: ["by tomorrow", "by next Friday", "by 2030"] }, { title: "Future reference points", items: ["before you arrive", "by the end of the month"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["by signals the latest possible point for completion.", "Do not confuse Future Perfect with Future Continuous; one shows completion, the other process.", "before-clauses also help establish the deadline relationship."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
