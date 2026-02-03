import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath } from "../pc-paths.js";
import PsTheoryPageShell from "../../present-simple/components/PsTheoryPageShell.jsx";
import PsTheoryCard from "../../present-simple/components/PsTheoryCard.jsx";
import PsTheoryNextSteps from "../../present-simple/components/PsTheoryNextSteps.jsx";
import PsLexStudyTipCard from "../../present-simple/components/PsLexStudyTipCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";

const SECTION_ID = "affirmative";

/**
 * Teoria pentru Present Continuous – forma afirmativă.
 *
 * Structura urmează același layout ca pagina de teorie pentru
 * Present Simple – Affirmative, dar cu reguli și exemple adaptate
 * pentru Present Continuous.
 */
export default function PcAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <PsTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={pcMapPath()} className="page-header-backlink">
            ← Înapoi la harta Present Continuous
          </Link>
        </p>

        <h1 className="page-title">Present Continuous – Affirmative</h1>
        <p className="page-lead">
          Reguli, exemple și explicații pentru formarea Present Continuous la
          afirmativ: <strong>Subiect + am / is / are + verb-ing</strong>.
        </p>
      </header>

      {/* Lex Junior – Study Tip (global, la fel ca la Present Simple) */}
      <PsLexStudyTipCard />

      {/* 1. Forma afirmativă – structură generală + exemple */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">1. Forma afirmativă</h2>
        <p className="card-description">
          În Present Continuous, la afirmativ, spui ce se întâmplă{" "}
          <strong>acum</strong> sau în jurul momentului prezentului. Structura
          de bază este:
        </p>

        <div className="ps-structure-box">
          <h3 className="ps-structure-title">Structură generală</h3>

          <p className="ps-text">
            <span className="rule-highlight">
              Subiect +{" "}
              <span className="rule-highlight-emphasis">am / is / are</span> +
              verb
              <span className="rule-highlight-emphasis">-ing</span>
            </span>
          </p>

          <div className="ps-structure-grid">
            <div>
              <p className="ps-text ps-structure-note-heading">
                Forme ale lui to be
              </p>
              <ul className="ps-list">
                <li>
                  <span className="rule-highlight-emphasis">I am</span> (I’m)
                </li>
                <li>
                  <span className="rule-highlight-emphasis">You are</span>{" "}
                  (You’re)
                </li>
                <li>
                  <span className="rule-highlight-emphasis">
                    He / She / It is
                  </span>{" "}
                  (He’s / She’s / It’s)
                </li>
                <li>
                  <span className="rule-highlight-emphasis">We are</span>{" "}
                  (We’re)
                </li>
                <li>
                  <span className="rule-highlight-emphasis">You are</span>{" "}
                  (You’re)
                </li>
                <li>
                  <span className="rule-highlight-emphasis">They are</span>{" "}
                  (They’re)
                </li>
              </ul>
            </div>

            <div>
              <p className="ps-text ps-structure-note-heading">Model complet</p>
              <ul className="ps-list">
                <li>
                  I <strong>am working</strong>.
                </li>
                <li>
                  You <strong>are reading</strong>.
                </li>
                <li>
                  He / She / It <strong>is playing</strong>.
                </li>
                <li>
                  We <strong>are studying</strong>.
                </li>
                <li>
                  They <strong>are talking</strong>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="example-box">
          <h3>Exemple</h3>
          <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
            Ascultă propozițiile și repetă cu voce tare.
          </p>
          <ul className="ps-list">
            <li>
              <LexTtsButton text="I am doing my homework now." /> I am doing my
              homework now.
            </li>
            <li>
              <LexTtsButton text="She is watching TV at the moment." /> She is
              watching TV at the moment.
            </li>
            <li>
              <LexTtsButton text="They are playing football in the park." />{" "}
              They are playing football in the park.
            </li>
            <li>
              <LexTtsButton text="We are studying English this evening." /> We
              are studying English this evening.
            </li>
            <li>
              <LexTtsButton text="You are listening to music right now." /> You
              are listening to music right now.
            </li>
          </ul>
        </div>
      </PsTheoryCard>

      {/* 2. Forma -ing (spelling scurt) */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">2. Cum formăm verbul cu -ing</h2>
        <p className="card-description">
          De obicei adăugăm <strong>-ing</strong> la forma de bază a verbului,
          dar există câteva reguli de scriere importante.
        </p>

        <div className="ps-rules-grid">
          <div>
            <h3 className="ps-rules-title">Regula 1 – Doar + ing</h3>
            <p className="ps-text">
              Pentru majoritatea verbelor, doar adăugăm <strong>-ing</strong>.
            </p>
            <ul className="ps-list">
              <li>
                play → <strong>playing</strong>
              </li>
              <li>
                work → <strong>working</strong>
              </li>
              <li>
                read → <strong>reading</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="ps-rules-title">
              Regula 2 – Verbe care se termină în -e
            </h3>
            <p className="ps-text">
              La verbele care se termină în <strong>-e</strong>, de obicei
              renunțăm la <strong>-e</strong> și adăugăm <strong>-ing</strong>.
            </p>
            <ul className="ps-list">
              <li>
                make → mak<strong>ing</strong> → <strong>making</strong>
              </li>
              <li>
                write → writ<strong>ing</strong> → <strong>writing</strong>
              </li>
              <li>
                drive → driv<strong>ing</strong> → <strong>driving</strong>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="ps-rules-title">
              Regula 3 – Consoană-dublă (dublăm ultima consoană)
            </h3>
            <p className="ps-text">
              Dacă verbul are modelul <strong>consoană–vocală–consoană</strong>{" "}
              și accentul cade pe ultima silabă, dublăm ultima consoană.
            </p>
            <ul className="ps-list">
              <li>
                stop → <strong>stopping</strong>
              </li>
              <li>
                run → <strong>running</strong>
              </li>
              <li>
                swim → <strong>swimming</strong>
              </li>
            </ul>
          </div>
        </div>
      </PsTheoryCard>

      {/* 3. Greșeli frecvente */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">3. Greșeli frecvente</h2>
        <p className="card-description">
          Când folosim Present Continuous, apar des două tipuri de greșeli:
          uităm de verbul <strong>to be</strong> sau amestecăm regula de{" "}
          <strong>-ing</strong>.
        </p>

        <div className="ps-mistakes-box">
          <div className="ps-mistakes-grid">
            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--wrong">
                Greșit
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>She watching TV.</li>
                <li>They are play football.</li>
                <li>He is runing fast.</li>
                <li>I am study English now.</li>
              </ul>
            </div>

            <div>
              <div className="ps-mistakes-column-title ps-mistakes-column-title--correct">
                Corect
              </div>
              <ul className="ps-list ps-mistakes-list">
                <li>She is watching TV.</li>
                <li>They are playing football.</li>
                <li>He is running fast.</li>
                <li>I am studying English now.</li>
              </ul>
            </div>
          </div>
        </div>
      </PsTheoryCard>

      {/* 4. Unde merg mai departe? */}
      <PsTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <PsTheoryNextSteps
          actions={[
            {
              to: pcRoomPath(SECTION_ID, 1),
              label: "Începe Camera 1 – Affirmative",
              variant: "primary",
            },
            {
              to: pcMapPath(),
              label: "Mergi la harta Present Continuous",
              variant: "outline",
            },
            {
              to: PC_BASE_PATH,
              label: "Înapoi la prezentarea Present Continuous",
              variant: "secondary",
            },
          ]}
        />
      </PsTheoryCard>

      <div className="page-footer-actions">
        <button
          type="button"
          className="btn btn-ghost"
          onClick={scrollMainToTop}
        >
          ↑ Înapoi sus
        </button>
      </div>
    </PsTheoryPageShell>
  );
}
