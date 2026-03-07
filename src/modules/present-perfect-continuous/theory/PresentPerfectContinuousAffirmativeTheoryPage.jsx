import React, { useEffect } from "react";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { PRESENT_PERFECT_CONTINUOUS_BASE_PATH, presentPerfectContinuousMapPath, presentPerfectContinuousRoomPath, presentPerfectContinuousOverviewPath } from "../present-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { ScaffoldAffirmativeSectionOne, ScaffoldAffirmativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "affirmative";

export default function PresentPerfectContinuousAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PRESENT_PERFECT_CONTINUOUS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Perfect Continuous"
      title="Present Perfect Continuous – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Present Perfect Continuous la afirmativ."
      section1Intro={<>În această lecție păstrăm aceeași structură vizuală ca la <strong>Present Simple</strong>, dar o adaptăm pentru <strong>Present Perfect Continuous</strong>.</>}
      section1Content={
        <ScaffoldAffirmativeSectionOne
          formula="Subiect + have / has been + verb-ing"
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
      mistakesIntro={<>Cardul de greșeli frecvente rămâne standard și pentru Present Perfect Continuous.</>}
      mistakes={[
        { wrong: "Wrong example 1.", correct: "Correct example 1." },
        { wrong: "Wrong example 2.", correct: "Correct example 2." },
        { wrong: "Wrong example 3.", correct: "Correct example 3." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
