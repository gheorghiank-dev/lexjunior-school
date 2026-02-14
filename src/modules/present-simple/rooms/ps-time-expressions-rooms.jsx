// Present Simple > Time Expressions content registry
// Sprint G8: move *content* (exercises, dictionaries, intros, messages) out of page files.
//
// Guardrails:
// - NO UX / gating / keys changes
// - keep templates intact (PsRoomTemplateV1 renders the same)

import React from "react";
import { Link } from "react-router-dom";

import { psMapPath } from "../ps-paths.js";

import { MatchingPairsExerciseList } from "../../../shared/exercises/MatchingPairsExerciseList.jsx";
import { McqExerciseList } from "../../../shared/exercises/McqExerciseList.jsx";
import { SentenceBuilderExerciseList } from "../../../shared/exercises/SentenceBuilderExerciseList.jsx";

import { presentSimpleTimeExpressionsLexHints as timeExpressionsLexHints } from "../../lex-hints/present-simple/index.js";

import { validateRoomRegistry } from "../../../core/registry/validate-room-registry.js";

import { AdverbPositionExerciseList } from "../components/AdverbPositionExerciseList.jsx";
import { FrequencyAdverbExerciseList } from "../components/FrequencyAdverbExerciseList.jsx";
import { RuneTranslationExerciseList } from "../components/RuneTranslationExerciseList.jsx";

const SECTION_ID = "time-expressions";

// Room 1
const TIME_EXPRESSION_OPTIONS = [
  { value: "in-the-morning", label: "in the morning" },
  { value: "every-month", label: "every month" },
  { value: "every-weekend", label: "every weekend" },
  { value: "every-wednesday", label: "every Wednesday" },
  { value: "every-saturday", label: "every Saturday" },
  { value: "on-mondays", label: "on Mondays" },
  { value: "every-morning", label: "every morning" },
  { value: "in-the-afternoon", label: "in the afternoon" },
  { value: "in-the-evening", label: "in the evening" },
  { value: "at-noon", label: "at noon" },
];

const TIME_EXPRESSIONS_ROOM_1_EXERCISES = [
  {
    id: 1,
    leftText: "I feed the dog ___ right after waking up.",
    correct: "in-the-morning",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "I feed the dog in the morning, right after waking up.",
  },
  {
    id: 2,
    leftText:
      "She visits her grandparents ___ because they’re only home at the beginning of the week.",
    correct: "on-mondays",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "She visits her grandparents on Mondays because they’re only home at the beginning of the week.",
  },
  {
    id: 3,
    leftText:
      "We play long board-game sessions ___ because we have more free time.",
    correct: "every-weekend",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "We play long board-game sessions every weekend because we have more free time.",
  },
  {
    id: 4,
    leftText: "I watch one episode of my favorite show ___ before I go to bed.",
    correct: "in-the-evening",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "I watch one episode of my favorite show in the evening before I go to bed.",
  },
  {
    id: 5,
    leftText:
      "They have a team meeting ___ to plan the projects for the following month.",
    correct: "every-month",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "They have a team meeting every month to plan the projects for the following month.",
  },
  {
    id: 6,
    leftText: "The shop closes ___ because the owner takes a lunch break.",
    correct: "at-noon",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "The shop closes at noon because the owner takes a lunch break.",
  },
  {
    id: 7,
    leftText: "I drink my coffee at 7 o’clock ___ .",
    correct: "every-morning",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "I drink my coffee at 7 o’clock every morning.",
  },
  {
    id: 8,
    leftText:
      "She practices the piano ___ because she doesn't have a lot of homework for Thursday.",
    correct: "every-wednesday",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "She practices the piano every Wednesday because she doesn't have a lot of homework for Thursday.",
  },
  {
    id: 9,
    leftText: "We go to the swimming pool ___ because we don't have classes.",
    correct: "every-saturday",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "We go to the swimming pool every Saturday because we don't have classes.",
  },
  {
    id: 10,
    leftText: "The library is crowded ___ after students finish school.",
    correct: "in-the-afternoon",
    options: TIME_EXPRESSION_OPTIONS,
    tts: "The library is crowded in the afternoon after students finish school.",
  },
];

const TIME_EXPRESSIONS_ROOM_1_GLOSSARY = [
  // Time expressions
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
  { tts: "every month", word: "every month", meaning: "în fiecare lună" },
  {
    tts: "every weekend",
    word: "every weekend",
    meaning: "în fiecare weekend",
  },
  {
    tts: "every Wednesday",
    word: "every Wednesday",
    meaning: "în fiecare miercuri",
  },
  {
    tts: "every Saturday",
    word: "every Saturday",
    meaning: "în fiecare sâmbătă",
  },
  {
    tts: "on Mondays",
    word: "on Mondays",
    meaning: "lunea / în zilele de luni",
  },
  { tts: "in the morning", word: "in the morning", meaning: "dimineața" },
  { tts: "in the afternoon", word: "in the afternoon", meaning: "după-amiaza" },
  { tts: "in the evening", word: "in the evening", meaning: "seara" },
  { tts: "at noon", word: "at noon", meaning: "la prânz" },

  // Actions from exercises
  { tts: "feed the dog", word: "feed the dog", meaning: "a hrăni câinele" },
  {
    tts: "visit her grandparents",
    word: "visit her grandparents",
    meaning: "a-și vizita bunicii",
  },
  {
    tts: "play board games",
    word: "play board games",
    meaning: "a juca jocuri de societate",
  },
  {
    tts: "watch one episode",
    word: "watch one episode",
    meaning: "a urmări un episod",
  },
  {
    tts: "have a team meeting",
    word: "have a team meeting",
    meaning: "a avea o ședință de echipă",
  },
  {
    tts: "the shop closes",
    word: "the shop closes",
    meaning: "magazinul se închide",
  },
  {
    tts: "drink my coffee",
    word: "drink my coffee",
    meaning: "a-mi bea cafeaua",
  },
  {
    tts: "practice the piano",
    word: "practice the piano",
    meaning: "a exersa la pian",
  },
  {
    tts: "go to the swimming pool",
    word: "go to the swimming pool",
    meaning: "a merge la piscină",
  },
  {
    tts: "the library is crowded",
    word: "the library is crowded",
    meaning: "biblioteca este aglomerată",
  },

  // NEW supporting vocabulary added in rewritten sentences
  {
    tts: "right after waking up",
    word: "right after waking up",
    meaning: "imediat după ce mă trezesc",
  },
  { tts: "at 7 o'clock", word: "at 7 o'clock", meaning: "la ora 7" },
  {
    tts: "before I go to bed",
    word: "before I go to bed",
    meaning: "înainte să merg la culcare",
  },
  {
    tts: "at the beginning of the week",
    word: "at the beginning of the week",
    meaning: "la începutul săptămânii",
  },
  {
    tts: "for the following month",
    word: "for the following month",
    meaning: "pentru luna următoare",
  },
  { tts: "lunch break", word: "lunch break", meaning: "pauză de prânz" },
  {
    tts: "homework for Thursday",
    word: "homework for Thursday",
    meaning: "tema pentru joi",
  },
  {
    tts: "we don't have classes",
    word: "we don't have classes",
    meaning: "nu avem ore / lecții",
  },
  {
    tts: "after students finish school",
    word: "after students finish school",
    meaning: "după ce elevii termină școala",
  },
];

// Room 2
const FREQUENCY_ADVERB_OPTIONS = [
  { value: "always", label: "always" },
  { value: "usually", label: "usually" },
  { value: "often", label: "often" },
  { value: "sometimes", label: "sometimes" },
  { value: "rarely", label: "rarely" },
  { value: "never", label: "never" },
];

const TIME_EXPRESSIONS_ROOM_2_EXERCISES = [
  {
    id: 1,
    leftText: "100% – ________",
    correct: "always",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "One hundred percent: always.",
  },
  {
    id: 2,
    leftText: "~75% – ________",
    correct: "usually",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "Seventy-five percent: usually.",
  },
  {
    id: 3,
    leftText: "~50% – ________",
    correct: "often",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "Fifty percent: often.",
  },
  {
    id: 4,
    leftText: "~25% – ________",
    correct: "sometimes",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "Twenty-five percent: sometimes.",
  },
  {
    id: 5,
    leftText: "~10% – ________",
    correct: "rarely",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "Ten percent: rarely.",
  },
  {
    id: 6,
    leftText: "0% – ________",
    correct: "never",
    options: FREQUENCY_ADVERB_OPTIONS,
    tts: "Zero percent: never.",
  },
];

const TIME_EXPRESSIONS_ROOM_2_GLOSSARY = [
  { tts: "always", word: "always", meaning: "întotdeauna (cam 100% din timp)" },
  {
    tts: "usually",
    word: "usually",
    meaning: "de obicei (aprox. 75% din timp)",
  },
  {
    tts: "often",
    word: "often",
    meaning: "des / adesea (aprox. 50% din timp)",
  },
  {
    tts: "sometimes",
    word: "sometimes",
    meaning: "uneori (aprox. 25% din timp)",
  },
  { tts: "rarely", word: "rarely", meaning: "rar (aprox. 10% din timp)" },
  { tts: "never", word: "never", meaning: "niciodată (0% din timp)" },
];

// Room 3
const TIME_EXPRESSIONS_ROOM_3_EXERCISES = [
  {
    id: 1,
    prompt: "Alege varianta corectă.",
    tts: "She usually eats breakfast at 7 a.m.",
    options: [
      {
        value: "She usually eats breakfast at 7 a.m.",
        label: "She usually eats breakfast at 7 a.m.",
      },
      {
        value: "She eats usually breakfast at 7 a.m.",
        label: "She eats usually breakfast at 7 a.m.",
      },
      {
        value: "She eats breakfast usually at 7 a.m.",
        label: "She eats breakfast usually at 7 a.m.",
      },
    ],
    correct: "She usually eats breakfast at 7 a.m.",
  },
  {
    id: 2,
    prompt: "Alege varianta corectă.",
    tts: "We often go to the cinema at the weekend.",
    options: [
      {
        value: "We go often to the cinema at the weekend.",
        label: "We go often to the cinema at the weekend.",
      },
      {
        value: "We go to the cinema often at the weekend.",
        label: "We go to the cinema often at the weekend.",
      },
      {
        value: "We often go to the cinema at the weekend.",
        label: "We often go to the cinema at the weekend.",
      },
    ],
    correct: "We often go to the cinema at the weekend.",
  },
  {
    id: 3,
    prompt: "Alege varianta corectă.",
    tts: "I never drink coffee in the afternoon.",
    options: [
      {
        value: "I drink never coffee in the afternoon.",
        label: "I drink never coffee in the afternoon.",
      },
      {
        value: "I never drink coffee in the afternoon.",
        label: "I never drink coffee in the afternoon.",
      },
      {
        value: "I drink coffee never in the afternoon.",
        label: "I drink coffee never in the afternoon.",
      },
    ],
    correct: "I never drink coffee in the afternoon.",
  },
  {
    id: 4,
    prompt: "Alege varianta corectă.",
    tts: "They are always tired on Mondays.",
    options: [
      {
        value: "They are always tired on Mondays.",
        label: "They are always tired on Mondays.",
      },
      {
        value: "They always are tired on Mondays.",
        label: "They always are tired on Mondays.",
      },
      {
        value: "They are tired always on Mondays.",
        label: "They are tired always on Mondays.",
      },
    ],
    correct: "They are always tired on Mondays.",
  },
  {
    id: 5,
    prompt: "Alege varianta corectă.",
    tts: "He sometimes plays tennis in the evenings.",
    options: [
      {
        value: "He plays sometimes tennis in the evenings.",
        label: "He plays sometimes tennis in the evenings.",
      },
      {
        value: "He plays tennis sometimes in the evenings.",
        label: "He plays tennis sometimes in the evenings.",
      },
      {
        value: "He sometimes plays tennis in the evenings.",
        label: "He sometimes plays tennis in the evenings.",
      },
    ],
    correct: "He sometimes plays tennis in the evenings.",
  },
  {
    id: 6,
    prompt: "Alege varianta corectă.",
    tts: "My parents rarely watch TV at night.",
    options: [
      {
        value: "My parents watch rarely TV at night.",
        label: "My parents watch rarely TV at night.",
      },
      {
        value: "My parents rarely watch TV at night.",
        label: "My parents rarely watch TV at night.",
      },
      {
        value: "My parents watch TV rarely at night.",
        label: "My parents watch TV rarely at night.",
      },
    ],
    correct: "My parents rarely watch TV at night.",
  },
  {
    id: 7,
    prompt: "Alege varianta corectă.",
    tts: "The shop opens at 9 a.m. every day.",
    options: [
      {
        value: "The shop opens at 9 a.m. every day.",
        label: "The shop opens at 9 a.m. every day.",
      },
      {
        value: "The shop opens every day at 9 a.m.",
        label: "The shop opens every day at 9 a.m.",
      },
      {
        value: "Every day the shop opens at 9 a.m.",
        label: "Every day the shop opens at 9 a.m.",
      },
    ],
    correct: "The shop opens at 9 a.m. every day.",
  },
  {
    id: 8,
    prompt: "Alege varianta corectă.",
    tts: "I always do my homework after school.",
    options: [
      {
        value: "I do always my homework after school.",
        label: "I do always my homework after school.",
      },
      {
        value: "I always do my homework after school.",
        label: "I always do my homework after school.",
      },
      {
        value: "I do my homework always after school.",
        label: "I do my homework always after school.",
      },
    ],
    correct: "I always do my homework after school.",
  },
  {
    id: 9,
    prompt: "Alege varianta corectă.",
    tts: "We sometimes play football on Sundays.",
    options: [
      {
        value: "We play sometimes football on Sundays.",
        label: "We play sometimes football on Sundays.",
      },
      {
        value: "We sometimes play football on Sundays.",
        label: "We sometimes play football on Sundays.",
      },
      {
        value: "We play football sometimes on Sundays.",
        label: "We play football sometimes on Sundays.",
      },
    ],
    correct: "We sometimes play football on Sundays.",
  },
  {
    id: 10,
    prompt: "Alege varianta corectă.",
    tts: "He never goes to bed late.",
    options: [
      {
        value: "He goes never to bed late.",
        label: "He goes never to bed late.",
      },
      {
        value: "He never goes to bed late.",
        label: "He never goes to bed late.",
      },
      {
        value: "He goes to bed never late.",
        label: "He goes to bed never late.",
      },
    ],
    correct: "He never goes to bed late.",
  },
];

const TIME_EXPRESSIONS_ROOM_3_GLOSSARY = [
  { tts: "always", word: "always", meaning: "mereu" },
  { tts: "usually", word: "usually", meaning: "de obicei" },
  { tts: "often", word: "often", meaning: "adesea" },
  { tts: "sometimes", word: "sometimes", meaning: "uneori" },
  { tts: "never", word: "never", meaning: "niciodată" },
  { tts: "rarely", word: "rarely", meaning: "rar" },
  { tts: "at the weekend", word: "at the weekend", meaning: "în weekend" },
  { tts: "in the afternoon", word: "in the afternoon", meaning: "după-amiaza" },
  { tts: "on Mondays", word: "on Mondays", meaning: "lunea" },
  { tts: "in the evenings", word: "in the evenings", meaning: "seara" },
  { tts: "at night", word: "at night", meaning: "noaptea" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "after school", word: "after school", meaning: "după școală" },
  {
    tts: "on Sundays",
    word: "on Sundays",
    meaning: "duminica / în zilele de duminică",
  },
];

// Room 4
const TIME_EXPRESSIONS_ROOM_4_EXERCISES = [
  {
    id: 1,
    before: "Do you",
    between: "eat breakfast at home",
    after: "?",
    word: "usually",
    correct: "slot-1",
    tts: "Do you usually eat breakfast at home ?",
  },
  {
    id: 2,
    before: "She doesn’t",
    between: "watch",
    after: "TV in the evening.",
    word: "often",
    correct: "slot-1",
    tts: "She doesn’t often watch TV in the evening.",
  },
  {
    id: 3,
    before: "Are",
    between: "they",
    after: "on time for class?",
    word: "always",
    correct: "slot-2",
    tts: "Are they always on time for class?",
  },
  {
    id: 4,
    before: "He isn’t",
    between: "late for work",
    after: ".",
    word: "usually",
    correct: "slot-1",
    tts: "He isn’t usually late for work .",
  },
  {
    id: 5,
    before: "Does she",
    between: "cook",
    after: "dinner?",
    word: "sometimes",
    correct: "slot-1",
    tts: "Does she sometimes cook dinner?",
  },
  {
    id: 6,
    before: "",
    between: "We don’t",
    after: "go to the cinema during the week.",
    word: "usually",
    correct: "slot-2",
    tts: "We don’t usually go to the cinema during the week.",
  },
  {
    id: 7,
    before: "Is he",
    between: "tired after training",
    after: "?",
    word: "often",
    correct: "slot-1",
    tts: "Is he often tired after training ?",
  },
  {
    id: 8,
    before: "They",
    between: "aren’t",
    after: "ready on Mondays.",
    word: "always",
    correct: "slot-2",
    tts: "They aren’t always ready on Mondays.",
  },
  {
    id: 9,
    before: "Do you",
    between: "miss school",
    after: "?",
    word: "rarely",
    correct: "slot-1",
    tts: "Do you rarely miss school ?",
  },
  {
    id: 10,
    before: "She doesn’t",
    between: "go",
    after: "out on weekdays.",
    word: "always",
    correct: "slot-1",
    tts: "She doesn’t always go out on weekdays.",
  },
];

const TIME_EXPRESSIONS_ROOM_4_GLOSSARY = [
  { tts: "always", word: "always", meaning: "întotdeauna" },
  { tts: "usually", word: "usually", meaning: "de obicei" },
  { tts: "often", word: "often", meaning: "des / adesea" },
  { tts: "sometimes", word: "sometimes", meaning: "uneori" },
  { tts: "rarely", word: "rarely", meaning: "rar" },
  {
    tts: "eat breakfast at home",
    word: "eat breakfast at home",
    meaning: "a lua micul dejun acasă",
  },
  {
    tts: "watch TV in the evening",
    word: "watch TV in the evening",
    meaning: "a se uita la televizor seara",
  },
  {
    tts: "be tired after training",
    word: "be tired after training",
    meaning: "a fi obosit după antrenament",
  },
  { tts: "cook dinner", word: "cook dinner", meaning: "a găti cina" },
  {
    tts: "go to the cinema during the week",
    word: "go to the cinema during the week",
    meaning: "a merge la cinema în timpul săptămânii",
  },
  {
    tts: "be ready on Mondays",
    word: "be ready on Mondays",
    meaning: "a fi pregătit(ă) lunea",
  },
  { tts: "miss school", word: "miss school", meaning: "a lipsi de la școală" },
  {
    tts: "go out on weekdays",
    word: "go out on weekdays",
    meaning: "a ieși în oraș în timpul săptămânii",
  },
];

// Room 5
const TIME_EXPRESSIONS_ROOM_5_EXERCISES = [
  {
    id: 1,
    question: "How often do you brush your teeth?",
    correct: "I brush my teeth twice a day.",
    tts: "I brush my teeth twice a day.",
    wordBank: ["I", "brush", "my", "teeth", "twice", "a", "day."],
  },
  {
    id: 2,
    question: "How often do you go to the cinema?",
    correct: "I go to the cinema once a month.",
    tts: "I go to the cinema once a month.",
    wordBank: ["I", "go", "to", "the", "cinema", "once", "a", "month."],
  },
  {
    id: 3,
    question: "How often do you tidy your room?",
    correct: "I tidy my room every weekend.",
    tts: "I tidy my room every weekend.",
    wordBank: ["I", "tidy", "my", "room", "every", "weekend."],
  },
  {
    id: 4,
    question: "How often do you play computer games?",
    correct: "I play computer games every day.",
    tts: "I play computer games every day.",
    wordBank: ["I", "play", "computer", "games", "every", "day."],
  },
  {
    id: 5,
    question: "How often do you visit your grandparents?",
    correct: "I visit my grandparents every Sunday.",
    tts: "I visit my grandparents every Sunday.",
    wordBank: ["I", "visit", "my", "grandparents", "every", "Sunday."],
  },
  {
    id: 6,
    question: "How often do you eat fast food?",
    correct: "I eat fast food once a week.",
    tts: "I eat fast food once a week.",
    wordBank: ["I", "eat", "fast", "food", "once", "a", "week."],
  },
  {
    id: 7,
    question: "How often do you go swimming?",
    correct: "I go swimming twice a week.",
    tts: "I go swimming twice a week.",
    wordBank: ["I", "go", "swimming", "twice", "a", "week."],
  },
  {
    id: 8,
    question: "How often do you read books?",
    correct: "I read books every evening.",
    tts: "I read books every evening.",
    wordBank: ["I", "read", "books", "every", "evening."],
  },
  {
    id: 9,
    question: "How often do you listen to music?",
    correct: "I listen to music every day.",
    tts: "I listen to music every day.",
    wordBank: ["I", "listen", "to", "music", "every", "day."],
  },
  {
    id: 10,
    question: "How often do you drink coffee?",
    correct: "I drink coffee every morning.",
    tts: "I drink coffee every morning.",
    wordBank: ["I", "drink", "coffee", "every", "morning."],
  },
];

const TIME_EXPRESSIONS_ROOM_5_GLOSSARY = [
  { tts: "brush", word: "brush", meaning: "a-și peria (dinții)" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "tidy", word: "tidy", meaning: "a face ordine (în cameră)" },
  { tts: "play", word: "play", meaning: "a se juca" },
  { tts: "visit", word: "visit", meaning: "a vizita" },
  { tts: "eat", word: "eat", meaning: "a mânca" },
  { tts: "swim", word: "swim", meaning: "a înota" },
  { tts: "read", word: "read", meaning: "a citi" },
  { tts: "listen", word: "listen", meaning: "a asculta" },
  { tts: "twice a day", word: "twice a day", meaning: "de două ori pe zi" },
  { tts: "once a month", word: "once a month", meaning: "o dată pe lună" },
  {
    tts: "every weekend",
    word: "every weekend",
    meaning: "în fiecare weekend",
  },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "every Sunday", word: "every Sunday", meaning: "în fiecare duminică" },
  { tts: "once a week", word: "once a week", meaning: "o dată pe săptămână" },
  {
    tts: "twice a week",
    word: "twice a week",
    meaning: "de două ori pe săptămână",
  },
  { tts: "every evening", word: "every evening", meaning: "în fiecare seară" },
  {
    tts: "every Saturday",
    word: "every Saturday",
    meaning: "în fiecare sâmbătă",
  },
];

// Room 6
const TIME_EXPRESSIONS_ROOM_6_EXERCISES = [
  {
    id: 1,
    before: "I",
    after: "get up at seven o'clock.",
    options: [
      { value: "always", label: "always" },
      { value: "usually", label: "usually" },
      { value: "often", label: "often" },
    ],
    defaultAdverb: "usually",
    correct: "usually",
  },
  {
    id: 2,
    before: "She",
    after: "takes the bus to school.",
    options: [
      { value: "usually", label: "usually" },
      { value: "often", label: "often" },
      { value: "sometimes", label: "sometimes" },
    ],
    defaultAdverb: "usually",
    correct: "usually",
  },
  {
    id: 3,
    before: "We",
    after: "eat breakfast together.",
    options: [
      { value: "often", label: "often" },
      { value: "sometimes", label: "sometimes" },
      { value: "rarely", label: "rarely" },
    ],
    defaultAdverb: "often",
    correct: "often",
  },
  {
    id: 4,
    before: "They",
    after: "do their homework after school.",
    options: [
      { value: "sometimes", label: "sometimes" },
      { value: "rarely", label: "rarely" },
      { value: "never", label: "never" },
    ],
    defaultAdverb: "sometimes",
    correct: "sometimes",
  },
  {
    id: 5,
    before: "My dad",
    after: "reads the newspaper in the morning.",
    options: [
      { value: "always", label: "always" },
      { value: "usually", label: "usually" },
      { value: "sometimes", label: "sometimes" },
    ],
    defaultAdverb: "usually",
    correct: "usually",
  },
  {
    id: 6,
    before: "My mom",
    after: "drinks coffee in the evening.",
    options: [
      { value: "often", label: "often" },
      { value: "sometimes", label: "sometimes" },
      { value: "never", label: "never" },
    ],
    defaultAdverb: "often",
    correct: "often",
  },
  {
    id: 7,
    before: "I",
    after: "play computer games in the evening.",
    options: [
      { value: "often", label: "often" },
      { value: "rarely", label: "rarely" },
      { value: "seldom", label: "seldom" },
    ],
    defaultAdverb: "often",
    correct: "often",
  },
  {
    id: 8,
    before: "Our teacher",
    after: "checks our homework.",
    options: [
      { value: "always", label: "always" },
      { value: "usually", label: "usually" },
      { value: "never", label: "never" },
    ],
    defaultAdverb: "usually",
    correct: "usually",
  },
  {
    id: 9,
    before: "My friends",
    after: "go to the cinema on Fridays.",
    options: [
      { value: "sometimes", label: "sometimes" },
      { value: "rarely", label: "rarely" },
      { value: "hardly ever", label: "hardly ever" },
    ],
    defaultAdverb: "sometimes",
    correct: "sometimes",
  },
  {
    id: 10,
    before: "We",
    after: "walk to school.",
    options: [
      { value: "usually", label: "usually" },
      { value: "often", label: "often" },
      { value: "sometimes", label: "sometimes" },
    ],
    defaultAdverb: "usually",
    correct: "usually",
  },
];

const TIME_EXPRESSIONS_ROOM_6_GLOSSARY = [
  { tts: "always", word: "always", meaning: "întotdeauna (100%)" },
  { tts: "usually", word: "usually", meaning: "de obicei (80–90%)" },
  { tts: "often", word: "often", meaning: "des (60–70%)" },
  { tts: "sometimes", word: "sometimes", meaning: "uneori (30–40%)" },
  { tts: "rarely", word: "rarely", meaning: "rar (10–20%)" },
  { tts: "seldom", word: "seldom", meaning: "rar (aproape niciodată)" },
  { tts: "hardly ever", word: "hardly ever", meaning: "aproape niciodată" },
  { tts: "never", word: "never", meaning: "niciodată (0%)" },
];

function timeExpressionsRoom6VerifyTransform({ answers, exercises }) {
  const customAnswers = {};
  for (const ex of exercises) {
    const raw = answers[ex.id];
    const hasAnswer = raw != null && String(raw).trim() !== "";
    customAnswers[ex.id] = hasAnswer ? ex.correct || raw : "";
  }
  return customAnswers;
}

// Room 7
const TIME_EXPRESSIONS_ROOM_7_EXERCISES = [
  {
    id: 1,
    native: "Eu beau cafea în fiecare dimineață.",
    hint: "Gândește-te la o acțiune de rutină dimineața, în Present Simple, și la o expresie de timp de tipul every morning.",
    correct: "i drink coffee every morning.",
    tts: null,
  },
  {
    id: 2,
    native: "El merge la sală de două ori pe săptămână.",
    hint: "Ai grijă la forma de persoana a III-a singular și la o expresie de frecvență de tipul twice a week.",
    correct: "he goes to the gym twice a week.",
    tts: null,
  },
  {
    id: 3,
    native: "Noi ne vizităm bunicii în fiecare duminică.",
    hint: "Folosește un verb de tip „a vizita” și o expresie de timp de genul every Sunday.",
    correct: "we visit our grandparents every sunday.",
    tts: null,
  },
  {
    id: 4,
    native: "Ei rareori se uită la televizor seara.",
    hint: "Caută un adverb de frecvență care înseamnă „rareori” și o expresie de timp pentru „seara” – de exemplu, in the evening.",
    correct: "they rarely watch tv in the evening.",
    tts: null,
  },
  {
    id: 5,
    native: "Trenul pleacă întotdeauna la 7 fix.",
    hint: "Amintește-ți că, în timetables, un adverb de frecvență ca always stă de obicei între subiect și verb.",
    correct: "the train always leaves at seven o'clock.",
    tts: null,
  },
  {
    id: 6,
    native: "Școala începe la ora 8 în fiecare zi.",
    hint: "Este un orar fix: folosește Present Simple pentru „school” și combină ora cu o expresie de tipul every day.",
    correct: "school starts at 8 o'clock every day.",
    tts: null,
  },
  {
    id: 7,
    native: "Ea de obicei își face tema după cină.",
    hint: "Ai nevoie de un adverb de frecvență care înseamnă „de obicei” și de o structură cu „homework” după cină.",
    correct: "she usually does her homework after dinner.",
    tts: null,
  },
  {
    id: 8,
    native: "Eu câteodată merg în parc după școală.",
    hint: "Caută un adverb de frecvență pentru „uneori” și o expresie de timp legată de școală, de tipul after school.",
    correct: "i sometimes go to the park after school.",
    tts: null,
  },
  {
    id: 9,
    native: "Ei aproape niciodată nu mănâncă fast food.",
    hint: "Folosește un adverb compus pentru „aproape niciodată” înaintea verbului „a mânca” în Present Simple.",
    correct: "they hardly ever eat fast food.",
    tts: null,
  },
  {
    id: 10,
    native: "Noi în fiecare vineri ne uităm la un film.",
    hint: "Gândește-te la o rutină cu un film și la o expresie de timp de tipul every Friday.",
    correct: "we watch a film every friday.",
    tts: null,
  },
];

const TIME_EXPRESSIONS_ROOM_7_GLOSSARY = [
  { tts: "drink", word: "drink", meaning: "a bea" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "visit", word: "visit", meaning: "a vizita" },
  { tts: "watch", word: "watch", meaning: "a se uita (la TV / la un film)" },
  { tts: "leave", word: "leave", meaning: "a pleca" },
  { tts: "start", word: "start", meaning: "a începe" },
  { tts: "do", word: "do", meaning: "a face / a-și face" },
  { tts: "eat", word: "eat", meaning: "a mânca" },
  { tts: "coffee", word: "coffee", meaning: "cafea" },
  { tts: "gym", word: "gym", meaning: "sală de sport" },
  { tts: "grandparents", word: "grandparents", meaning: "bunici" },
  { tts: "tv", word: "TV", meaning: "televizor" },
  { tts: "train", word: "train", meaning: "tren" },
  { tts: "school", word: "school", meaning: "școală" },
  { tts: "homework", word: "homework", meaning: "temă / teme" },
  { tts: "park", word: "park", meaning: "parc" },
  { tts: "fast food", word: "fast food", meaning: "mâncare tip fast food" },
  { tts: "film", word: "film", meaning: "film" },
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
  {
    tts: "twice a week",
    word: "twice a week",
    meaning: "de două ori pe săptămână",
  },
  { tts: "every Sunday", word: "every Sunday", meaning: "în fiecare duminică" },
  { tts: "rarely", word: "rarely", meaning: "rar" },
  { tts: "in the evening", word: "in the evening", meaning: "seara" },
  { tts: "always", word: "always", meaning: "întotdeauna" },
  {
    tts: "at seven o'clock",
    word: "at seven o'clock",
    meaning: "la ora 7 fix",
  },
  { tts: "at eight o'clock", word: "at eight o'clock", meaning: "la ora 8" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "usually", word: "usually", meaning: "de obicei" },
  { tts: "after dinner", word: "after dinner", meaning: "după cină" },
  { tts: "sometimes", word: "sometimes", meaning: "uneori" },
  { tts: "after school", word: "after school", meaning: "după școală" },
  { tts: "hardly ever", word: "hardly ever", meaning: "aproape niciodată" },
  { tts: "every Friday", word: "every Friday", meaning: "în fiecare vineri" },
];

export const PS_TIME_EXPRESSIONS_ROOMS = [
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 1,
    exercises: TIME_EXPRESSIONS_ROOM_1_EXERCISES,
    lexHints: timeExpressionsLexHints.room1,
    ExerciseListComponent: MatchingPairsExerciseList,
    exerciseListProps: { showIndex: true, testIdPrefix: "ps-te-room1" },
    cardIntro: (
      <>
        <h2 className="card-title">
          Potrivește fiecare propoziție cu expresia de timp corectă.
        </h2>
      </>
    ),
    errorText:
      "Mai aruncă o privire la propozițiile marcate cu roșu și verifică dacă activitatea se potrivește cu momentul din expresia de timp.",
    successText:
      "Super! Ai potrivit corect toate propozițiile cu expresiile de timp.",
    dictionaryDescription:
      "Cuvintele și expresiile de mai jos apar în propozițiile din această cameră. Dacă nu ești sigur/ă ce înseamnă o expresie de timp, deschide mini-dicționarul.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_1_GLOSSARY,
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 2,
    exercises: TIME_EXPRESSIONS_ROOM_2_EXERCISES,
    lexHints: timeExpressionsLexHints.room2,
    ExerciseListComponent: MatchingPairsExerciseList,
    cardIntro: (
      <>
        <h2 className="card-title">
          Potrivește fiecare procent cu adverbul de frecvență corect.
        </h2>
      </>
    ),
    dictionaryDescription:
      "Aceste adverbe de frecvență apar în exercițiu. Le poți asculta și le poți lega de procentul de pe partea stângă.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_2_GLOSSARY,
    errorText:
      "Verifică din nou scara de la 100% la 0% și gândește-te dacă adverbul ales chiar exprimă cât de des se întâmplă acțiunea.",
    successText:
      "Super! Ai potrivit corect procentele cu adverbele de frecvență.",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 3,
    exercises: TIME_EXPRESSIONS_ROOM_3_EXERCISES,
    lexHints: timeExpressionsLexHints.room3,
    ExerciseListComponent: McqExerciseList,
    exerciseListProps: { showIndex: true },
    // Room 3 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Bifează propoziția în care adverbul de frecvență este în locul
          potrivit
        </h2>
      </>
    ),
    dictionaryDescription:
      "Aceste propoziții folosesc adverbe de frecvență și expresii de timp. Ascultă cuvintele din listă și leagă-le de propozițiile din exercițiu.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_3_GLOSSARY,
    errorText:
      "Mai ai câteva propoziții de corectat – uită-te la cele marcate cu roșu și verifică unde stă adverbul.",
    successText:
      "Super! Ai ales corect ordinea adverbelor de frecvență în propoziții.",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 4,
    exercises: TIME_EXPRESSIONS_ROOM_4_EXERCISES,
    lexHints: timeExpressionsLexHints.room4,
    ExerciseListComponent: AdverbPositionExerciseList,
    exerciseListProps: { showIndex: true },
    // Room 4 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Alege locul corect pentru adverbul de frecvență în fiecare propoziție.
        </h2>
      </>
    ),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Ascultă adverbele de frecvență și expresiile din propoziții, apoi folosește-le pentru a alege poziția corectă pentru fiecare adverb.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_4_GLOSSARY,
    errorText:
      "Uită-te din nou la regulile cu do / does, do not / does not și am / is / are din teoria despre adverbe de frecvență și gândește-te unde sună mai natural adverbul în propoziție.",
    successText:
      "Super! Ai ales corect poziția adverbelor de frecvență în toate propozițiile.",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 5,
    exercises: TIME_EXPRESSIONS_ROOM_5_EXERCISES,
    lexHints: timeExpressionsLexHints.room5,
    ExerciseListComponent: SentenceBuilderExerciseList,
    exerciseListProps: { showIndex: true },
    // Room 5 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Construiește răspunsuri complete la întrebările cu How often...?
          folosind cuvintele din bancă.
        </h2>
      </>
    ),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Ascultă verbele și expresiile de timp, apoi folosește-le ca să construiești răspunsuri complete la întrebările cu How often...?",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_5_GLOSSARY,
    errorText:
      "Mai ai câteva propoziții de ajustat – verifică ordinea cuvintelor și poziția expresiei de timp în răspuns.",
    successText:
      "Super! Ai construit corect toate răspunsurile cu How often...? și expresii de timp.",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 6,
    exercises: TIME_EXPRESSIONS_ROOM_6_EXERCISES,
    lexHints: timeExpressionsLexHints.room6,
    ExerciseListComponent: FrequencyAdverbExerciseList,
    exerciseListProps: { showIndex: true },
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează propozițiile alegând un adverb de frecvență care se
          potrivește cu viața ta de zi cu zi. <br></br>
          Toate variantele sunt corecte gramatical, important este să fie
          adevărate pentru tine.
        </h2>
      </>
    ),
    verifyTransform: timeExpressionsRoom6VerifyTransform,
    // Room 6 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    showResultSummary: false,
    afterBody: ({ lastResult }) =>
      lastResult ? (
        <section className="card card-subtle">
          <h3 className="card-title-sm">Rezultatul tău</h3>
          <p>
            Ai completat toate propozițiile în funcție de rutina ta. Poți să
            revii oricând și să alegi alte variante dacă rutina ta se schimbă.
            🙂
          </p>
        </section>
      ) : null,
    dictionaryDescription:
      "Ascultă adverbele de frecvență și gândește-te la exemple din viața ta pentru fiecare.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_6_GLOSSARY,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Time Expressions",
    roomNumber: 7,
    exercises: TIME_EXPRESSIONS_ROOM_7_EXERCISES,
    lexHints: timeExpressionsLexHints.room7,
    ExerciseListComponent: RuneTranslationExerciseList,
    exerciseListProps: { showIndex: true },
    cardIntro: (
      <>
        <h2 className="card-title">
          Tradu propozițiile din română în engleză. Folosește dicționarul pentru
          a găsi cuvintele și expresiile potrivite.{" "}
        </h2>
        <p className="card-description">
          Folosește rune magice pentru a primi un indiciu, a scrie răspunsul sau
          a verifica propoziția, apoi apasă{" "}
          <strong>Verifică răspunsurile</strong> pentru a obține scorul oficial.
        </p>
      </>
    ),
    // Room 7 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    nextTo: null,
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea și construiește propozițiile tale în Present Simple.",
    dictionaryItems: TIME_EXPRESSIONS_ROOM_7_GLOSSARY,
    afterBody: ({ roomState }) =>
      roomState.passed ? (
        <section className="card section-complete-card">
          <h2 className="card-title">
            Bravo! Ai terminat toate camerele din secțiunea Time Expressions –
            Present Simple. 🎉
          </h2>
          <p className="card-description">
            Ai parcurs toată ruta pentru expresiile de timp la Present Simple.
            Mergi la hartă ca să vezi progresul cheilor și cât de aproape ești
            de camera finală.
          </p>
          <div className="buttons">
            <Link to={psMapPath()} className="btn btn-outline">
              🏁 Înapoi la hartă
            </Link>
          </div>
        </section>
      ) : null,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
];

// Dev-only fail-fast validation (no runtime / UX changes in production)
if (import.meta.env.DEV) {
  validateRoomRegistry(PS_TIME_EXPRESSIONS_ROOMS, {
    registryName: "PS_TIME_EXPRESSIONS_ROOMS",
    sectionId: SECTION_ID,
    expectedRoomNumbers: [1, 2, 3, 4, 5, 6, 7],
  });
}

export function getPsTimeExpressionsRoomDef(roomNumber) {
  const idx = Number.isFinite(roomNumber) ? roomNumber - 1 : -1;
  if (idx < 0 || idx >= PS_TIME_EXPRESSIONS_ROOMS.length) return null;
  return PS_TIME_EXPRESSIONS_ROOMS[idx];
}

export function getPsTimeExpressionsExercises(roomNumber) {
  const def = getPsTimeExpressionsRoomDef(roomNumber);
  return def?.exercises ?? [];
}

const PS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {
  1: TIME_EXPRESSIONS_ROOM_1_GLOSSARY,
  2: TIME_EXPRESSIONS_ROOM_2_GLOSSARY,
  3: TIME_EXPRESSIONS_ROOM_3_GLOSSARY,
  4: TIME_EXPRESSIONS_ROOM_4_GLOSSARY,
  5: TIME_EXPRESSIONS_ROOM_5_GLOSSARY,
  6: TIME_EXPRESSIONS_ROOM_6_GLOSSARY,
  7: TIME_EXPRESSIONS_ROOM_7_GLOSSARY,
};

export function getPsTimeExpressionsGlossaryItems(roomNumber) {
  const items = PS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber];
  return Array.isArray(items) ? items : [];
}
