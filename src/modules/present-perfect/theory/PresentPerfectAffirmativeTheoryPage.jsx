import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_BASE_PATH,
  presentPerfectMapPath,
  presentPerfectRoomPath,
  presentPerfectOverviewPath,
} from "../present-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function PresentPerfectAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PRESENT_PERFECT_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect"
      title="Present Perfect – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect la afirmativ."
      section1Intro={
        <>
          La afirmativ, Present Perfect se formează cu auxiliarul <strong>have / has</strong> + <strong>V3</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + have / has + V3</span>
            </p>
            <p className="ps-text">
              <strong>Have</strong> se folosește cu <strong>I / you / we / they</strong>, iar <strong>has</strong> cu <strong>he / she / it</strong>.
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I have lived in this town since I was a baby.</li>
              <li>Mum has just finished baking a cake.</li>
              <li>I have called my friend twice today.</li>
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
              <li>V1 + <strong>-ed</strong>: work → worked</li>
              <li>-e + <strong>-d</strong>: dance → danced</li>
              <li>vowel + y + <strong>-ed</strong>: play → played</li>
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
              <li>learn the irregular verbs list carefully</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici sunt cele mai frecvente greșeli la afirmativ.</>}
      mistakes={[
        { wrong: "He have finished.", correct: "He has finished." },
        { wrong: "She has went home.", correct: "She has gone home." },
        { wrong: "I have saw this film.", correct: "I have seen this film." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
