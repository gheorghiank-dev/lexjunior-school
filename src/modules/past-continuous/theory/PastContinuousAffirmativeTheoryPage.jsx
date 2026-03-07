import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-continuous-core/theory-progress.js";
import {
  PAST_CONTINUOUS_BASE_PATH,
  pastContinuousMapPath,
  pastContinuousRoomPath,
  pastContinuousOverviewPath,
} from "../past-continuous-paths.js";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { PastContinuousAffirmativeStructureBlock } from "../components/PastContinuousStructureBlocks.jsx";

const SECTION_ID = "affirmative";

export default function PastContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PAST_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Continuous"
      title="Past Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Past Continuous la afirmativ."
      section1Intro={<>În Past Continuous, la afirmativ, ordinea este <strong>subiect + was / were + verb-ing</strong>.</>}
      section1Content={<><PastContinuousAffirmativeStructureBlock /><div className="example-box"><h3>Exemple</h3><ul className="ps-list"><li><LexTtsButton text="I was listening to music at 10 o'clock yesterday morning." /> I was listening to music at 10 o&apos;clock yesterday morning.</li><li><LexTtsButton text="She was dancing in her room." /> She was dancing in her room.</li><li><LexTtsButton text="They were playing football in the park." /> They were playing football in the park.</li></ul></div></>}
      section2Title="Reguli de adăugare a terminației -ing"
      section2Intro={<>Acest al doilea card păstrează aceeași poziție ca în Present Simple și Present Continuous.</>}
      section2Content={<ol className="ps-mini-list"><li><strong>+ -ing</strong>: work → working</li><li><strong>-e + -ing</strong>: dance → dancing <span className="ps-structure-note">(excepție: see → seeing)</span></li><li><strong>-ie → -y + -ing</strong>: lie → lying</li><li><strong>CVC → dublăm ultima consoană + -ing</strong>: stop → stopping <span className="ps-structure-note">(dar: open → opening)</span></li><li><strong>-l → -ll + -ing</strong>: travel → travelling</li></ol>}
      mistakesIntro="Atenție la was / were și la forma corectă a verbului cu -ing."
      mistakes={[{ wrong: "He were talking.", correct: "He was talking.", tip: "La he / she / it folosim was." },{ wrong: "They was playing.", correct: "They were playing.", tip: "La we / you / they folosim were." },{ wrong: "She was danceing.", correct: "She was dancing.", tip: "La dance dispare -e înainte de -ing." }]}
      nextStepsDescription="Dacă regula este clară, poți începe camerele de exerciții pentru forma afirmativă sau poți reveni la hartă și recapitulare."
      nextStepActions={[
        { to: pastContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pastContinuousMapPath(), label: "Harta modulului" },
        { to: pastContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
