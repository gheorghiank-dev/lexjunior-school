import React, { useEffect } from "react";
import { markTheoryCompleted } from "../be-core/theory-progress.js";
import { BE_GOING_TO_BASE_PATH, beGoingToMapPath, beGoingToRoomPath, beGoingToOverviewPath } from "../be-paths.js";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { ScaffoldAffirmativeSectionOne, ScaffoldAffirmativeSectionTwo } from "../../tenses/ui/TenseScaffoldTheoryContent.jsx";

const SECTION_ID = "affirmative";

export default function BeGoingToAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={BE_GOING_TO_BASE_PATH}
      backLabel="← Înapoi la modulul Be Going To"
      title="Be Going To – Afirmativ"
      lead="Reguli, exemple și explicații pentru formarea Be Going To la afirmativ."
      section1Intro={<>În această lecție păstrăm aceeași structură vizuală ca la <strong>Present Simple</strong>, dar o adaptăm pentru <strong>Be Going To</strong>.</>}
      section1Content={
        <ScaffoldAffirmativeSectionOne
          formula="Subiect + am / is / are + going to + verb"
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
      mistakesIntro={<>Cardul de greșeli frecvente rămâne standard și pentru Be Going To.</>}
      mistakes={[
        { wrong: "Wrong example 1.", correct: "Correct example 1." },
        { wrong: "Wrong example 2.", correct: "Correct example 2." },
        { wrong: "Wrong example 3.", correct: "Correct example 3." },
      ]}
      nextStepsDescription="După ce regula devine clară, poți merge la prima cameră, la hartă sau la recapitulare."
      nextStepActions={[
        { to: beGoingToRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: beGoingToMapPath(), label: "Harta modulului" },
        { to: beGoingToOverviewPath(), label: "Recapitulare" },
      ]}
    />
  );
}
