import React, { useEffect } from "react";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { PAST_PERFECT_CONTINUOUS_BASE_PATH, pastPerfectContinuousMapPath, pastPerfectContinuousRoomPath, pastPerfectContinuousOverviewPath } from "../past-perfect-continuous-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { ScaffoldAffirmativeSectionOne, ScaffoldAffirmativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "affirmative";

export default function PastPerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PAST_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Past Perfect Continuous"
      title="Past Perfect Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Past Perfect Continuous la afirmativ."
      section1Intro={<>În această lecție păstrăm aceeași structură vizuală ca la <strong>Present Simple</strong>, dar o adaptăm pentru <strong>Past Perfect Continuous</strong>.</>}
      section1Content={
        <ScaffoldAffirmativeSectionOne
          formula="Subiect + had been + verb-ing"
          examples={[
            "Example 1 – placeholder model.",
            "Example 2 – placeholder model.",
            "Example 3 – placeholder model.",
          ]}
        />
      }
      section2Title="Detalii importante"
      section2Intro={<>Acest al doilea card rămâne obligatoriu în toate timpurile, ca la Present Simple.</>}
      section2Content={
        <ScaffoldAffirmativeSectionTwo
          bullets={[
            "structura completă pentru toate persoanele",
            "forme speciale sau excepții",
            "spelling / participiu / auxiliare, după caz",
            "mini-patterns utile pentru exerciții",
          ]}
        />
      }
      mistakesIntro={<>Cardul de greșeli frecvente rămâne standard și pentru Past Perfect Continuous.</>}
      mistakes={[
        { wrong: "Wrong example 1.", correct: "Correct example 1." },
        { wrong: "Wrong example 2.", correct: "Correct example 2." },
        { wrong: "Wrong example 3.", correct: "Correct example 3." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
