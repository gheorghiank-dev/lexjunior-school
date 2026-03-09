import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import {
  PAST_PERFECT_BASE_PATH,
  pastPerfectMapPath,
  pastPerfectRoomPath,
  pastPerfectOverviewPath,
} from "../past-perfect-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function PastPerfectNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PAST_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect"
      title="Past Perfect – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect la negativ."
      section1Intro={
        <>
          La negativ, adăugăm <strong>not</strong> după auxiliarul <strong>had</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + had + not + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I had not walked before the rain started.</li>
              <li>She hadn&apos;t finished the test when the bell rang.</li>
              <li>They hadn&apos;t eaten before the guests arrived.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Trebuie să știi atât formele lungi, cât și forma scurtă.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li>I / you / he / she / it / we / they <strong>had not</strong> walked</li>
              <li>I / you / he / she / it / we / they <strong>had not</strong> eaten</li>
              <li>verbul principal rămâne în <strong>V3</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Formă scurtă și note</h3>
            <ul className="ps-mini-list">
              <li><strong>had not → hadn&apos;t</strong></li>
              <li>toate persoanele folosesc aceeași contracție</li>
              <li>după <strong>hadn&apos;t</strong>, verbul rămâne în <strong>V3</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent confuzii între V2 și V3 sau între had și didn&apos;t.</>}
      mistakes={[
        { wrong: "She didn&apos;t finished before I arrived.", correct: "She hadn&apos;t finished before I arrived." },
        { wrong: "He hadn&apos;t ate anything.", correct: "He hadn&apos;t eaten anything." },
        { wrong: "They had not went home.", correct: "They had not gone home." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
