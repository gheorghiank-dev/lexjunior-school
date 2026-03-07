import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { futureSimpleMapPath, futureSimpleOverviewPath, futureSimpleRoomPath } from "../future-paths.js";

const SECTION_ID = "uses";

export default function FutureSimpleUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futureSimpleMapPath()}
      backLabel="← Înapoi la harta Future Simple"
      title="Future Simple – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Future Simple for spontaneous decisions, predictions, promises, offers and future facts." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["spontaneous decisions made now", "predictions and opinions", "promises / offers / requests", "neutral future facts"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Will often appears when the speaker decides at the moment of speaking.", "Do not use will when you want to stress a prior plan; then be going to is often better.", "Future Simple is also common for polite offers: I will help you."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureSimpleRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
