import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import {
  PC_BASE_PATH,
  pcMapPath,
  pcRoomPath,
  pcOverviewPath,
} from "../pc-paths.js";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryCard from "../../tenses/ui/TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "../../tenses/ui/TenseTheoryCommonMistakesCard.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { PcAffirmativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

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

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell>
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
      <TenseLexStudyTipCard />

      {/* 1. Forma afirmativă – structură generală + exemple */}
      <TenseTheorySectionCard
        number="1."
        title="Forma afirmativă"
        intro={
          <>
            În Present Continuous, la afirmativ, spui ce se întâmplă{" "}
            <strong>acum</strong> sau în jurul momentului prezentului. Structura
            de bază este:
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
        <PcAffirmativeStructureBlock />

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
      </TenseTheorySectionCard>
      {/* 2. Forma -ing (spelling scurt) */}
      <TenseTheorySectionCard
        number="2."
        title="Cum formăm verbul cu -ing"
        intro={
          <>
            De obicei adăugăm <strong>-ing</strong> la forma de bază a verbului,
            dar există câteva reguli de scriere importante.
          </>
        }
        style={{ marginBottom: "1.75rem" }}
      >
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
      </TenseTheorySectionCard>

      {/* 3. Greșeli frecvente */}
      <TenseTheoryCommonMistakesCard
        title="3. Greșeli frecvente"
        intro={
          <>
            Când folosim Present Continuous, apar des două tipuri de greșeli:
            uităm de verbul <strong>to be</strong> sau amestecăm regula de{" "}
            <strong>-ing</strong>.
          </>
        }
        mistakes={[
          {
            wrong: "She watching TV.",
            correct: "She is watching TV.",
          },
          {
            wrong: "They are play football.",
            correct: "They are playing football.",
          },
          {
            wrong: "He is runing fast.",
            correct: "He is running fast.",
          },
          {
            wrong: "I am study English now.",
            correct: "I am studying English now.",
          },
        ]}
        style={{ marginBottom: "1.75rem" }}
      />

      {/* 4. Unde merg mai departe? */}
      <TenseTheoryCard style={{ marginBottom: "1.75rem" }}>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        <TenseTheoryNextSteps
          actions={[
            {
              key: "scroll-top",
              label: "Înapoi la prezentare",
              variant: "secondary",
              onClick: handleScrollToTop,
            },
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
              to: pcOverviewPath(),
              label: "Vezi recapitularea Present Continuous",
              variant: "secondary",
            },
          ]}
        />
      </TenseTheoryCard>
    </TenseTheoryPageShell>
  );
}
