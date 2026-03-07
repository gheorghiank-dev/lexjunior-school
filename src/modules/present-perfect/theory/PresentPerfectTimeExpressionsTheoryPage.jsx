import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectMapPath, presentPerfectOverviewPath, presentPerfectRoomPath } from "../present-paths.js";

const SECTION_ID = "time-expressions";

export default function PresentPerfectTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={presentPerfectMapPath()}
      backLabel="← Înapoi la harta Present Perfect"
      title="Present Perfect – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Present Perfect is strongly linked to time expressions that keep the period open or connect the past with now." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Open-time markers", items: ["today", "this week", "this year"] }, { title: "Classic signals", items: ["already", "yet", "just", "ever", "never"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["since and for are central when something started in the past and continues now.", "yesterday and last year usually block Present Perfect.", "already / yet / just often guide you straight toward Present Perfect."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
