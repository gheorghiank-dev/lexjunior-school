import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PS_BASE_PATH,
  psMapPath,
  psRoomPath,
  psOverviewPath,
} from "../ps-paths.js";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import PsTheoryCard from "../components/PsTheoryCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { PsAffirmativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "affirmative";

/**
 * Teoria pentru Present Simple – forma afirmativă (variantă React).
 *
 * Structura paginii:
 *  - Card 1: forma afirmativă + structură generală + exemple cu toate persoanele (I / you / we / they / he / she / it, cu butoane de listen)
 *  - Card 2: reguli de scriere pentru persoana a III-a singular (spelling rules + exemple în două coloane)
 *  - Card 3: exemple greșite vs. corecte
 *  - Card 4: secțiunea „Unde merg mai departe?”
 */
export default function PsAffirmativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch (err) {
      console.error("Failed to mark affirmative theory as completed:", err);
    }
  }, []);

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-backlink-row">
          <Link to={PS_BASE_PATH} className="btn btn-soft ps-back-link">
            ← Înapoi la modulul Present Simple
          </Link>
        </p>

        <h1 className="page-title">Present Simple – Afirmativ</h1>
        <p className="page-lead">
          Reguli, exemple și explicații pentru formarea Present Simple la
          afirmativ.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Forma afirmativă – structură generală + exemple cu toate persoanele */}
      <TenseTheorySectionCard
        number="1."
        title="Forma afirmativă"
        intro={
          <>
            În Present Simple, la afirmativ, ordinea cuvintelor este întotdeauna{" "}
            <strong>Subiect + Verb</strong>. Pentru{" "}
            <strong>he / she / it</strong>, verbul primește de obicei{" "}
            <strong>-s</strong> sau <strong>-es</strong>.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
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
              <LexTtsButton text="She reads books in the evening." /> She reads
              books in the evening.
            </li>
            <li>
              <LexTtsButton text="It snows a lot in winter." /> It snows a lot
              in winter.
            </li>
          </ul>
        </div>
      </TenseTheorySectionCard>

      {/* 2. Reguli de scriere pentru persoana a III-a singular */}
      <TenseTheorySectionCard
        number="2."
        title="Reguli de scriere pentru persoana a III-a singular"
        intro={
          <>
            Aceste reguli se aplică doar pentru <strong>he / she / it</strong>.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <div className="columns-2">
          {/* STÂNGA: reguli */}
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

          {/* DREAPTA: exemple audio */}
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
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente – exemple greșite vs corecte */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente"
        intro={
          <>
            Atunci când adăugăm <strong>-s</strong> sau <strong>-es</strong>,
            apar des greșeli. Compară propozițiile greșite cu variantele
            corecte.
          </>
        }
        mistakes={[
          {
            wrong: "He go to school every day.",
            correct: "He goes to school every day.",
          },
          {
            wrong: "She play tennis on Fridays.",
            correct: "She plays tennis on Fridays.",
          },
          {
            wrong: "It rain a lot in autumn.",
            correct: "It rains a lot in autumn.",
          },
          {
            wrong: "He have a red car.",
            correct: "He has a red car.",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <p className="card-description">
          Când simți că regula este clară, poți începe aventura în camerele de
          exerciții pentru Present Simple – Afirmativ, poți merge înapoi la
          teorie sau la hartă.
        </p>

        <TenseTheoryNextSteps
          actions={[
            {
              key: "scroll-top",
              label: "Înapoi la prezentare",
              variant: "secondary",
              onClick: handleScrollToTop,
            },
            {
              to: psRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Afirmativ",
              variant: "primary",
            },
            {
              to: psMapPath(),
              label: "Mergi la harta Present Simple",
              variant: "outline",
            },
            {
              to: psOverviewPath(),
              label: "Vezi recapitularea Present Simple",
              variant: "secondary",
            },
          ]}
        />
      </PsTheoryCard>
    </TenseTheoryPageShell>
  );
}
