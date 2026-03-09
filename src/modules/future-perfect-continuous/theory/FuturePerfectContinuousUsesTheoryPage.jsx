import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousOverviewPath,
  futurePerfectContinuousRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "uses";

export default function FuturePerfectContinuousUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futurePerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Future Perfect Continuous"
      title="Future Perfect Continuous – Întrebuințări"
      lead="Aici vezi când folosim Future Perfect Continuous și ce situație exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect Continuous pune accent pe durata unei acțiuni care va fi ajuns până la un anumit moment din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce transmite">
          <p className="ps-text">
            Folosim Future Perfect Continuous pentru a vorbi despre <strong>durata unei acțiuni care va fi în desfășurare până la un moment specificat din viitor</strong>.
          </p>
        </TenseStructureBox>
      }
      card2Title="Întrebuințarea principală"
      card2Intro={<>Aceasta este utilizarea esențială din materialul tău.</>}
      card2Content={
        <div className="example-box">
          <h3>Use de bază</h3>
          <ul className="ps-mini-list">
            <li>accent pe <strong>durată</strong>, nu doar pe rezultat</li>
            <li>acțiunea se întinde până la un punct clar din viitor</li>
            <li>apare des împreună cu <strong>for</strong> și un reper de tip <strong>by</strong></li>
          </ul>
        </div>
      }
      card3Title="Exemplu-cheie"
      card3Intro={<>Exemplul acesta arată exact ideea de durată până la un moment viitor.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>
              They <strong>will have been working</strong> for the same company for 10 years <strong>by the time</strong> they retire.
            </li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
