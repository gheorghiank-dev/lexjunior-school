import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futureContinuousMapPath, futureContinuousOverviewPath, futureContinuousRoomPath } from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FutureContinuousTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futureContinuousMapPath()}
      backLabel="← Înapoi la harta Future Continuous"
      title="Future Continuous – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Future Continuous is often linked to a future time reference that frames an action in progress." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Future moments", items: ["this time tomorrow", "at 8 p.m. tonight", "next week at this time"] }, { title: "Background future scenes", items: ["when you arrive", "while you are away", "during the trip"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["A specific future moment is often the trigger.", "when can introduce the future reference point while the main clause uses Future Continuous.", "The tense highlights duration around that point."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
