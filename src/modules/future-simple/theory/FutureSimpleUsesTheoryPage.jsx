import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futureSimpleMapPath,
  futureSimpleOverviewPath,
  futureSimpleRoomPath,
} from "../future-paths.js";

const SECTION_ID = "uses";

export default function FutureSimpleUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futureSimpleMapPath()}
      backLabel="← Înapoi la harta Future Simple"
      title="Future Simple – Întrebuințări"
      lead="Aici vezi când folosim Future Simple și ce situații exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Future Simple vorbește despre viitor, mai ales când exprimăm predicții, decizii de moment, promisiuni sau fapte viitoare.</>}
      card1Content={
        <div className="rule-box">
          <h3>Ce transmite</h3>
          <p className="ps-text">
            Folosim Future Simple pentru <strong>predicții</strong>, <strong>decizii luate în momentul vorbirii</strong>, <strong>fapte viitoare sigure</strong> și pentru <strong>promisiuni, oferte, avertismente sau cereri</strong>.
          </p>
        </div>
      }
      card2Title="Întrebuințări principale"
      card2Intro={<>Acestea sunt situațiile esențiale din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Use-uri frecvente</h3>
            <ul className="ps-mini-list">
              <li>predicții bazate pe ceea ce credem sau gândim</li>
              <li>decizii luate pe loc, în momentul vorbirii</li>
              <li>acțiuni sau situații viitoare pe care nu le putem controla</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte situații importante</h3>
            <ul className="ps-mini-list">
              <li>promisiuni, jurăminte, garanții</li>
              <li>amenințări și avertismente</li>
              <li>cereri, oferte și speranțe</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Observații importante"
      card3Intro={<>Aici este diferența care contează cel mai mult.</>}
      card3Content={
        <div className="rule-box">
          <h3>Context tipic</h3>
          <ul className="ps-mini-list">
            <li>apare des cu verbe precum <strong>think</strong>, <strong>believe</strong>, <strong>imagine</strong></li>
            <li>apare cu expresii ca <strong>I&apos;m sure</strong>, <strong>I&apos;m afraid</strong></li>
            <li>apare cu adverbe ca <strong>perhaps</strong>, <strong>probably</strong>, <strong>certainly</strong></li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futureSimpleRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
