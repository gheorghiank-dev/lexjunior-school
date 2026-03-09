import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-perfect-core/theory-progress.js";
import {
  pastPerfectMapPath,
  pastPerfectOverviewPath,
  pastPerfectRoomPath,
} from "../past-perfect-paths.js";

const SECTION_ID = "uses";

export default function PastPerfectUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastPerfectMapPath()}
      backLabel="← Înapoi la harta Past Perfect"
      title="Past Perfect – Întrebuințări"
      lead="Aici vezi când folosim Past Perfect și cum îl recunoști pe linia timpului."
      card1Title="Ideea generală"
      card1Intro={<>Past Perfect arată trecutul mai vechi din două momente trecute.</>}
      card1Content={
        <div className="rule-box">
          <h3>Ce transmite</h3>
          <p className="ps-text">
            Folosim Past Perfect pentru o <strong>acțiune care a avut loc înaintea altei acțiuni din trecut</strong> sau înaintea unui <strong>moment specificat din trecut</strong>.
          </p>
        </div>
      }
      card2Title="Întrebuințări principale"
      card2Intro={<>Acestea sunt situațiile esențiale din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Întrebuințări principale</h3>
            <ul className="ps-mini-list">
              <li>o acțiune care s-a petrecut înaintea altei acțiuni din trecut</li>
              <li>o acțiune care s-a petrecut înaintea unui moment specificat din trecut</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Altă situație importantă</h3>
            <ul className="ps-mini-list">
              <li>o acțiune încheiată în trecut, al cărei rezultat era vizibil tot în trecut</li>
              <li>este echivalentul în trecut al lui <strong>Present Perfect</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Title="Compară cu atenție"
      card3Intro={<>Aici este diferența care contează cel mai mult.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observații importante</h3>
          <ul className="ps-mini-list">
            <li>Gândește-l pe o axă a timpului: <strong>prima acțiune = Past Perfect</strong>, <strong>a doua acțiune = de obicei Past Simple</strong>.</li>
            <li>Past Perfect pune accent pe faptul că ceva era deja terminat înainte de un alt reper trecut.</li>
            <li>Este <strong>echivalentul trecut</strong> pentru <strong>Present Perfect</strong>.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: pastPerfectMapPath(), label: "Harta modulului" },
        { to: pastPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
