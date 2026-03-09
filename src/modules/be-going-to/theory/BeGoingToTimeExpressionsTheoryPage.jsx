import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import {
  beGoingToMapPath,
  beGoingToOverviewPath,
  beGoingToRoomPath,
} from "../be-paths.js";

const SECTION_ID = "time-expressions";

export default function BeGoingToTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={beGoingToMapPath()}
      backLabel="← Înapoi la harta Be Going To"
      title="Be Going To – Expresii de timp"
      lead="Aici vezi expresiile de timp care apar frecvent cu be going to și ce rol au în recunoașterea lui."
      card1Title="Ideea generală"
      card1Intro={<>Expresiile de timp pot sugera viitorul, dar la be going to trebuie să urmărești și ideea de intenție sau de dovadă prezentă.</>}
      card1Content={
        <div className="rule-box">
          <h3>Ce trebuie să observi</h3>
          <p className="ps-text">
            Cu <strong>be going to</strong> apar des expresii precum <strong>tomorrow</strong>, <strong>tonight</strong>,
            <strong> next week</strong> sau <strong>soon</strong>. Totuși, nu expresia de timp decide singură,
            ci și contextul: <strong>plan</strong>, <strong>intenție</strong> sau <strong>dovadă prezentă</strong>.
          </p>
        </div>
      }
      card2Title="Expresii importante"
      card2Intro={<>Acestea sunt expresiile de timp din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Expresii frecvente</h3>
            <ul className="ps-mini-list">
              <li>tomorrow</li>
              <li>the day after tomorrow</li>
              <li>tonight</li>
              <li>soon</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte expresii utile</h3>
            <ul className="ps-mini-list">
              <li>next week / month / year</li>
              <li>in a week / month / year</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Observații importante"
      card3Intro={<>Aici sunt diferențele care contează în exerciții.</>}
      card3Content={
        <div className="rule-box">
          <h3>Capcane și diferențe</h3>
          <ul className="ps-mini-list">
            <li>aceleași expresii pot apărea și cu <strong>will</strong> sau <strong>Present Continuous</strong></li>
            <li>când vezi un plan sau o intenție deja formată, <strong>be going to</strong> este foarte probabil</li>
            <li>când vezi o dovadă prezentă, ca în <strong>Look!</strong>, apare des o predicție cu <strong>be going to</strong></li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de time expressions sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: beGoingToRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
