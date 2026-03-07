import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import {
  PS_BASE_PATH,
  psMapPath,
  psOverviewPath,
  psRoomPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";

const SECTION_ID = "time-expressions";

export default function PsTimeExpressionsTheoryPage() {
  useEffect(() => {
    try { markTheoryCompleted(SECTION_ID); } catch {}
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={PS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Simple"
      title="Present Simple – Expresii de timp"
      lead="Expresiile de timp te ajută să recunoști când vorbești despre rutină, frecvență sau adevăr general — exact terenul Present Simple."
      card1Intro={<>Present Simple apare foarte des lângă adverbe de frecvență și expresii care arată că ceva se repetă regulat.</>}
      card1Content={
        <div className="lj-structure-box ps-structure-box">
          <p className="ps-text">Când vezi cuvinte precum <strong>always, usually, often</strong> sau expresii ca <strong>every day</strong>, e un semnal puternic pentru Present Simple.</p>
        </div>
      }
      card2Intro={<>Grupează expresiile de timp după funcția lor. Asta îl ajută mult pe elev să le memoreze.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Adverbe de frecvență</h3>
            <ul className="ps-mini-list">
              <li>always, usually, often</li>
              <li>sometimes, rarely, never</li>
              <li>Ex.: She usually walks to school.</li>
            </ul>
          </div>
          <div className="example-box">
            <h3>Expresii de rutină</h3>
            <ul className="ps-mini-list">
              <li>every day / week / month</li>
              <li>on Mondays, at weekends</li>
              <li>in the morning / after school</li>
            </ul>
          </div>
        </div>
      }
      card3Intro={<>Nu orice expresie de timp cere Present Simple. Uită-te cu atenție la sens.</>}
      card3Content={
        <div className="rule-box">
          <h3>Pattern notes</h3>
          <ul className="ps-mini-list">
            <li><strong>Now / at the moment / right now</strong> duc de obicei spre Present Continuous, nu spre Present Simple.</li>
            <li>Adverbul de frecvență stă de regulă <strong>înaintea verbului principal</strong>, dar după verbul <strong>to be</strong>.</li>
            <li><strong>Every day</strong> arată repetiție; <strong>today</strong> poate cere alt timp, în funcție de context.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți recunoaște mai ușor expresiile de timp asociate cu Present Simple. Hai spre camerele de time expressions."
      nextStepActions={[
        { to: psRoomPath('time-expressions', 1), label: 'Camera 1 – Expresii de timp' },
        { to: psMapPath(), label: 'Harta modulului' },
        { to: psOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
