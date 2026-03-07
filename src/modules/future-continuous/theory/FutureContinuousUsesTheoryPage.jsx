import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futureContinuousMapPath, futureContinuousOverviewPath, futureContinuousRoomPath } from "../future-paths.js";

const SECTION_ID = "uses";

export default function FutureContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futureContinuousMapPath()}
      backLabel="← Înapoi la harta Future Continuous"
      title="Future Continuous – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Future Continuous for actions that will be in progress at a specific future moment or as polite, neutral future arrangements." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["action in progress at a future moment", "future background scene", "polite questions about plans", "expected ongoing future routine"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Future Continuous often answers the question: What will be happening at that time?", "It can sound softer and more neutral than will in some questions.", "Do not confuse it with Future Simple, which focuses more on decision/prediction than duration."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
