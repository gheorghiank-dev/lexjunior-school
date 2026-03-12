import React, { useEffect } from "react";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import {
  PS_BASE_PATH,
  psMapPath,
  psOverviewPath,
  psRoomPath,
} from "../ps-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { PsAffirmativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "affirmative";

export default function PsAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID).catch((err) => {
      console.error("Failed to mark affirmative theory as completed:", err);
    });
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Simple"
      title="Present Simple – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Present Simple la afirmativ."
      section1Intro={
        <>
          În Present Simple, la afirmativ, ordinea cuvintelor este întotdeauna{" "}
          <strong>Subiect + Verb</strong>. Pentru <strong>he / she / it</strong>
          , verbul primește de obicei <strong>-s</strong> sau{" "}
          <strong>-es</strong>.
        </>
      }
      section1Content={
        <>
          <PsAffirmativeStructureBlock />

          <div className="example-box">
            <h3>Exemple</h3>
            <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
              Ascultă propozițiile și repetă cu voce tare.
            </p>
            <ul className="ps-list">
              <li>
                <LexTtsButton text="I work from home." /> I work from home.
              </li>
              <li>
                <LexTtsButton text="You play football on Saturdays." /> You play
                football on Saturdays.
              </li>
              <li>
                <LexTtsButton text="We live in a small town." /> We live in a
                small town.
              </li>
              <li>
                <LexTtsButton text="They study English every day." /> They study
                English every day.
              </li>
              <li>
                <LexTtsButton text="He plays the piano." /> He plays the piano.
              </li>
              <li>
                <LexTtsButton text="She reads books in the evening." /> She
                reads books in the evening.
              </li>
              <li>
                <LexTtsButton text="It snows a lot in winter." /> It snows a lot
                in winter.
              </li>
            </ul>
          </div>
        </>
      }
      section2Title="2. Reguli de scriere pentru persoana a III-a singular"
      section2Intro={
        <>
          Aceste reguli se aplică doar pentru <strong>he / she / it</strong>.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Spelling rules</h3>
            <ol className="ps-mini-list">
              <li>
                <strong>
                  + <span className="rule-highlight-emphasis">-s</span>
                </strong>
                <br />
                <span className="ps-text">
                  Majoritatea verbelor:
                  <br />
                  <span className="example-inline">
                    work → He work
                    <strong className="rule-highlight-emphasis">s</strong>.
                  </span>
                </span>
              </li>

              <li>
                <strong>
                  Terminațiile -ss, -ch, -sh, -x, -o{" "}
                  <span className="rule-highlight-emphasis">→ + -es</span>
                </strong>
                <br />
                <span className="example-inline">
                  kiss → He kiss
                  <strong className="rule-highlight-emphasis">es</strong>.
                </span>
                <br />
                <span className="example-inline">
                  teach → He teach
                  <strong className="rule-highlight-emphasis">es</strong>.
                </span>
                <br />
                <span className="example-inline">
                  brush → He brush
                  <strong className="rule-highlight-emphasis">es</strong>.
                </span>
                <br />
                <span className="example-inline">
                  fix → He fix
                  <strong className="rule-highlight-emphasis">es</strong>.
                </span>
                <br />
                <span className="example-inline">
                  go → He go
                  <strong className="rule-highlight-emphasis">es</strong>.
                </span>
              </li>

              <li>
                <strong>
                  Vocală + y{" "}
                  <span className="rule-highlight-emphasis">→ + -s</span>
                </strong>
                <br />
                <span className="example-inline">
                  play → He play
                  <strong className="rule-highlight-emphasis">s</strong>.
                </span>
              </li>

              <li>
                <strong>
                  Consoană + y{" "}
                  <span className="rule-highlight-emphasis">→ -y + -ies</span>
                </strong>
                <br />
                <span className="example-inline">
                  try → He tr
                  <strong className="rule-highlight-emphasis">ies</strong>.
                </span>
              </li>

              <li>
                <strong>Verbe speciale</strong>
                <br />
                <span className="example-inline">
                  have → He{" "}
                  <strong className="rule-highlight-emphasis">has</strong>.
                </span>
                <br />
                <span className="example-inline">
                  do → He{" "}
                  <strong className="rule-highlight-emphasis">does</strong>.
                </span>
                <br />
                <span className="example-inline">
                  go → He{" "}
                  <strong className="rule-highlight-emphasis">goes</strong>.
                </span>
              </li>
            </ol>
          </div>

          <div className="example-box">
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>
                <LexTtsButton text="I work in a bank." /> I work in a bank.
              </li>
              <li>
                <LexTtsButton text="He works in a bank." /> He works in a bank.
              </li>
              <li>
                <LexTtsButton text="I watch films on Fridays." /> I watch films
                on Fridays.
              </li>
              <li>
                <LexTtsButton text="She watches films on Fridays." /> She
                watches films on Fridays.
              </li>
              <li>
                <LexTtsButton text="I play the guitar." /> I play the guitar.
              </li>
              <li>
                <LexTtsButton text="She plays the guitar." /> She plays the
                guitar.
              </li>
              <li>
                <LexTtsButton text="I try new recipes." /> I try new recipes.
              </li>
              <li>
                <LexTtsButton text="He tries new recipes." /> He tries new
                recipes.
              </li>
              <li>
                <LexTtsButton text="I have a red car." /> I have a red car.
              </li>
              <li>
                <LexTtsButton text="He has a red car." /> He has a red car.
              </li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={
        <>
          Cele mai multe greșeli apar atunci când uităm să adăugăm{" "}
          <strong>-s</strong>
          sau <strong>-es</strong> la <strong>he / she / it</strong>.
        </>
      }
      mistakes={[
        { wrong: "He play football.", correct: "He plays football." },
        {
          wrong: "She go to school by bus.",
          correct: "She goes to school by bus.",
        },
        {
          wrong: "It snow a lot in winter.",
          correct: "It snows a lot in winter.",
        },
      ]}
      nextStepsDescription="Când regula este clară, poți începe camerele de exerciții pentru Present Simple – Afirmativ, poți merge la hartă sau la recapitulare."
      nextStepActions={[
        {
          to: psRoomPath(SECTION_ID, 1),
          label: "Camera 1 – Afirmativ",
          variant: "primary",
        },
        { to: psMapPath(), label: "Harta modulului", variant: "outline" },
        { to: psOverviewPath(), label: "Recapitulare", variant: "secondary" },
      ]}
    />
  );
}
