// Present Simple > Interrogative content registry
// Sprint G7: move *content* (exercises, dictionaries, intros, messages) out of page files.
//
// Guardrails:
// - NO UX / gating / keys changes
// - keep templates intact (PsRoomTemplateV1 renders the same)

import React from "react";
import { Link } from "react-router-dom";

import { psMapPath, psRoomPath } from "../ps-paths.js";

import { GapSentenceExerciseList } from "../../../shared/exercises/GapSentenceExerciseList.jsx";
import { McqExerciseList } from "../../../shared/exercises/McqExerciseList.jsx";
import { TextareaExerciseList } from "../../../shared/exercises/TextareaExerciseList.jsx";

import { LexListenOnCorrect } from "../../../shared/exercises/LexListenOnCorrect.jsx";

import { InterrogativeYesNoPairsExerciseList } from "../components/InterrogativeYesNoPairsExerciseList.jsx";

import { presentSimpleInterrogativeLexHints as interrogativeLexHints } from "../../lex-hints/present-simple/index.js";

import { validateRoomRegistry } from "../../../core/registry/validate-room-registry.js";

const SECTION_ID = "interrogative";
const DICT_DESC =
  "Apasă pe 🔊 ca să asculți cuvintele și întrebările din această cameră. Te ajută să înțelegi mai ușor vocabularul folosit în întrebările la Present Simple interogativ.";

// -------------------- Room 1 --------------------
const INT_ROOM_1_EXERCISES = [
  {
    id: 1,
    template: " [gap] they play football on weekends?",
    correct: "do",
    tts: "Do they play football on weekends?",
  },
  {
    id: 2,
    template: " [gap] she work at a hospital?",
    correct: "does",
    tts: "Does she work at a hospital?",
  },
  {
    id: 3,
    template: " [gap] you like coffee?",
    correct: "do",
    tts: "Do you like coffee?",
  },
  {
    id: 4,
    template: " [gap] he go to school by bus?",
    correct: "does",
    tts: "Does he go to school by bus?",
  },
  {
    id: 5,
    template: " [gap] your parents speak English?",
    correct: "do",
    tts: "Do your parents speak English?",
  },
  {
    id: 6,
    template: " [gap] it rain here in summer?",
    correct: "does",
    tts: "Does it rain here in summer?",
  },
  {
    id: 7,
    template: " [gap] we have classes today?",
    correct: "do",
    tts: "Do we have classes today?",
  },
  {
    id: 8,
    template: " [gap] Elena play the piano?",
    correct: "does",
    tts: "Does Elena play the piano?",
  },
  {
    id: 9,
    template: " [gap] cats like milk?",
    correct: "do",
    tts: "Do cats like milk?",
  },
  {
    id: 10,
    template: " [gap] your brother live in the countryside?",
    correct: "does",
    tts: "Does your brother live in the countryside?",
  },
];

const INT_ROOM_1_GLOSSARY_ITEMS = [
  { tts: "play football", word: "play football", meaning: "a juca fotbal" },
  {
    tts: "work at a hospital",
    word: "work at a hospital",
    meaning: "a lucra la un spital",
  },
  { tts: "like coffee", word: "like coffee", meaning: "a-i plăcea cafeaua" },
  {
    tts: "go to school by bus",
    word: "go to school by bus",
    meaning: "a merge la școală cu autobuzul",
  },
  { tts: "speak English", word: "speak English", meaning: "a vorbi engleza" },
  {
    tts: "rain here in summer",
    word: "rain here in summer",
    meaning: "a ploua aici vara",
  },
  {
    tts: "have classes today",
    word: "have classes today",
    meaning: "a avea ore azi",
  },
  { tts: "play the piano", word: "play the piano", meaning: "a cânta la pian" },
  {
    tts: " to live in the countryside",
    word: "live in the countryside",
    meaning: "a locui la țară",
  },
  { tts: "parents", word: "parents", meaning: "părinți" },
  { tts: "cats", word: "cats", meaning: "pisici" },
  { tts: "milk", word: "milk", meaning: "lapte" },
];

// -------------------- Room 2 --------------------
const INT_ROOM_2_EXERCISES = [
  {
    id: 1,
    template:
      "Maria studies medicine at university. → [gap] medicine at university?",
    correct: "does maria study",
    tts: "Does Maria study medicine at university?",
  },
  {
    id: 2,
    template:
      "The children play in the park after school. → [gap] in the park after school?",
    correct: "do the children play",
    tts: "Do the children play in the park after school?",
  },
  {
    id: 3,
    template:
      "Your teacher gives homework every Friday. → [gap] homework every Friday?",
    correct: "does your teacher give",
    tts: "Does your teacher give homework every Friday?",
  },
  {
    id: 4,
    template:
      "The dog sleeps beside the fireplace. → [gap] beside the fireplace?",
    correct: "does the dog sleep",
    tts: "Does the dog sleep beside the fireplace?",
  },
  {
    id: 5,
    template:
      "My cousins travel to Spain every summer. → [gap] to Spain every summer?",
    correct: "do my cousins travel",
    tts: "Do my cousins travel to Spain every summer?",
  },
  {
    id: 6,
    template:
      "The company sells laptops and tablets. → [gap] laptops and tablets?",
    correct: "does the company sell",
    tts: "Does the company sell laptops and tablets?",
  },
  {
    id: 7,
    template:
      "Her friends visit museums on weekends. → [gap] museums on weekends?",
    correct: "do her friends visit",
    tts: "Do her friends visit museums on weekends?",
  },
  {
    id: 8,
    template: "This shop opens at 7 a.m. → [gap] at 7 a.m.?",
    correct: "does this shop open",
    tts: "Does this shop open at 7 a.m.?",
  },
  {
    id: 9,
    template: "Alex drives to work every day. → [gap] to work every day?",
    correct: "does alex drive",
    tts: "Does Alex drive to work every day?",
  },
  {
    id: 10,
    template:
      "Our neighbours grow tomatoes in their garden. → [gap] tomatoes in their garden?",
    correct: "do our neighbours grow",
    tts: "Do our neighbours grow tomatoes in their garden?",
  },
];

const INT_ROOM_2_GLOSSARY_ITEMS = [
  {
    tts: "study medicine",
    word: "study medicine",
    meaning: "a studia medicina",
  },
  { tts: "at university", word: "at university", meaning: "la universitate" },
  {
    tts: "play in the park",
    word: "play in the park",
    meaning: "a se juca în parc",
  },
  { tts: "after school", word: "after school", meaning: "după școală" },
  { tts: "give homework", word: "give homework", meaning: "a da teme" },
  { tts: "every Friday", word: "every Friday", meaning: "în fiecare vineri" },
  {
    tts: "sleep beside the fireplace",
    word: "sleep beside the fireplace",
    meaning: "a dormi lângă șemineu",
  },
  {
    tts: "travel to Spain",
    word: "travel to Spain",
    meaning: "a călători în Spania",
  },
  {
    tts: "sell laptops and tablets",
    word: "sell laptops and tablets",
    meaning: "a vinde laptopuri și tablete",
  },
  {
    tts: "visit museums on weekends",
    word: "visit museums on weekends",
    meaning: "a vizita muzee în weekenduri",
  },
  {
    tts: "open at seven a.m.",
    word: "open at 7 a.m.",
    meaning: "a se deschide la ora 7",
  },
  {
    tts: "drive to work every day",
    word: "drive to work every day",
    meaning: "a merge la serviciu cu mașina în fiecare zi",
  },
  {
    tts: "grow tomatoes in their garden",
    word: "grow tomatoes in their garden",
    meaning: "a cultiva roșii în grădina lor",
  },
  { tts: "company", word: "company", meaning: "companie / firmă" },
  { tts: "neighbours", word: "neighbours", meaning: "vecini" },
];

// -------------------- Room 3 --------------------
const INT_ROOM_3_EXERCISES = [
  {
    id: 1,
    prompt: "coffee / you / do / like / ?",
    correct: "do you like coffee",
    tts: "Do you like coffee?",
  },
  {
    id: 2,
    prompt: "live / grandparents / your / do / far / ?",
    correct: "do your grandparents live far",
    tts: "Do your grandparents live far?",
  },
  {
    id: 3,
    prompt: "movies / on / do / watch / weekends / they / ?",
    correct: "do they watch movies on weekends",
    tts: "Do they watch movies on weekends?",
  },
  {
    id: 4,
    prompt: "sister / Julie's / help / does / her / mother / ?",
    correct: "does julie's sister help her mother",
    tts: "Does Julie's sister help her mother?",
  },
  {
    id: 5,
    prompt: "your / work / an / does / in / father / office / ?",
    correct: "does your father work in an office",
    tts: "Does your father work in an office?",
  },
  {
    id: 6,
    prompt: "exercise / in / you / do / the / morning / ?",
    correct: "do you exercise in the morning",
    tts: "Do you exercise in the morning?",
  },
  {
    id: 7,
    prompt: "explain / does / well / the / teacher / the / lesson / ?",
    correct: "does the teacher explain the lesson well",
    tts: "Does the teacher explain the lesson well?",
  },
  {
    id: 8,
    prompt: "interesting / do / books / you / at / the / library / read / ?",
    correct: "do you read interesting books at the library",
    tts: "Do you read interesting books at the library?",
  },
  {
    id: 9,
    prompt: "start / the / at / eight / does / class / ?",
    correct: "does the class start at eight",
    tts: "Does the class start at eight?",
  },
  {
    id: 10,
    prompt: "at / night / your / friends / do / play / boardgames / ?",
    correct: "do your friends play boardgames at night",
    tts: "Do your friends play boardgames at night?",
  },
];

const INT_ROOM_3_GLOSSARY_ITEMS = [
  { tts: "like coffee", word: "like coffee", meaning: "a-i plăcea cafeaua" },
  { tts: "grandparents", word: "grandparents", meaning: "bunici" },
  { tts: "live far", word: "live far", meaning: "a locui departe" },
  {
    tts: "watch movies on weekends",
    word: "watch movies on weekends",
    meaning: "a se uita la filme în weekend",
  },
  { tts: "Julie's sister", word: "Julie's sister", meaning: "sora lui Julie" },
  {
    tts: "help her mother",
    word: "help her mother",
    meaning: "a-și ajuta mama",
  },
  {
    tts: "work in an office",
    word: "work in an office",
    meaning: "a lucra într-un birou",
  },
  {
    tts: "exercise in the morning",
    word: "exercise in the morning",
    meaning: "a face mișcare dimineața",
  },
  {
    tts: "the teacher",
    word: "the teacher",
    meaning: "profesorul / profesoara",
  },
  {
    tts: "explain the lesson well",
    word: "explain the lesson well",
    meaning: "a explica bine lecția",
  },
  {
    tts: "read interesting books at the library",
    word: "read interesting books at the library",
    meaning: "a citi cărți interesante la bibliotecă",
  },
  {
    tts: "start at eight",
    word: "start at eight",
    meaning: "a începe la ora opt",
  },
  {
    tts: "play boardgames at night",
    word: "play boardgames at night",
    meaning: "a juca jocuri de societate noaptea",
  },
  { tts: "friends", word: "friends", meaning: "prieteni" },
];

// -------------------- Room 4 --------------------
const INT_ROOM_4_EXERCISES = [
  {
    id: 1,
    template: "Does she likes ice cream? → [gap] ice cream?",
    correct: "does she like",
    tts: "Does she like ice cream?",
  },
  {
    id: 2,
    template: "Does they live in this house? → [gap] in this house?",
    correct: "do they live",
    tts: "Do they live in this house?",
  },
  {
    id: 3,
    template: "Does your parents works at night? → [gap] at night?",
    correct: "do your parents work",
    tts: "Do your parents work at night?",
  },
  {
    id: 4,
    template: "Do he go to school by bus? → [gap] to school by bus?",
    correct: "does he go",
    tts: "Does he go to school by bus?",
  },
  {
    id: 5,
    template:
      "Does you play basketball every day? → [gap] basketball every day?",
    correct: "do you play",
    tts: "Do you play basketball every day?",
  },
  {
    id: 6,
    template: "Do Maria studies French? → [gap] French?",
    correct: "does maria study",
    tts: "Does Maria study French?",
  },
  {
    id: 7,
    template: "Do it rains a lot in April? → [gap] a lot in April?",
    correct: "does it rain",
    tts: "Does it rain a lot in April?",
  },
  {
    id: 8,
    template: "Does my friends goes to the gym? → [gap] to the gym?",
    correct: "do my friends go",
    tts: "Do my friends go to the gym?",
  },
  {
    id: 9,
    template: "Do the movie starts at seven? → [gap] at seven?",
    correct: "does the movie start",
    tts: "Does the movie start at seven?",
  },
  {
    id: 10,
    template:
      "Does your brother and sister plays the piano? → [gap] the piano?",
    correct: "do your brother and sister play",
    tts: "Do your brother and sister play the piano?",
  },
];

const INT_ROOM_4_GLOSSARY_ITEMS = [
  {
    tts: "like ice cream",
    word: "like ice cream",
    meaning: "a-i plăcea înghețata",
  },
  {
    tts: "live in this house",
    word: "live in this house",
    meaning: "a locui în această casă",
  },
  { tts: "parents", word: "parents", meaning: "părinți" },
  { tts: "work at night", word: "work at night", meaning: "a lucra noaptea" },
  {
    tts: "go to school by bus",
    word: "go to school by bus",
    meaning: "a merge la școală cu autobuzul",
  },
  {
    tts: "play basketball",
    word: "play basketball",
    meaning: "a juca baschet",
  },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "study French", word: "study French", meaning: "a învăța franceza" },
  {
    tts: "rain a lot in April",
    word: "rain a lot in April",
    meaning: "a ploua mult în aprilie",
  },
  { tts: "friends", word: "friends", meaning: "prieteni" },
  { tts: "go to the gym", word: "go to the gym", meaning: "a merge la sală" },
  { tts: "the movie", word: "the movie", meaning: "filmul" },
  {
    tts: "start at seven",
    word: "start at seven",
    meaning: "a începe la ora șapte",
  },
  {
    tts: "brother and sister",
    word: "brother and sister",
    meaning: "frate și soră",
  },
  { tts: "play the piano", word: "play the piano", meaning: "a cânta la pian" },
];

function InterrogativeDoLikeExerciseList({
  exercises,
  answers,
  feedback,
  onChange,
  showIndex = true,
  testIdPrefix,
}) {
  return (
    <ol className="exercise-list">
      {exercises.map((ex, index) => {
        const status = feedback?.[ex.id];
        const isCorrect = status === "correct";
        const isIncorrect = status === "incorrect";

        const current = (answers?.[ex.id] ?? "").trim();
        const parts = current.split(/\s+/).filter(Boolean);
        const aux = parts[0] ?? "";
        const verb = parts[1] ?? "";

        const inputClassName = `exercise-input ${
          isCorrect
            ? "exercise-input-correct"
            : isIncorrect
              ? "exercise-input-incorrect"
              : ""
        }`;

        const auxId = `ex-${ex.id}-aux`;
        const verbId = `ex-${ex.id}-verb`;

        const setAux = (v) => {
          const next = `${v} ${verb}`.trim().replace(/\s+/g, " ");
          onChange && onChange(ex.id, next);
        };

        const setVerb = (v) => {
          const next = `${aux} ${v}`.trim().replace(/\s+/g, " ");
          onChange && onChange(ex.id, next);
        };

        return (
          <li key={ex.id} className="exercise-row">
            <span className="exercise-text">
              {showIndex && (
                <span className="exercise-index">{index + 1}.</span>
              )}
              <input
                type="text"
                id={auxId}
                name={auxId}
                aria-label={`Do/Does – exercițiul ${index + 1}`}
                className={inputClassName}
                data-testid={
                  testIdPrefix ? `${testIdPrefix}-aux-${ex.id}` : undefined
                }
                value={aux}
                onChange={(e) => setAux(e.target.value)}
              />{" "}
              {ex.subject}{" "}
              <input
                type="text"
                id={verbId}
                name={verbId}
                aria-label={`Verb (like) – exercițiul ${index + 1}`}
                className={inputClassName}
                data-testid={
                  testIdPrefix ? `${testIdPrefix}-verb-${ex.id}` : undefined
                }
                value={verb}
                onChange={(e) => setVerb(e.target.value)}
              />{" "}
              {ex.rest}
            </span>

            <LexListenOnCorrect
              isCorrect={isCorrect}
              tts={ex.tts}
              ariaLabel={
                ex.tts ? `Ascultă propoziția: ${ex.tts}` : "Ascultă propoziția"
              }
            />
          </li>
        );
      })}
    </ol>
  );
}
// -------------------- Room 5 --------------------
const INT_ROOM_5_EXERCISES = [
  {
    id: 1,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Does she like chocolate?",
    options: [
      { value: "a", label: "a) Does she likes chocolate?" },
      { value: "b", label: "b) Does she like chocolate?" },
      { value: "c", label: "c) Do she like chocolate?" },
    ],
  },
  {
    id: 2,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Does your sister live here?",
    options: [
      { value: "a", label: "a) Do your sister live here?" },
      { value: "b", label: "b) Does your sister live here?" },
      { value: "c", label: "c) Does your sister lives here?" },
    ],
  },
  {
    id: 3,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "Does Alex drive to school?",
    options: [
      { value: "a", label: "a) Do Alex drive to school?" },
      { value: "b", label: "b) Does Alex drives to school?" },
      { value: "c", label: "c) Does Alex drive to school?" },
    ],
  },
  {
    id: 4,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Do they play tennis?",
    options: [
      { value: "a", label: "a) Do they plays tennis?" },
      { value: "b", label: "b) Do they play tennis?" },
      { value: "c", label: "c) Does they play tennis?" },
    ],
  },
  {
    id: 5,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "Does the cat sleep on the sofa?",
    options: [
      { value: "a", label: "a) Do the cat sleep on the sofa?" },
      { value: "b", label: "b) Does the cat sleeps on the sofa?" },
      { value: "c", label: "c) Does the cat sleep on the sofa?" },
    ],
  },
  {
    id: 6,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Do your parents speak English?",
    options: [
      { value: "a", label: "a) Do your parents speaks English?" },
      { value: "b", label: "b) Do your parents speak English?" },
      { value: "c", label: "c) Does your parents speak English?" },
    ],
  },
  {
    id: 7,
    prompt: "Alege varianta corectă.",
    correct: "a",
    tts: "Does it rain a lot here?",
    options: [
      { value: "a", label: "a) Does it rain a lot here?" },
      { value: "b", label: "b) Do it rain a lot here?" },
      { value: "c", label: "c) Does it rains a lot here?" },
    ],
  },
  {
    id: 8,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "Does Mark work at a bank?",
    options: [
      { value: "a", label: "a) Do Mark work at a bank?" },
      { value: "b", label: "b) Does Mark works at a bank?" },
      { value: "c", label: "c) Does Mark work at a bank?" },
    ],
  },
  {
    id: 9,
    prompt: "Alege varianta corectă.",
    correct: "a",
    tts: "Do the students understand the lesson?",
    options: [
      { value: "a", label: "a) Do the students understand the lesson?" },
      { value: "b", label: "b) Do the students understands the lesson?" },
      { value: "c", label: "c) Does the students understand the lesson?" },
    ],
  },
  {
    id: 10,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Do we go home together?",
    options: [
      { value: "a", label: "a) Do we goes home together?" },
      { value: "b", label: "b) Do we go home together?" },
      { value: "c", label: "c) Does we go home together?" },
    ],
  },
];

const INT_ROOM_5_GLOSSARY_ITEMS = [
  {
    tts: "like chocolate",
    word: "like chocolate",
    meaning: "a-i plăcea ciocolata",
  },
  { tts: "chocolate", word: "chocolate", meaning: "ciocolată" },
  { tts: "your sister", word: "your sister", meaning: "sora ta" },
  { tts: "live here", word: "live here", meaning: "a locui aici" },
  {
    tts: "drive to school",
    word: "drive to school",
    meaning: "a merge la școală cu mașina",
  },
  { tts: "play tennis", word: "play tennis", meaning: "a juca tenis" },
  { tts: "the cat", word: "the cat", meaning: "pisica" },
  {
    tts: "sleep on the sofa",
    word: "sleep on the sofa",
    meaning: "a dormi pe canapea",
  },
  { tts: "your parents", word: "your parents", meaning: "părinții tăi" },
  { tts: "speak English", word: "speak English", meaning: "a vorbi engleză" },
  {
    tts: "rain a lot here",
    word: "rain a lot here",
    meaning: "a ploua mult aici",
  },
  {
    tts: "work at a bank",
    word: "work at a bank",
    meaning: "a lucra la o bancă",
  },
  { tts: "the students", word: "the students", meaning: "elevii" },
  {
    tts: "understand the lesson",
    word: "understand the lesson",
    meaning: "a înțelege lecția",
  },
  {
    tts: "go home together",
    word: "go home together",
    meaning: "a merge acasă împreună",
  },
];

// -------------------- Room 6 --------------------
const INT_ROOM_6_EXERCISES = [
  {
    id: 1,
    prompt:
      "Do you study English every day? – scrie răspunsul afirmativ complet.",
    correct: "yes i do",
    tts: "Yes, I do.",
  },
  {
    id: 2,
    prompt:
      "Do you study English every day? – scrie răspunsul negativ complet.",
    correct: "no i don't",
    tts: "No, I don't.",
  },
  {
    id: 3,
    prompt: "Does Maria live in London? – scrie răspunsul afirmativ complet.",
    correct: "yes she does",
    tts: "Yes, She does.",
  },
  {
    id: 4,
    prompt: "Does Maria live in London? – scrie răspunsul negativ complet.",
    correct: "no she doesn't",
    tts: "No, She doesn't.",
  },
  {
    id: 5,
    prompt: "Do they work on weekends? – scrie răspunsul afirmativ complet.",
    correct: "yes they do",
    tts: "Yes, They do.",
  },
  {
    id: 6,
    prompt: "Do they work on weekends? – scrie răspunsul negativ complet.",
    correct: "no they don't",
    tts: "No, They don't.",
  },
  {
    id: 7,
    prompt:
      "Does your sister play volleyball? – scrie răspunsul afirmativ complet.",
    correct: "yes she does",
    tts: "Yes, She does.",
  },
  {
    id: 8,
    prompt:
      "Does your sister play volleyball? – scrie răspunsul negativ complet.",
    correct: "no she doesn't",
    tts: "No, She doesn't.",
  },
  {
    id: 9,
    prompt: "Do cats drink milk? – scrie răspunsul afirmativ complet.",
    correct: "yes they do",
    tts: "Yes, They do.",
  },
  {
    id: 10,
    prompt: "Do cats drink milk? – scrie răspunsul negativ complet.",
    correct: "no they don't",
    tts: "No, They don't.",
  },
  {
    id: 11,
    prompt: "Does Mark drive to work? – scrie răspunsul afirmativ complet.",
    correct: "yes he does",
    tts: "Yes, He does.",
  },
  {
    id: 12,
    prompt: "Does Mark drive to work? – scrie răspunsul negativ complet.",
    correct: "no he doesn't",
    tts: "No, He doesn't.",
  },
  {
    id: 13,
    prompt: "Do we need more time? – scrie răspunsul afirmativ complet.",
    correct: "yes we do",
    tts: "Yes, We do.",
  },
  {
    id: 14,
    prompt: "Do we need more time? – scrie răspunsul negativ complet.",
    correct: "no we don't",
    tts: "No, We don't.",
  },
  {
    id: 15,
    prompt:
      "Does the teacher check homework every day? – scrie răspunsul afirmativ complet.",
    correct: "yes he does",
    tts: "Yes, he does.",
  },
  {
    id: 16,
    prompt:
      "Does the teacher check homework every day? – scrie răspunsul negativ complet.",
    correct: "no he doesn't",
    tts: "No, he doesn't.",
  },
  {
    id: 17,
    prompt: "Do children like cartoons? – scrie răspunsul afirmativ complet.",
    correct: "yes they do",
    tts: "Yes, They do.",
  },
  {
    id: 18,
    prompt: "Do children like cartoons? – scrie răspunsul negativ complet.",
    correct: "no they don't",
    tts: "No, They don't.",
  },
  {
    id: 19,
    prompt:
      "Does your phone work properly? – scrie răspunsul afirmativ complet.",
    correct: "yes it does",
    tts: "Yes, It does.",
  },
  {
    id: 20,
    prompt: "Does your phone work properly? – scrie răspunsul negativ complet.",
    correct: "no it doesn't",
    tts: "No, It doesn't.",
  },
];

const INT_ROOM_6_GLOSSARY_ITEMS = [
  { tts: "study English", word: "study English", meaning: "a învăța engleză" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  {
    tts: "live in London",
    word: "live in London",
    meaning: "a locui în Londra",
  },
  {
    tts: "work on weekends",
    word: "work on weekends",
    meaning: "a lucra în weekend",
  },
  { tts: "your sister", word: "your sister", meaning: "sora ta" },
  { tts: "play volleyball", word: "play volleyball", meaning: "a juca volei" },
  { tts: "cats", word: "cats", meaning: "pisici" },
  { tts: "drink milk", word: "drink milk", meaning: "a bea lapte" },
  {
    tts: "drive to work",
    word: "drive to work",
    meaning: "a merge la serviciu cu mașina",
  },
  {
    tts: "need more time",
    word: "need more time",
    meaning: "a avea nevoie de mai mult timp",
  },
  {
    tts: "the teacher",
    word: "the teacher",
    meaning: "profesorul / profesoara",
  },
  {
    tts: "check homework",
    word: "check homework",
    meaning: "a verifica tema pentru acasă",
  },
  { tts: "children", word: "children", meaning: "copii" },
  {
    tts: "like cartoons",
    word: "like cartoons",
    meaning: "a-i plăcea desenele animate",
  },
  { tts: "your phone", word: "your phone", meaning: "telefonul tău" },
  {
    tts: "work properly",
    word: "work properly",
    meaning: "a funcționa cum trebuie",
  },
];

// -------------------- Room 7 --------------------
const INT_ROOM_7_EXERCISES = [
  {
    id: 1,
    prompt: "Te trezești devreme în fiecare dimineață?",
    correct: "do you wake up early every morning",
    tts: "do you wake up early every morning",
  },
  {
    id: 2,
    prompt: "Merge el la școală cu autobuzul în fiecare zi?",
    correct: "does he go to school by bus every day",
    tts: "does he go to school by bus every day",
  },
  {
    id: 3,
    prompt: "Găsești ușor răspunsurile la exerciții?",
    correct: "do you find the answers to the exercises easily",
    tts: "do you find the answers to the exercises easily",
  },
  {
    id: 4,
    prompt: "Locuiește Ana aproape de școală?",
    correct: "does ana live near the school",
    tts: "does ana live near the school",
  },
  {
    id: 5,
    prompt: "Muncesc părinții tăi în weekend?",
    correct: "do your parents work on weekends",
    tts: "do your parents work on weekends",
  },
  {
    id: 6,
    prompt: "Își face el temele după-amiaza?",
    correct: "does he do his homework in the afternoon",
    tts: "does he do his homework in the afternoon",
  },
  {
    id: 7,
    prompt: "Vorbiți engleza acasă?",
    correct: "do you speak english at home",
    tts: "do you speak english at home",
  },
  {
    id: 8,
    prompt: "Începe ora la opt fix?",
    correct: "does the class start at eight oclock",
    tts: "does the class start at eight oclock",
  },
  {
    id: 9,
    prompt: "Îți pregătești ghiozdanul în fiecare seară?",
    correct: "do you prepare your school bag every evening",
    tts: "do you prepare your school bag every evening",
  },
  {
    id: 10,
    prompt: "Vizitați biblioteca în fiecare săptămână?",
    correct: "do you visit the library every week",
    tts: "do you visit the library every week",
  },
];

const INT_ROOM_7_GLOSSARY_ITEMS = [
  { tts: "wake up", word: "wake up", meaning: "a te trezi" },
  { tts: "early", word: "early", meaning: "devreme" },
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
  { tts: "go to school", word: "go to school", meaning: "a merge la școală" },
  { tts: "by bus", word: "by bus", meaning: "cu autobuzul" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  {
    tts: "find the answers",
    word: "find the answers",
    meaning: "a găsi răspunsurile",
  },
  {
    tts: "to the exercises",
    word: "to the exercises",
    meaning: "la exerciții",
  },
  { tts: "easily", word: "easily", meaning: "ușor" },
  {
    tts: "live near the school",
    word: "live near the school",
    meaning: "a locui aproape de școală",
  },
  { tts: "work at home", word: "work at home", meaning: "a lucra acasă" },
  { tts: "in the afternoon", word: "in the afternoon", meaning: "după-amiaza" },
  {
    tts: "do our English homework",
    word: "do our English homework",
    meaning: "a ne face tema la engleză",
  },
  { tts: "speak English", word: "speak English", meaning: "a vorbi engleza" },
  {
    tts: "start at eight o'clock",
    word: "start at eight o'clock",
    meaning: "a începe la ora opt fix",
  },
  {
    tts: "prepare your school bag",
    word: "prepare your school bag",
    meaning: "a-ți pregăti ghiozdanul",
  },
  { tts: "every evening", word: "every evening", meaning: "în fiecare seară" },
  {
    tts: "visit the library",
    word: "visit the library",
    meaning: "a vizita biblioteca",
  },
  { tts: "every week", word: "every week", meaning: "în fiecare săptămână" },
];

export const PS_INTERROGATIVE_ROOMS = [
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 1,
    exercises: INT_ROOM_1_EXERCISES,
    lexHints: interrogativeLexHints.room1,
    ExerciseListComponent: GapSentenceExerciseList,
    exerciseListProps: { showIndex: true, testIdPrefix: "ps-int-room1" },
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează spațiile libere cu Do sau Does
        </h2>
      </>
    ),
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_1_GLOSSARY_ITEMS,
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 2,
    exercises: INT_ROOM_2_EXERCISES,
    lexHints: interrogativeLexHints.room2,
    ExerciseListComponent: GapSentenceExerciseList,
    exerciseListProps: { showIndex: true, testIdPrefix: "ps-int-room2" },

    cardIntro: (
      <>
        <h2 className="card-title">
          Copletează spațiile libere cu forma de interogativ a verbului din
          propoziția dată
        </h2>
      </>
    ),
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_2_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 3,
    exercises: INT_ROOM_3_EXERCISES,
    lexHints: interrogativeLexHints.room3,
    ExerciseListComponent: TextareaExerciseList,
    exerciseListProps: { rows: 1, stacked: true, showIndex: true },
    // Room 3 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Scrie cuvintele date în ordinea corectă pentru a forma propoziții la
          Present Simple interogativ
        </h2>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 4),
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_3_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 4,
    exercises: INT_ROOM_4_EXERCISES,
    lexHints: interrogativeLexHints.room4,
    ExerciseListComponent: GapSentenceExerciseList,
    exerciseListProps: { showIndex: true, testIdPrefix: "ps-int-room4" },
    // Room 4 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Corectează întrebările greșite: scrie începutul corect
        </h2>
        <p className="card-description">
          În spațiul liber scrii începutul întrebării corecte:
          <strong> Do/Does + subiect + like</strong>. Restul propoziției este
          deja afișat.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 5),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_4_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 5,
    exercises: INT_ROOM_5_EXERCISES,
    lexHints: interrogativeLexHints.room5,
    ExerciseListComponent: McqExerciseList,
    // Room 5 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">Exercițiu – alege întrebarea corectă</h2>
        <p className="card-description">
          Pentru fiecare item, alege varianta de propoziție care respectă
          regulile pentru întrebările la Present Simple.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 6),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_5_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 6,
    exercises: INT_ROOM_6_EXERCISES,
    lexHints: interrogativeLexHints.room6,
    ExerciseListComponent: InterrogativeYesNoPairsExerciseList,
    // Room 6 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Exercițiu – răspunsuri scurte (Yes/No) la întrebări
        </h2>
        <p className="card-description">
          Pentru fiecare întrebare, scrie câte un răspuns scurt afirmativ și
          unul negativ, folosind pronumele și forma corectă de do/does.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 7),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_6_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Interrogative",
    roomNumber: 7,
    exercises: INT_ROOM_7_EXERCISES,
    lexHints: interrogativeLexHints.room7,
    ExerciseListComponent: TextareaExerciseList,
    exerciseListProps: { rows: 1, stacked: true, showIndex: true },
    // Room 7 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    // Last room → no Next.
    nextTo: null,
    verifyLabel: "Verifică răspunsurile",
    cardIntro: (
      <>
        <h2 className="card-title">
          Exercițiu – traduce întrebările în engleză
        </h2>
        <p className="card-description">
          Ai întrebări în limba română. Scrie forma corectă a întrebării în
          engleză, la Present Simple interogativ.
        </p>
      </>
    ),
    afterBody: ({ roomState }) =>
      roomState.passed ? (
        <section className="card section-complete-card">
          <h2 className="card-title">
            Bravo! Ai terminat toate camerele din secțiunea Interrogative –
            Present Simple. 🎉
          </h2>
          <p className="card-description">
            Ai parcurs toată ruta pentru întrebările la Present Simple. Mergi la
            hartă ca să vezi progresul cheilor și cât de aproape ești de camera
            finală.
          </p>
          <div className="buttons">
            <Link to={psMapPath()} className="btn btn-outline">
              🏁 Înapoi la hartă
            </Link>
          </div>
        </section>
      ) : null,
    dictionaryDescription: DICT_DESC,
    dictionaryItems: INT_ROOM_7_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
];

// Dev-only fail-fast validation (no runtime / UX changes in production)
if (import.meta.env.DEV) {
  validateRoomRegistry(PS_INTERROGATIVE_ROOMS, {
    registryName: "PS_INTERROGATIVE_ROOMS",
    sectionId: SECTION_ID,
    expectedRoomNumbers: [1, 2, 3, 4, 5, 6, 7],
  });
}

export function getPsInterrogativeRoomDef(roomNumber) {
  const idx = Number.isFinite(roomNumber) ? roomNumber - 1 : -1;
  if (idx < 0 || idx >= PS_INTERROGATIVE_ROOMS.length) return null;
  return PS_INTERROGATIVE_ROOMS[idx];
}
