import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import {
  PC_BASE_PATH,
  pcMapPath,
  pcRoomPath,
  pcOverviewPath,
} from "../pc-paths.js";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { PcAffirmativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "affirmative";

export default function PcAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Present Continuous la afirmativ."
      section1Intro={
        <>
          În Present Continuous, la afirmativ, folosim <strong>subiect + am / is / are + verb-ing</strong>.
        </>
      }
      section1Content={
        <>
          <PcAffirmativeStructureBlock />
          <div className="example-box">
            <h3>Exemple</h3>
            <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
              Ascultă propozițiile și repetă cu voce tare.
            </p>
            <ul className="ps-list">
              <li><LexTtsButton text="I am doing my homework now." /> I am doing my homework now.</li>
              <li><LexTtsButton text="She is watching TV at the moment." /> She is watching TV at the moment.</li>
              <li><LexTtsButton text="They are playing football in the park." /> They are playing football in the park.</li>
              <li><LexTtsButton text="We are studying English this evening." /> We are studying English this evening.</li>
              <li><LexTtsButton text="You are listening to music right now." /> You are listening to music right now.</li>
            </ul>
          </div>
        </>
      }
      section2Title="Cum formăm verbul cu -ing"
      section2Intro={
        <>
          De obicei adăugăm <strong>-ing</strong>, dar există câteva reguli de scriere importante.
        </>
      }
      section2Content={
        <div className="ps-rules-grid">
          <div>
            <h3 className="ps-rules-title">Regula 1 – Doar + ing</h3>
            <p className="ps-text">Pentru majoritatea verbelor, doar adăugăm <strong>-ing</strong>.</p>
            <ul className="ps-list"><li>play → <strong>playing</strong></li><li>work → <strong>working</strong></li><li>read → <strong>reading</strong></li></ul>
          </div>
          <div>
            <h3 className="ps-rules-title">Regula 2 – Verbe care se termină în -e</h3>
            <p className="ps-text">La verbele care se termină în <strong>-e</strong>, de obicei renunțăm la <strong>-e</strong> și adăugăm <strong>-ing</strong>.</p>
            <ul className="ps-list"><li>make → <strong>making</strong></li><li>write → <strong>writing</strong></li><li>drive → <strong>driving</strong></li></ul>
          </div>
          <div>
            <h3 className="ps-rules-title">Regula 3 – Consoană dublă</h3>
            <p className="ps-text">Dacă verbul are modelul <strong>consoană–vocală–consoană</strong>, de multe ori dublăm ultima consoană.</p>
            <ul className="ps-list"><li>stop → <strong>stopping</strong></li><li>run → <strong>running</strong></li><li>swim → <strong>swimming</strong></li></ul>
          </div>
        </div>
      }
      mistakesIntro={
        <>
          Cele mai frecvente greșeli apar când uităm de <strong>to be</strong> sau scriem greșit forma cu <strong>-ing</strong>.
        </>
      }
      mistakes={[
        { wrong: "She watching TV.", correct: "She is watching TV." },
        { wrong: "They are play football.", correct: "They are playing football." },
        { wrong: "He is runing fast.", correct: "He is running fast." },
        { wrong: "I am study English now.", correct: "I am studying English now." },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
