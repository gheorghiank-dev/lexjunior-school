import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_BASE_PATH,
  presentPerfectMapPath,
  presentPerfectRoomPath,
  presentPerfectOverviewPath,
} from "../present-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function PresentPerfectNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PRESENT_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect"
      title="Present Perfect – Negativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect la negativ."
      section1Intro={
        <>
          La negativ, adăugăm <strong>not</strong> după auxiliarul <strong>have / has</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + have / has + not + V3</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I haven&apos;t seen John today.</li>
              <li>He hasn&apos;t finished his homework yet.</li>
              <li>They haven&apos;t visited Rome.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>Trebuie să știi atât formele lungi, cât și pe cele scurte.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li>I / you / we / they <strong>have not</strong> walked</li>
              <li>he / she / it <strong>has not</strong> walked</li>
              <li>verbul principal rămâne în <strong>V3</strong></li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte și note</h3>
            <ul className="ps-mini-list">
              <li><strong>have not → haven&apos;t</strong></li>
              <li><strong>has not → hasn&apos;t</strong></li>
              <li><em>still</em> apare de obicei înaintea auxiliarului: I still haven&apos;t finished.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent confuzii între auxiliar și forma verbului principal.</>}
      mistakes={[
        { wrong: "He don&apos;t finished.", correct: "He hasn&apos;t finished." },
        { wrong: "I haven&apos;t went there.", correct: "I haven&apos;t gone there." },
        { wrong: "She hasn&apos;t finish yet.", correct: "She hasn&apos;t finished yet." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
