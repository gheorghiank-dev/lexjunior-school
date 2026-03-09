import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-core/theory-progress.js";
import { PAST_SIMPLE_BASE_PATH, pastSimpleMapPath, pastSimpleRoomPath, pastSimpleOverviewPath } from "../past-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";

const SECTION_ID = "affirmative";

export default function PastSimpleAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PAST_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Past Simple"
      title="Past Simple – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Past Simple la afirmativ."
      section1Intro={<>În Past Simple, la afirmativ, ordinea cuvintelor este <strong>Subiect + V2</strong>. Forma a doua poate fi regulată sau neregulată.</>}
      section1Content={
        <>
          <div className="lj-structure-box ps-structure-box">
            <h3 className="lj-structure-title">Formula</h3>
            <p className="ps-text">
              <span className="rule-highlight">S + V2</span>
            </p>
            <ul className="ps-mini-list">
              <li><strong>verbe regulate</strong>: V1 + <span className="rule-highlight-emphasis">-ed</span></li>
              <li><strong>verbe neregulate</strong>: <span className="rule-highlight-emphasis">V2</span> din listă</li>
            </ul>
          </div>

          <div className="example-box" style={{ marginTop: "1.25rem" }}>
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>He <strong>worked</strong>.</li>
              <li>He <strong>danced</strong>.</li>
              <li>He <strong>played</strong>.</li>
              <li>He <strong>tried</strong>.</li>
              <li>He <strong>stopped</strong>.</li>
              <li>He <strong>travelled</strong>.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Reguli de adăugare a terminației -ed"
      section2Intro={<>Aceste reguli se aplică pentru toate persoanele atunci când verbul este regulat.</>}
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Spelling rules</h3>
            <ol className="ps-mini-list">
              <li><strong>+ -ed</strong><br />work → He worked</li>
              <li><strong>-e + -d</strong><br />dance → He danced</li>
              <li><strong>vowel + y + -ed</strong><br />play → He played</li>
              <li><strong>consonant + y → -i + -ed</strong><br />try → He tried</li>
              <li><strong>cvc → double consonant + -ed</strong><br />stop → He stopped</li>
              <li><strong>-l → -ll + -ed</strong><br />travel → He travelled</li>
            </ol>
          </div>

          <div className="example-box">
            <h3>Observație importantă</h3>
            <p className="ps-text">
              La afirmativ folosim mereu <strong>V2</strong>. Nu adăugăm auxiliarul <strong>did</strong> în propozițiile afirmative obișnuite.
            </p>
            <ul className="ps-mini-list">
              <li>I <strong>walked</strong>.</li>
              <li>She <strong>went</strong>.</li>
              <li>They <strong>played</strong>.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={<>Ai grijă la diferența dintre <strong>V2</strong> la afirmativ și <strong>V1</strong> după auxiliarul <strong>did</strong>.</>}
      mistakes={[
        { wrong: "He did worked yesterday.", correct: "He worked yesterday." },
        { wrong: "She tryed to open the door.", correct: "She tried to open the door." },
        { wrong: "They goed to school.", correct: "They went to school." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pastSimpleMapPath(), label: "Harta modulului" },
        { to: pastSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
