import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectContinuousMapPath, presentPerfectContinuousOverviewPath, presentPerfectContinuousRoomPath } from "../present-paths.js";

const SECTION_ID = "uses";

export default function PresentPerfectContinuousUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={presentPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Present Perfect Continuous"
      title="Present Perfect Continuous – Întrebuințări"
      lead="Întrebuințările principale ale timpului Present Perfect Continuous, explicate clar și pe scurt."
      card1Intro={<>Present Perfect Continuous se folosește când vrem să punem accent pe <strong>durata</strong> unei acțiuni.</>}
      card1Content={
        <div className="example-box">
          <h3>1. Acțiune începută în trecut și continuată până în prezent</h3>
          <p className="ps-text">Îl folosim cu expresii ca <strong>for</strong>, <strong>since</strong>, <strong>all morning / all week</strong>.</p>
          <ul className="ps-list">
            <li>She has been reading since she came back from school.</li>
            <li>I have been studying for two hours.</li>
          </ul>
        </div>
      }
      card2Intro={<>Uneori acțiunea s-a terminat, dar rezultatul ei se vede încă în prezent.</>}
      card2Content={
        <div className="example-box">
          <h3>2. Acțiune încheiată recent, cu rezultat vizibil acum</h3>
          <ul className="ps-list">
            <li>She has been working in the garden all morning. She is very tired now.</li>
            <li>It has been raining. The ground is wet.</li>
          </ul>
        </div>
      }
      card3Intro={<>Acest timp poate exprima și enervarea vorbitorului față de o acțiune recentă.</>}
      card3Content={
        <div className="example-box">
          <h3>3. Enervare / reproș pentru o acțiune care tocmai a avut loc</h3>
          <ul className="ps-list">
            <li>Who has been reading my diary?</li>
            <li>Who has been using my laptop?</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
