import React, { useEffect } from "react";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import {
  BE_GOING_TO_BASE_PATH,
  beGoingToMapPath,
  beGoingToRoomPath,
  beGoingToOverviewPath,
} from "../be-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function BeGoingToInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={BE_GOING_TO_BASE_PATH}
      backLabel="← Înapoi la modulul Be Going To"
      title="Be Going To – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea structurii be going to la interogativ."
      section1Intro={
        <>
          La interogativ, verbul <strong>to be</strong> trece în fața subiectului:
          <strong> Am / Is / Are + S + going to + V1?</strong>
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Am / Is / Are + S + going to + V1 ?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Am I going to eat?</li>
              <li>Is she going to study tonight?</li>
              <li>Are they going to play tomorrow?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte sunt foarte importante și apar des în exerciții.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte afirmative</h3>
            <ul className="ps-mini-list">
              <li>Yes, I <strong>am</strong>.</li>
              <li>Yes, we / you / they <strong>are</strong>.</li>
              <li>Yes, he / she / it <strong>is</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte negative</h3>
            <ul className="ps-mini-list">
              <li>No, I <strong>&apos;m not</strong>.</li>
              <li>No, we / you / they <strong>aren&apos;t</strong>.</li>
              <li>No, he / she / it <strong>isn&apos;t</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar des greșeli de ordine a cuvintelor sau de omitere a lui going to.</>}
      mistakes={[
        { wrong: "Is she going study tonight?", correct: "Is she going to study tonight?" },
        { wrong: "She is going to study?", correct: "Is she going to study?" },
        { wrong: "Are going to they eat?", correct: "Are they going to eat?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: beGoingToRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
