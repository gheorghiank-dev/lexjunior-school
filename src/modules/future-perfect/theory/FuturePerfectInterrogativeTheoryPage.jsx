import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_PERFECT_BASE_PATH, futurePerfectMapPath, futurePerfectRoomPath, futurePerfectOverviewPath } from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "interrogative";

export default function FuturePerfectInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Future Perfect"
      title="Future Perfect – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Perfect la interogativ."
      section1Intro={
        <>
          La interogativ, <strong>will</strong> trece înaintea subiectului, apoi urmează <strong>have + V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">Will + S + have + V3?</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>Will you have finished by tonight?</li>
              <li>Will they have arrived before the meeting?</li>
              <li>Will she have written the email by then?</li>
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
              <li>întrebarea completă păstrează <strong>have + V3</strong></li>
              <li>răspunsul scurt păstrează doar auxiliarul</li>
              <li>ex.: <strong>Will</strong> he <strong>have finished</strong>? — Yes, he <strong>will</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de ordine a cuvintelor sau de folosire a formei greșite după <strong>have</strong>.</>}
      mistakes={[
        { wrong: "Will she finished by 6?", correct: "Will she have finished by 6?" },
        { wrong: "You will have arrived by then?", correct: "Will you have arrived by then?" },
        { wrong: "Will they have went home?", correct: "Will they have gone home?" },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futurePerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
