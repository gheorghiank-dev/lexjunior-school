import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import {
  PAST_PERFECT_BASE_PATH,
  pastPerfectMapPath,
  pastPerfectRoomPath,
  pastPerfectOverviewPath,
} from "../past-perfect-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function PastPerfectAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PAST_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect"
      title="Past Perfect – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect la afirmativ."
      section1Intro={
        <>
          La afirmativ, Past Perfect se formează cu auxiliarul <strong>had</strong> + <strong>V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + had + V3</span>
            </p>
            <p className="ps-text">
              În Past Perfect, <strong>had</strong> se folosește cu <strong>toate persoanele</strong>.
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I had finished the housework before I went to the cinema.</li>
              <li>Mum had just finished baking a cake.</li>
              <li>They had eaten before the guests arrived.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          La acest timp, verbul principal stă în <strong>past participle</strong>, adică în <strong>V3</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Regular verbs</h3>
            <ul className="ps-mini-list">
              <li>V1 + <strong>-ed</strong>: walk → walked</li>
              <li>-e + <strong>-d</strong>: dance → danced</li>
              <li>consonant + y → <strong>i + ed</strong>: try → tried</li>
              <li>CVC → last consonant doubles: stop → stopped</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Irregular verbs</h3>
            <ul className="ps-mini-list">
              <li>We use the <strong>3rd form (V3)</strong>.</li>
              <li>eat → ate → <strong>eaten</strong></li>
              <li>go → went → <strong>gone</strong></li>
              <li>see → saw → <strong>seen</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de auxiliar sau de formă a verbului principal.</>}
      mistakes={[
        { wrong: "I had went home.", correct: "I had gone home." },
        { wrong: "She had finish the test.", correct: "She had finished the test." },
        { wrong: "They has finished before we arrived.", correct: "They had finished before we arrived." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
