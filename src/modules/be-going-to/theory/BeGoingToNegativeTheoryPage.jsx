import React, { useEffect } from "react";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import {
  BE_GOING_TO_BASE_PATH,
  beGoingToMapPath,
  beGoingToRoomPath,
  beGoingToOverviewPath,
} from "../be-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "negative";

export default function BeGoingToNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={BE_GOING_TO_BASE_PATH}
      backLabel="← Înapoi la modulul Be Going To"
      title="Be Going To – Negativ"
      lead="Reguli, exemple și explicații pentru formarea structurii be going to la negativ."
      section1Intro={
        <>
          La negativ, punem <strong>not</strong> după verbul <strong>to be</strong>:
          <strong> am / is / are + not + going to + V1</strong>.
        </>
      }
      section1Content={
        <>
          <TenseStructureBox title="Structură generală">
            <p className="ps-text">
              <span className="rule-highlight">S + am / is / are + not + going to + V1</span>
            </p>
          </TenseStructureBox>

          <div className="example-box">
            <h3>Exemple-model</h3>
            <ul className="ps-list">
              <li>I am not going to eat.</li>
              <li>He is not going to come.</li>
              <li>They are not going to stay.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={<>În vorbire și în exerciții apar foarte des formele lungi și formele scurte.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li>I <strong>am not</strong> going to eat</li>
              <li>He <strong>is not</strong> going to eat</li>
              <li>They <strong>are not</strong> going to eat</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte</h3>
            <ul className="ps-mini-list">
              <li>I <strong>&apos;m not</strong> going to eat</li>
              <li>He <strong>isn&apos;t</strong> going to eat</li>
              <li>They <strong>aren&apos;t</strong> going to eat</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Aici apar frecvent greșeli de ordine a cuvintelor sau de alegere a auxiliarului.</>}
      mistakes={[
        { wrong: "She not is going to study.", correct: "She is not going to study." },
        { wrong: "They aren&apos;t going study.", correct: "They aren&apos;t going to study." },
        { wrong: "I don&apos;t am going to go.", correct: "I am not going to go." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: beGoingToRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
