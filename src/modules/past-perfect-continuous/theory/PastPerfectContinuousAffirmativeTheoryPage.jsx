import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import {
  PAST_PERFECT_CONTINUOUS_BASE_PATH,
  pastPerfectContinuousMapPath,
  pastPerfectContinuousRoomPath,
  pastPerfectContinuousOverviewPath,
} from "../past-perfect-continuous-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function PastPerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect Continuous"
      title="Past Perfect Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect Continuous la afirmativ."
      section1Intro={
        <>
          La afirmativ, Past Perfect Continuous se formează cu auxiliarul <strong>had</strong> + <strong>been</strong> + <strong>V1-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + had + been + V1-ing</span>
            </p>
            <p className="ps-text">
              În Past Perfect Continuous, <strong>had</strong> se folosește cu <strong>toate persoanele</strong>.
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I had been talking for an hour before the teacher came in.</li>
              <li>She had been working for 2 hours before she realized how late it was.</li>
              <li>They had been waiting since 9 o&apos;clock before the bus finally arrived.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          La acest timp, verbul principal rămâne în forma <strong>-ing</strong>, deci contează și regulile de scriere ale terminației.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Reguli de adăugare a terminației -ing</h3>
            <ul className="ps-mini-list">
              <li>V1 + <strong>-ing</strong>: work → working</li>
              <li><strong>-e</strong> dispare + <strong>-ing</strong>: dance → dancing</li>
              <li><strong>-ie</strong> devine <strong>-y + ing</strong>: lie → lying</li>
              <li><strong>CVC</strong> → ultima consoană se dublează: stop → stopping</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Ce trebuie să reții</h3>
            <ul className="ps-mini-list">
              <li>auxiliarul este mereu <strong>had</strong></li>
              <li>după el apare mereu <strong>been</strong></li>
              <li>verbul principal rămâne în forma <strong>-ing</strong></li>
              <li>accentul cade pe <strong>durată / proces</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar cele mai frecvente greșeli la afirmativ.</>}
      mistakes={[
        { wrong: "She had been work for two hours.", correct: "She had been working for two hours." },
        { wrong: "They had working since morning.", correct: "They had been working since morning." },
        { wrong: "He had been study before dinner.", correct: "He had been studying before dinner." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
