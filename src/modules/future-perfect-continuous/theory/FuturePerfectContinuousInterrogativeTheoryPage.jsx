import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_CONTINUOUS_BASE_PATH, futurePerfectContinuousMapPath, futurePerfectContinuousRoomPath, futurePerfectContinuousOverviewPath } from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function FuturePerfectContinuousInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect Continuous"
      title="Future Perfect Continuous – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect Continuous la interogativ."
      section1Intro={
        <>
          La interogativ, <strong>will</strong> trece înaintea subiectului, apoi urmează <strong>have been + V1-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Will + S + have + been + V1-ing?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Will I have been talking?</li>
              <li>Will you have been working here for long?</li>
              <li>Will they have been studying for three hours by 8 p.m.?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Răspunsurile scurte folosesc doar auxiliarul <strong>will</strong>.</>}
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
              <li>întrebarea completă păstrează <strong>have been + V-ing</strong></li>
              <li>răspunsul scurt păstrează doar auxiliarul</li>
              <li>ex.: <strong>Will</strong> he <strong>have been working</strong>? — Yes, he <strong>will</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de ordine a cuvintelor sau de omiterea lui <strong>been</strong>.</>}
      mistakes={[
        { wrong: "Will she been working by then?", correct: "Will she have been working by then?" },
        { wrong: "You will have been waiting long?", correct: "Will you have been waiting long?" },
        { wrong: "Will they have been worked here for years?", correct: "Will they have been working here for years?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futurePerfectContinuousMapPath(), label: "Harta modulului" },
        { to: futurePerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
