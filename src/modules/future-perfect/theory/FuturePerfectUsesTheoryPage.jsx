import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import {
  futurePerfectMapPath,
  futurePerfectOverviewPath,
  futurePerfectRoomPath,
} from "../future-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "uses";

export default function FuturePerfectUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={futurePerfectMapPath()}
      backLabel="← Înapoi la harta Future Perfect"
      title="Future Perfect – Întrebuințări"
      lead="Aici vezi când folosim Future Perfect și ce situație exprimă cel mai frecvent."
      card1Title="Ideea generală"
      card1Intro={<>Future Perfect arată că o acțiune va fi terminată înainte de un anumit moment din viitor.</>}
      card1Content={
        <TenseStructureBox title="Ce transmite">
          <p className="ps-text">
            Folosim Future Perfect pentru a vorbi despre <strong>o acțiune care va fi încheiată până la un moment specificat din viitor</strong>.
          </p>
        </TenseStructureBox>
      }
      card2Title="Întrebuințarea principală"
      card2Intro={<>Aceasta este utilizarea esențială din materialul tău.</>}
      card2Content={
        <div className="example-box">
          <h3>Use de bază</h3>
          <ul className="ps-mini-list">
            <li>o acțiune care va fi complet terminată înainte de un termen sau punct viitor</li>
            <li>accentul cade pe <strong>rezultat / finalizare</strong>, nu pe desfășurare</li>
          </ul>
        </div>
      }
      card3Title="Exemplu-cheie"
      card3Intro={<>Exemplul acesta arată exact ideea de deadline viitor.</>}
      card3Content={
        <div className="rule-box">
          <ul className="ps-mini-list">
            <li>
              They <strong>will have finished</strong> their project <strong>by next Friday</strong>.
            </li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: futurePerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: futurePerfectMapPath(), label: "Harta modulului" },
        { to: futurePerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
