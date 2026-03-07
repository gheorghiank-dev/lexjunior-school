import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import {
  ScaffoldUsesCardOne,
  ScaffoldUsesCardTwo,
  ScaffoldUsesCardThree,
} from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectMapPath, presentPerfectOverviewPath, presentPerfectRoomPath } from "../present-paths.js";

const SECTION_ID = "uses";

export default function PresentPerfectUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={presentPerfectMapPath()}
      backLabel="← Înapoi la harta Present Perfect"
      title="Present Perfect – Uses"
      lead="Pagini de uses standardizate: 4 carduri, aceeași arhitectură vizuală și aceeași ordine logică ca în restul modulelor."
      card1Intro={<>Începe cu ideea generală: ce tip de situații exprimă acest timp și care este rolul lui principal.</>}
      card1Content={<ScaffoldUsesCardOne summary="Use Present Perfect when the past action is connected to the present result, experience or unfinished time period." />}
      card2Intro={<>Aici vezi principalele familii de uses pe care le vei întâlni în theory și în camere.</>}
      card2Content={<ScaffoldUsesCardTwo uses={["life experiences", "recent actions with present result", "unfinished time periods", "states or actions continuing up to now"]} />}
      card3Intro={<>Cardul 3 te obligă să compari atent tense-ul cu alte structuri apropiate.</>}
      card3Content={<ScaffoldUsesCardThree notes={["Do not combine Present Perfect with finished past markers like yesterday.", "British English strongly prefers Present Perfect with just, already, yet in many contexts.", "The link to the present is the key idea."]} />}
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
