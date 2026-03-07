import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  ScaffoldTimeCardOne,
  ScaffoldTimeCardTwo,
  ScaffoldTimeCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futureSimpleMapPath, futureSimpleOverviewPath, futureSimpleRoomPath } from "../future-paths.js";

const SECTION_ID = "time-expressions";

export default function FutureSimpleTimeExpressionsTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={futureSimpleMapPath()}
      backLabel="← Înapoi la harta Future Simple"
      title="Future Simple – Time Expressions"
      lead="Pagini de time expressions standardizate: 4 carduri, aceeași ierarhie vizuală și aceleași puncte-cheie pentru fiecare timp."
      card1Intro={<>Uită-te mai întâi la indiciile de timp care te pot împinge spre acest tense.</>}
      card1Content={<ScaffoldTimeCardOne summary="Future Simple may appear with future adverbials, but its use often depends more on intention than on the adverb itself." />}
      card2Intro={<>Grupează expresiile pe familii. Așa devin mai ușor de recunoscut în exerciții.</>}
      card2Content={<ScaffoldTimeCardTwo groups={[{ title: "Common future markers", items: ["tomorrow", "next week", "soon"] }, { title: "Opinion / prediction contexts", items: ["I think", "probably", "maybe"] }]} />}
      card3Intro={<>Cardul 3 îți arată capcanele și diferențele care contează cel mai mult.</>}
      card3Content={<ScaffoldTimeCardThree notes={["I think / probably often pair naturally with will.", "Tomorrow can also work with be going to or Present Continuous if the meaning changes.", "No time expression is required when the future meaning is clear from context."]} />}
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureSimpleRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
