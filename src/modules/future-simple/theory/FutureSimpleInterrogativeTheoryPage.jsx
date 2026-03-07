import React, { useEffect } from "react";
import { markTheoryCompleted } from "../future-core/theory-progress.js";
import { FUTURE_SIMPLE_BASE_PATH, futureSimpleMapPath, futureSimpleRoomPath, futureSimpleOverviewPath } from "../future-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import { ScaffoldInterrogativeSectionOne, ScaffoldInterrogativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "interrogative";

export default function FutureSimpleInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={FUTURE_SIMPLE_BASE_PATH}
      backLabel="← Înapoi la modulul Future Simple"
      title="Future Simple – Interogativ"
      lead="Reguli, exemple și explicații pentru formarea Future Simple la interogativ."
      section1Intro={<>La interogativ, toate timpurile trebuie să păstreze aceeași arhitectură vizuală de bază.</>}
      section1Content={
        <ScaffoldInterrogativeSectionOne
          formula="Will + subiect + verb (forma de bază) + ?"
          examples={[
            "Question 1 – placeholder model?",
            "Question 2 – placeholder model?",
            "Question 3 – placeholder model?",
          ]}
        />
      }
      section2Intro={<>Al doilea card este rezervat pentru răspunsuri scurte, wh-questions sau alte modele utile.</>}
      section2Content={
        <ScaffoldInterrogativeSectionTwo
          questionAnswers={[
            { question: "Question 1?", answer: "Yes / No answer 1." },
            { question: "Question 2?", answer: "Yes / No answer 2." },
            { question: "Question 3?", answer: "Yes / No answer 3." },
          ]}
        />
      }
      mistakesIntro={<>Cardul de greșeli frecvente rămâne standard și aici.</>}
      mistakes={[
        { wrong: "Wrong interrogative example 1.", correct: "Correct interrogative example 1." },
        { wrong: "Wrong interrogative example 2.", correct: "Correct interrogative example 2." },
        { wrong: "Wrong interrogative example 3.", correct: "Correct interrogative example 3." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: futureSimpleRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: futureSimpleMapPath(), label: "Harta modulului" },
        { to: futureSimpleOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
