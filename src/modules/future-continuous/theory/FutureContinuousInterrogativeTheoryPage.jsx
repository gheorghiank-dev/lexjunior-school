import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  FUTURE_CONTINUOUS_BASE_PATH,
  futureContinuousMapPath,
  futureContinuousOverviewPath,
  futureContinuousRoomPath,
} from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function FutureContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Continuous"
      title="Future Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Continuous la interogativ."
      section1Intro={
        <>
          La interogativ, auxiliarul <strong>will</strong> trece înaintea subiectului, apoi urmează <strong>be + verb-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Will + S + be + V1-ing?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Will you be going to the market today?</li>
              <li>Will she be working tonight?</li>
              <li>Will they be studying at 5 o&apos;clock tomorrow?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte sunt simple și folosesc doar auxiliarul <strong>will</strong>.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte</h3>
            <ul className="ps-mini-list">
              <li><strong>Yes</strong>, I / he / she / it / we / you / they <strong>will</strong>.</li>
              <li><strong>No</strong>, I / he / she / it / we / you / they <strong>won&apos;t</strong>.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Model util</h3>
            <ul className="ps-mini-list">
              <li>întrebarea completă păstrează <strong>be + -ing</strong></li>
              <li>răspunsul scurt păstrează doar auxiliarul</li>
              <li>ex.: <strong>Will</strong> she <strong>be working</strong>? — Yes, she <strong>will</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de ordine a cuvintelor sau lipsa lui <strong>be</strong>.</>}
      mistakes={[
        { wrong: "Will she working tonight?", correct: "Will she be working tonight?" },
        { wrong: "You will be going today?", correct: "Will you be going today?" },
        { wrong: "Will they be study at 5?", correct: "Will they be studying at 5?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
