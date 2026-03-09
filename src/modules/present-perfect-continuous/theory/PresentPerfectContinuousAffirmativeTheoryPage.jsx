import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import {
  PRESENT_PERFECT_CONTINUOUS_BASE_PATH,
  presentPerfectContinuousMapPath,
  presentPerfectContinuousRoomPath,
  presentPerfectContinuousOverviewPath,
} from "../present-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "affirmative";

export default function PresentPerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect Continuous"
      title="Present Perfect Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect Continuous la afirmativ."
      section1Intro={
        <>
          La afirmativ, Present Perfect Continuous se formează cu auxiliarul <strong>have / has</strong> + <strong>been</strong> + <strong>V1-ing</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + have / has + been + V1-ing</span>
            </p>
            <p className="ps-text">
              <strong>Have</strong> se folosește cu <strong>I / you / we / they</strong>, iar <strong>has</strong> cu <strong>he / she / it</strong>.
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I have been reading for two hours.</li>
              <li>She has been working in the garden all morning.</li>
              <li>They have been studying since 8 o&apos;clock.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Detalii importante"
      section2Intro={
        <>
          La acest timp, verbul principal stă în forma <strong>-ing</strong>, deci sunt importante regulile de adăugare a terminației.
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
              <li><strong>-l</strong> se dublează: travel → travelling</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Excepții utile</h3>
            <ul className="ps-mini-list">
              <li>see → seeing</li>
              <li>open → opening</li>
              <li>throw → throwing</li>
              <li>feel → feeling</li>
              <li>reține mereu structura: <strong>have / has + been + V-ing</strong></li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici sunt cele mai frecvente greșeli la afirmativ.</>}
      mistakes={[
        { wrong: "He has been work all morning.", correct: "He has been working all morning." },
        { wrong: "She have been reading since 5 o'clock.", correct: "She has been reading since 5 o'clock." },
        { wrong: "They have been study for two hours.", correct: "They have been studying for two hours." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
