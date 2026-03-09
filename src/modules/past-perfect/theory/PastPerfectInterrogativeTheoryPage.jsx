import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import {
  PAST_PERFECT_BASE_PATH,
  pastPerfectMapPath,
  pastPerfectRoomPath,
  pastPerfectOverviewPath,
} from "../past-perfect-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function PastPerfectInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PAST_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect"
      title="Past Perfect – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect la interogativ."
      section1Intro={
        <>
          La întrebări, auxiliarul <strong>had</strong> trece înaintea subiectului.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Had + S + V3?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Had you walked before sunset?</li>
              <li>Had she finished before the lesson started?</li>
              <li>Had they eaten before they left?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte sunt foarte importante în exerciții.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Întrebări-model</h3>
            <ul className="ps-mini-list">
              <li>Had I walked?</li>
              <li>Had you eaten?</li>
              <li>Had he finished?</li>
              <li>Had they arrived?</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li>Yes, I / he / she / it / we / you / they <strong>had</strong>.</li>
              <li>No, I / he / she / it / we / you / they <strong>hadn&apos;t</strong>.</li>
              <li>auxiliarul este același pentru toate persoanele</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar des greșeli de ordine a cuvintelor sau de formă a verbului principal.</>}
      mistakes={[
        { wrong: "You had finished?", correct: "Had you finished?" },
        { wrong: "Had she went home?", correct: "Had she gone home?" },
        { wrong: "Did they had eaten?", correct: "Had they eaten?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
