import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import { beGoingToMapPath, beGoingToOverviewPath, beGoingToRoomPath } from "../be-paths.js";

const SECTION_ID = "uses";

export default function BeGoingToUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={beGoingToMapPath()}
      backLabel="← Înapoi la harta Be Going To"
      title="Be Going To – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use be going to for intentions, plans decided before the moment of speaking, and predictions based on present evidence." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["plans already decided", "intentions and personal decisions", "predictions based on visible evidence", "near-future arrangements explained through intention"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Do not confuse be going to with will: will is often more spontaneous.", "Visible evidence strongly supports be going to: Look at those clouds! It is going to rain.", "Do not forget the verb to be before going to."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: beGoingToRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
