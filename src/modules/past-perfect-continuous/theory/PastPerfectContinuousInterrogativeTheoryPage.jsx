import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import {
  PAST_PERFECT_CONTINUOUS_BASE_PATH,
  pastPerfectContinuousMapPath,
  pastPerfectContinuousRoomPath,
  pastPerfectContinuousOverviewPath,
} from "../past-perfect-continuous-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function PastPerfectContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect Continuous"
      title="Past Perfect Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect Continuous la interogativ."
      section1Intro={
        <>
          La interogativ, auxiliarul <strong>had</strong> trece înaintea subiectului.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Had + S + been + V1-ing + ?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Had you been talking before the teacher arrived?</li>
              <li>Had she been working for long before she took a break?</li>
              <li>Had they been waiting since 8 o&apos;clock?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          La acest timp, răspunsurile scurte sunt foarte simple, pentru că folosim doar auxiliarul <strong>had</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte afirmative</h3>
            <ul className="ps-mini-list">
              <li><strong>Yes, I / he / she / it / we / you / they had.</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte negative</h3>
            <ul className="ps-mini-list">
              <li><strong>No, I / he / she / it / we / you / they hadn&apos;t.</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar cele mai frecvente greșeli la interogativ.</>}
      mistakes={[
        { wrong: "Had she been work all morning?", correct: "Had she been working all morning?" },
        { wrong: "Had been they waiting long?", correct: "Had they been waiting long?" },
        { wrong: "Did he had been talking?", correct: "Had he been talking?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
