import React, { useEffect } from "react";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import {
  PS_BASE_PATH,
  psMapPath,
  psOverviewPath,
  psRoomPath,
} from "../ps-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { PsNegativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "negative";

export default function PsNegativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (err) {
      console.error("Failed to mark negative theory as completed:", err);
    }
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Simple"
      title="Present Simple – Negativ"
      lead="Reguli, forme și exemple pentru propozițiile negative la Present Simple. Gândește-te la situațiile în care spui că nu faci ceva sau că ceva nu este adevărat."
      section1Intro={
        <>
          În Present Simple, la negativ, folosim auxiliarul <strong>do / does</strong>
          împreună cu <strong>not</strong> pentru a spune că ceva <strong>nu</strong>
          se întâmplă.
        </>
      }
      section1Content={
        <>
          <PsNegativeStructureBlock />

          <div className="example-box" style={{ marginTop: "1.25rem" }}>
            <h3>Exemple</h3>
            <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
              Ascultă propozițiile și repetă cu voce tare.
            </p>
            <ul className="ps-list">
              <li>
                <LexTtsButton text="I don’t walk to school." ariaLabel="Ascultă propoziția: I don’t walk to school." /> I don&apos;t walk to school.
              </li>
              <li>
                <LexTtsButton text="You don’t like coffee." ariaLabel="Ascultă propoziția: You don’t like coffee." /> You don&apos;t like coffee.
              </li>
              <li>
                <LexTtsButton text="We don’t watch TV in the morning." ariaLabel="Ascultă propoziția: We don’t watch TV in the morning." /> We don&apos;t watch TV in the morning.
              </li>
              <li>
                <LexTtsButton text="He doesn’t play football." ariaLabel="Ascultă propoziția: He doesn’t play football." /> He doesn&apos;t play football.
              </li>
              <li>
                <LexTtsButton text="She doesn’t go to the gym on Mondays." ariaLabel="Ascultă propoziția: She doesn’t go to the gym on Mondays." /> She doesn&apos;t go to the gym on Mondays.
              </li>
            </ul>
          </div>
        </>
      }
      section2Title="2. Formă lungă și formă scurtă"
      section2Intro={
        <>
          Aceeași propoziție negativă poate apărea în <strong>formă lungă</strong>
          (do not / does not) sau în <strong>formă scurtă</strong> (don&apos;t /
          doesn&apos;t).
        </>
      }
      section2Content={
        <>
          <div className="columns-2">
            <div className="rule-box">
              <h3>Formă lungă</h3>
              <ul className="ps-mini-list">
                <li><LexTtsButton text="I do not walk." ariaLabel="Ascultă propoziția: I do not walk." /> I do not walk.</li>
                <li><LexTtsButton text="He does not like chocolate." ariaLabel="Ascultă propoziția: He does not like chocolate." /> He does not like chocolate.</li>
                <li><LexTtsButton text="They do not study French." ariaLabel="Ascultă propoziția: They do not study French." /> They do not study French.</li>
              </ul>
            </div>

            <div className="rule-box">
              <h3>Formă scurtă (contracții)</h3>
              <ul className="ps-mini-list">
                <li><LexTtsButton text="I don’t walk." ariaLabel="Ascultă propoziția: I don’t walk." /> I don&apos;t walk.</li>
                <li><LexTtsButton text="He doesn’t like chocolate." ariaLabel="Ascultă propoziția: He doesn’t like chocolate." /> He doesn&apos;t like chocolate.</li>
                <li><LexTtsButton text="They don’t study French." ariaLabel="Ascultă propoziția: They don’t study French." /> They don&apos;t study French.</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: "0.75rem" }}>
            În vorbirea de zi cu zi, se folosește cel mai des <strong>forma scurtă</strong>
            (don&apos;t / doesn&apos;t).
          </p>
        </>
      }
      mistakesIntro={
        <>
          După <span className="rule-highlight-emphasis">don&apos;t / doesn&apos;t</span>,
          verbul rămâne întotdeauna în <strong>forma de bază</strong> (fără -s / -es).
        </>
      }
      mistakes={[
        { wrong: "He doesn&apos;t works.", correct: "He doesn&apos;t work." },
        { wrong: "She doesn&apos;t goes to school by bus.", correct: "She doesn&apos;t go to school by bus." },
        { wrong: "They don&apos;t plays tennis.", correct: "They don&apos;t play tennis." },
      ]}
      nextStepsDescription="Când simți că regula este clară, poți începe aventura în camerele de exerciții pentru Present Simple – Negativ, poți merge la hartă sau la recapitulare."
      nextStepActions={[
        { to: psRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ", variant: "primary" },
        { to: psMapPath(), label: "Harta modulului", variant: "outline" },
        { to: psOverviewPath(), label: "Recapitulare", variant: "secondary" },
      ]}
    />
  );
}
