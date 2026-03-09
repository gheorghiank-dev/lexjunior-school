import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectMapPath, presentPerfectOverviewPath, presentPerfectRoomPath } from "../present-paths.js";

const SECTION_ID = "uses";

export default function PresentPerfectUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={presentPerfectMapPath()}
      backLabel="← Înapoi la harta Present Perfect"
      title="Present Perfect – Întrebuințări"
      lead="Aici vezi când folosim Present Perfect și cum îl deosebim de alte timpuri apropiate."
      card1Title="Ideea generală"
      card1Intro={<>Present Perfect leagă trecutul de prezent.</>}
      card1Content={
        <div className="rule-box">
          <h3>Ce transmite</h3>
          <p className="ps-text">
            Folosim Present Perfect când acțiunea are legătură cu <strong>prezentul</strong>: rezultatul se vede acum, experiența contează acum sau perioada de timp nu s-a încheiat încă.
          </p>
        </div>
      }
      card2Title="Întrebuințări principale"
      card2Intro={<>Acestea sunt cele mai importante situații din materialul tău.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Întrebuințări principale</h3>
            <ul className="ps-mini-list">
              <li>acțiuni începute în trecut și continuate până în prezent, mai ales cu verbe de stare</li>
              <li>acțiuni încheiate recent, cu rezultat vizibil în prezent</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Alte situații utile</h3>
            <ul className="ps-mini-list">
              <li>acțiuni petrecute într-un moment nespecificat din trecut</li>
              <li>acțiuni dintr-o perioadă de timp neîncheiată: today, this week, this month, this year</li>
            </ul>
          </div>
        </div>
      }
      card3Title="Compară cu atenție"
      card3Intro={<>Aici sunt diferențele care contează cel mai mult.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observații importante</h3>
          <ul className="ps-mini-list">
            <li>Present Perfect pune accent pe <strong>rezultat</strong>, pe experiență sau pe legătura cu prezentul.</li>
            <li>Present Perfect spune știrea / informația principală; <strong>Past Simple</strong> sau <strong>Past Continuous</strong> dau detaliile.</li>
            <li>Present Perfect poate pune accent pe <strong>număr / frecvență</strong>, iar Present Perfect Continuous pe <strong>durată</strong>.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: presentPerfectMapPath(), label: "Harta modulului" },
        { to: presentPerfectOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
