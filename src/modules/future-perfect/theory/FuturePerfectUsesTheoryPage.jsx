import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futurePerfectMapPath, futurePerfectOverviewPath, futurePerfectRoomPath } from "../future-paths.js";

const SECTION_ID = "uses";

export default function FuturePerfectUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Future Perfect for actions that will be completed before a future deadline or future point." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["completion before a deadline", "result achieved by a future moment", "predictions about finished actions", "formal timeline planning"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["The key question is: What will have been finished by then?", "by + future point is one of the strongest clues.", "This tense focuses on completion, not process."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
