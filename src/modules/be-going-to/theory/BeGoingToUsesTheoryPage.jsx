import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import {
  beGoingToMapPath,
  beGoingToOverviewPath,
  beGoingToRoomPath,
} from "../be-paths.js";

const SECTION_ID = "uses";

export default function BeGoingToUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={beGoingToMapPath()}
      backLabel="← Înapoi la harta Be Going To"
      title="Be Going To – Întrebuințări"
      lead="Aici vezi când folosim be going to și ce situații exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Be going to vorbește despre viitor, mai ales când exprimăm intenții, planuri deja hotărâte sau predicții bazate pe dovezi din prezent.</>}
      card1Content={
        <div className="rule-box">
          <h3>Ce transmite</h3>
          <p className="ps-text">
            Folosim <strong>be going to</strong> pentru <strong>planuri, intenții sau ambiții</strong>,
            pentru <strong>decizii luate înainte de momentul vorbirii</strong> și pentru
            <strong> predicții bazate pe o dovadă prezentă</strong>.
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
              <li>planuri, intenții sau ambiții legate de viitor</li>
              <li>decizii luate înainte de momentul vorbirii</li>
              <li>predicții despre viitor bazate pe dovezi din prezent</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Exemple</h3>
            <ul className="ps-mini-list">
              <li>I am going to hire more staff for this project.</li>
              <li>I am going to make some vegetable soup.</li>
              <li>He is going to fall off that rotten branch!</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Observații importante"
      card3Intro={<>Aici este diferența care contează cel mai mult.</>}
      card3Content={
        <div className="rule-box">
          <h3>Compară atent</h3>
          <ul className="ps-mini-list">
            <li>folosim <strong>be going to</strong> pentru a vorbi despre <strong>intenția</strong> pe care o avem</li>
            <li>folosim <strong>will</strong> pentru a oferi detalii, a comenta sau a răspunde</li>
            <li>cu verbe de mișcare, mai ales <strong>go</strong> și <strong>come</strong>, folosim de obicei <strong>Present Continuous</strong>, nu <strong>be going to</strong></li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: beGoingToRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
