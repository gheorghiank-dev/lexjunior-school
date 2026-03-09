import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futureContinuousMapPath,
  futureContinuousOverviewPath,
  futureContinuousRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "uses";

export default function FutureContinuousUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futureContinuousMapPath()}
      backLabel="← Înapoi la harta Future Continuous"
      title="Future Continuous – Întrebuințări"
      lead="Aici vezi când folosim Future Continuous și ce situații exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Future Continuous arată că o acțiune va fi în desfășurare la un anumit moment din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce transmite">
          <p className="ps-text">
            Folosim Future Continuous pentru a vorbi despre <strong>acțiuni în curs de desfășurare în viitor</strong>, despre <strong>rutine sau aranjamente viitoare</strong> și despre <strong>întrebări politicoase legate de planurile altcuiva</strong>.
          </p>
        </TenseStructureBox>
      }
      card2Title="Întrebuințări principale"
      card2Intro={<>Acestea sunt cele trei utilizări esențiale din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Use-uri frecvente</h3>
            <ul className="ps-mini-list">
              <li>o acțiune care va fi în desfășurare într-un moment specificat din viitor</li>
              <li>o acțiune care va avea loc cu siguranță în viitor ca parte a unei rutine sau a unui aranjament</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Întrebări politicoase</h3>
            <ul className="ps-mini-list">
              <li>întrebăm despre planurile de viitor ale unei persoane</li>
              <li>vrem să vedem dacă planurile ei se potrivesc cu dorințele noastre</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Exemple-cheie"
      card3Intro={<>Exemplele acestea arată exact contextul în care apare timpul.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>
              <strong>I will be lying</strong> in the sun <strong>this time next Saturday</strong>.
            </li>
            <li>
              I will ask Mary about her plans today because I <strong>will be seeing</strong> her at basketball practice.
            </li>
            <li>
              <strong>Will you be going</strong> to the market today? Can you buy some more apples?
            </li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futureContinuousMapPath(), label: "Harta modulului" },
        { to: futureContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
