// Present Simple > Affirmative content registry
// Sprint G5: move *content* (exercises, dictionaries, intros, messages) out of page files.
//
// Guardrails:
// - NO UX / gating / keys changes
// - keep templates intact (PsRoomTemplateV1 renders the same)

import React from "react";
import { Link } from "react-router-dom";

import { psMapPath, psRoomPath } from "../ps-paths.js";

import TextInputExerciseList from "../../../shared/exercises/TextInputExerciseList.jsx";
import { GapSentenceExerciseList } from "../../../shared/exercises/GapSentenceExerciseList.jsx";
import { McqExerciseList } from "../../../shared/exercises/McqExerciseList.jsx";
import { TextareaExerciseList } from "../../../shared/exercises/TextareaExerciseList.jsx";

import { presentSimpleAffirmativeLexHints as affirmativeLexHints } from "../../lex-hints/present-simple/index.js";

import { validateRoomRegistry } from "../../../core/registry/validate-room-registry.js";

const SECTION_ID = "affirmative";

// -------------------- Room 1 --------------------
const AFF_ROOM_1_EXERCISES = [
  { id: 1, prompt: "I join → he ", correct: "joins", tts: "I join, he joins." },
  { id: 2, prompt: "I like → he ", correct: "likes", tts: "I like, he likes." },
  {
    id: 3,
    prompt: "I kiss → he ",
    correct: "kisses",
    tts: "I kiss, he kisses.",
  },
  { id: 4, prompt: "I fly → he ", correct: "flies", tts: "I fly, he flies." },
  {
    id: 5,
    prompt: "I watch → he ",
    correct: "watches",
    tts: "I watch, he watches.",
  },
  {
    id: 6,
    prompt: "I enjoy → he ",
    correct: "enjoys",
    tts: "I enjoy, he enjoys.",
  },
  { id: 7, prompt: "I talk → he ", correct: "talks", tts: "I talk, he talks." },
  { id: 8, prompt: "I go → he ", correct: "goes", tts: "I go, he goes." },
  {
    id: 9,
    prompt: "I wash → he ",
    correct: "washes",
    tts: "I wash, he washes.",
  },
  {
    id: 10,
    prompt: "I dance → he ",
    correct: "dances",
    tts: "I dance, he dances.",
  },
  {
    id: 11,
    prompt: "I paint → he ",
    correct: "paints",
    tts: "I paint, he paints.",
  },
  {
    id: 12,
    prompt: "I teach → he ",
    correct: "teaches",
    tts: "I teach, he teaches.",
  },
  {
    id: 13,
    prompt: "I study → he ",
    correct: "studies",
    tts: "I study, he studies.",
  },
  { id: 14, prompt: "I try → he ", correct: "tries", tts: "I try, he tries." },
  {
    id: 15,
    prompt: "I watch → she ",
    correct: "watches",
    tts: "I watch, she watches.",
  },
  {
    id: 16,
    prompt: "I clean → she ",
    correct: "cleans",
    tts: "I clean, she cleans.",
  },
  { id: 17, prompt: "I do → she ", correct: "does", tts: "I do, she does." },
  {
    id: 18,
    prompt: "I fix → she ",
    correct: "fixes",
    tts: "I fix, she fixes.",
  },
  {
    id: 19,
    prompt: "I wish → she ",
    correct: "wishes",
    tts: "I wish, she wishes.",
  },
  { id: 20, prompt: "I go → she ", correct: "goes", tts: "I go, she goes." },
];

const AFF_ROOM_1_GLOSSARY_ITEMS = [
  { tts: "join", word: "join", meaning: "a se alătura" },
  { tts: "like", word: "like", meaning: "a plăcea" },
  { tts: "kiss", word: "kiss", meaning: "a săruta" },
  { tts: "fly", word: "fly", meaning: "a zbura" },
  { tts: "watch", word: "watch", meaning: "a se uita / a privi" },
  { tts: "enjoy", word: "enjoy", meaning: "a se bucura de" },
  { tts: "talk", word: "talk", meaning: "a vorbi" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "wash", word: "wash", meaning: "a spăla" },
  { tts: "dance", word: "dance", meaning: "a dansa" },
  { tts: "paint", word: "paint", meaning: "a vopsi / a picta" },
  { tts: "teach", word: "teach", meaning: "a preda" },
  { tts: "study", word: "study", meaning: "a studia" },
  { tts: "try", word: "try", meaning: "a încerca" },
  { tts: "clean", word: "clean", meaning: "a curăța" },
  { tts: "do", word: "do", meaning: "a face" },
  { tts: "fix", word: "fix", meaning: "a repara" },
  { tts: "wish", word: "wish", meaning: "a-și dori" },
];

// -------------------- Room 2 --------------------
const AFF_ROOM_2_EXERCISES = [
  {
    id: 1,
    template: "1. I [gap] jam. (like)",
    correct: "like",
    tts: "I like jam.",
  },
  {
    id: 2,
    template: "2. My brother [gap] honey. (like)",
    correct: "likes",
    tts: "My brother likes honey.",
  },
  {
    id: 3,
    template: "3. We [gap] to school in the morning. (go)",
    correct: "go",
    tts: "We go to school in the morning.",
  },
  {
    id: 4,
    template: "4. The girl [gap] to the cinema on Saturday. (go)",
    correct: "goes",
    tts: "The girl goes to the cinema on Saturday.",
  },
  {
    id: 5,
    template: "5. The teacher [gap] the lesson every day. (read)",
    correct: "reads",
    tts: "The teacher reads the lesson every day.",
  },
  {
    id: 6,
    template: "6. The pupils [gap] the lesson, too. (read)",
    correct: "read",
    tts: "The pupils read the lesson, too.",
  },
  {
    id: 7,
    template: "7. The bus [gap] at the traffic lights. (stop)",
    correct: "stops",
    tts: "The bus stops at the traffic lights.",
  },
  {
    id: 8,
    template: "8. Tom [gap] TV in the evening. (watch)",
    correct: "watches",
    tts: "Tom watches TV in the evening.",
  },
  {
    id: 9,
    template: "9. My sister [gap] to read that book. (want)",
    correct: "wants",
    tts: "My sister wants to read that book.",
  },
  {
    id: 10,
    template: "10. Alice [gap] this blouse every Sunday. (wear)",
    correct: "wears",
    tts: "Alice wears this blouse every Sunday.",
  },
];

const AFF_ROOM_2_GLOSSARY_ITEMS = [
  { tts: "like", word: "like", meaning: "a plăcea" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "read", word: "read", meaning: "a citi" },
  { tts: "stop", word: "stop", meaning: "a opri" },
  { tts: "watch", word: "watch", meaning: "a se uita / a privi" },
  { tts: "want", word: "want", meaning: "a vrea" },
  { tts: "wear", word: "wear", meaning: "a purta" },
  { tts: "jam", word: "jam", meaning: "gem" },
  { tts: "honey", word: "honey", meaning: "miere" },
  { tts: "pupils", word: "pupils", meaning: "elevi" },
  { tts: "traffic lights", word: "traffic lights", meaning: "semafor" },
  { tts: "blouse", word: "blouse", meaning: "bluză" },
];

// -------------------- Room 3 --------------------
const AFF_ROOM_3_EXERCISES = [
  {
    id: 1,
    template: "I fix machines. → He [gap] machines.",
    correct: "fixes",
    tts: "He fixes machines.",
  },
  {
    id: 2,
    template: "They build houses. → My father [gap] houses.",
    correct: "builds",
    tts: "My father builds houses.",
  },
  {
    id: 3,
    template: "We catch the bus at 7. → She [gap] the bus at 7.",
    correct: "catches",
    tts: "She catches the bus at 7.",
  },
  {
    id: 4,
    template: "They wash the car on Sundays. → He [gap] the car on Sundays.",
    correct: "washes",
    tts: "He washes the car on Sundays.",
  },
  {
    id: 5,
    template:
      "We go to the park after school. → She [gap] to the park after school.",
    correct: "goes",
    tts: "She goes to the park after school.",
  },
  {
    id: 6,
    template:
      "They watch cartoons in the evening. → He [gap] cartoons in the evening.",
    correct: "watches",
    tts: "He watches cartoons.",
  },
  {
    id: 7,
    template: "We study English on Monday. → She [gap] English on Monday.",
    correct: "studies",
    tts: "She studies English on Monday.",
  },
  {
    id: 8,
    template:
      "They play tennis at the weekend. → He [gap] tennis at the weekend.",
    correct: "plays",
    tts: "He plays tennis.",
  },
  {
    id: 9,
    template:
      "We do our homework in the afternoon. → She [gap] her homework in the afternoon.",
    correct: "does",
    tts: "She does her homework in the afternoon.",
  },
  {
    id: 10,
    template:
      "They clean the classroom on Fridays. → He [gap] the classroom on Fridays.",
    correct: "cleans",
    tts: "He cleans the classroom on Fridays.",
  },
];

const AFF_ROOM_3_GLOSSARY_ITEMS = [
  { tts: "fix", word: "fix", meaning: "a repara" },
  { tts: "build", word: "build", meaning: "a construi" },
  { tts: "catch", word: "catch", meaning: "a prinde" },
  { tts: "wash", word: "wash", meaning: "a spăla" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "watch", word: "watch", meaning: "a se uita / a privi" },
  { tts: "study", word: "study", meaning: "a studia" },
  { tts: "play", word: "play", meaning: "a se juca / a cânta" },
  { tts: "do", word: "do", meaning: "a face" },
  { tts: "clean", word: "clean", meaning: "a curăța" },
];

// -------------------- Room 4 --------------------
const AFF_ROOM_4_EXERCISES = [
  {
    id: 1,
    prompt: "She ______ the answer.",
    correct: "knows",
    tts: "She knows the answer.",
    options: [
      { value: "know", label: "know" },
      { value: "knows", label: "knows" },
    ],
  },
  {
    id: 2,
    prompt: "They ______ their promises.",
    correct: "keep",
    tts: "They keep their promises.",
    options: [
      { value: "keep", label: "keep" },
      { value: "keeps", label: "keeps" },
    ],
  },
  {
    id: 3,
    prompt: "My uncle ______ a taxi.",
    correct: "drives",
    tts: "My uncle drives a taxi.",
    options: [
      { value: "drive", label: "drive" },
      { value: "drives", label: "drives" },
    ],
  },
  {
    id: 4,
    prompt: "We ______ this restaurant.",
    correct: "choose",
    tts: "We choose this restaurant.",
    options: [
      { value: "choose", label: "choose" },
      { value: "chooses", label: "chooses" },
    ],
  },
  {
    id: 5,
    prompt: "Sarah ______ beautiful cakes.",
    correct: "makes",
    tts: "Sarah makes beautiful cakes.",
    options: [
      { value: "make", label: "make" },
      { value: "makes", label: "makes" },
    ],
  },
  {
    id: 6,
    prompt: "The team ______ many matches.",
    correct: "wins",
    tts: "The team wins many matches.",
    options: [
      { value: "win", label: "win" },
      { value: "wins", label: "wins" },
    ],
  },
  {
    id: 7,
    prompt: "My friend ______ photos every day.",
    correct: "takes",
    tts: "My friend takes photos every day.",
    options: [
      { value: "take", label: "take" },
      { value: "takes", label: "takes" },
    ],
  },
  {
    id: 8,
    prompt: "The baby ______ the toys.",
    correct: "drops",
    tts: "The baby drops the toys.",
    options: [
      { value: "drop", label: "drop" },
      { value: "drops", label: "drops" },
    ],
  },
  {
    id: 9,
    prompt: "We ______ snacks to school.",
    correct: "bring",
    tts: "We bring snacks to school.",
    options: [
      { value: "bring", label: "bring" },
      { value: "brings", label: "brings" },
    ],
  },
  {
    id: 10,
    prompt: "The train ______ on platform 3.",
    correct: "arrives",
    tts: "The train arrives on platform 3.",
    options: [
      { value: "arrive", label: "arrive" },
      { value: "arrives", label: "arrives" },
    ],
  },
];

const AFF_ROOM_4_GLOSSARY_ITEMS = [
  { tts: "know", word: "know", meaning: "a ști" },
  { tts: "the answer", word: "the answer", meaning: "răspunsul" },
  {
    tts: "keep promises",
    word: "keep promises",
    meaning: "a-și ține promisiunile",
  },
  { tts: "drive a taxi", word: "drive a taxi", meaning: "a conduce un taxi" },
  { tts: "restaurant", word: "restaurant", meaning: "restaurant" },
  { tts: "make cakes", word: "make cakes", meaning: "a face prăjituri" },
  { tts: "win matches", word: "win matches", meaning: "a câștiga meciuri" },
  { tts: "take photos", word: "take photos", meaning: "a face poze" },
  { tts: "drop toys", word: "drop toys", meaning: "a scăpa jucăriile" },
  { tts: "bring snacks", word: "bring snacks", meaning: "a aduce gustări" },
  {
    tts: "arrive on platform three",
    word: "arrive on platform three",
    meaning: "a sosi la peronul trei",
  },
];

// -------------------- Room 5 --------------------
const AFF_ROOM_5_EXERCISES = [
  {
    id: 1,
    template: "He write emails every morning. → He [gap] emails every morning.",
    correct: "writes",
    tts: "He writes emails every morning.",
  },
  {
    id: 2,
    template:
      "My sister help me with homework. → My sister [gap] me with homework.",
    correct: "helps",
    tts: "My sister helps me with homework.",
  },
  {
    id: 3,
    template:
      "The plane fly above the clouds. → The plane [gap] above the clouds.",
    correct: "flies",
    tts: "The plane flies above the clouds.",
  },
  {
    id: 4,
    template: "Peter catch the ball easily. → Peter [gap] the ball easily.",
    correct: "catches",
    tts: "Peter catches the ball easily.",
  },
  {
    id: 5,
    template: "The dog eat very fast. → The dog [gap] very fast.",
    correct: "eats",
    tts: "The dog eats very fast.",
  },
  {
    id: 6,
    template:
      "She open the window every night. → She [gap] the window every night.",
    correct: "opens",
    tts: "She opens the window every night.",
  },
  {
    id: 7,
    template: "Tom fix cars at the garage. → Tom [gap] cars at the garage.",
    correct: "fixes",
    tts: "Tom fixes cars at the garage.",
  },
  {
    id: 8,
    template: "The man carry heavy boxes. → The man [gap] heavy boxes.",
    correct: "carries",
    tts: "The man carries heavy boxes.",
  },
  {
    id: 9,
    template:
      "The teacher teach three subjects. → The teacher [gap] three subjects.",
    correct: "teaches",
    tts: "The teacher teaches three subjects.",
  },
  {
    id: 10,
    template: "Mary go to piano lessons. → Mary [gap] to piano lessons.",
    correct: "goes",
    tts: "Mary goes to piano lessons.",
  },
];

const AFF_ROOM_5_GLOSSARY_ITEMS = [
  { tts: "write emails", word: "write emails", meaning: "a scrie emailuri" },
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
  { tts: "help", word: "help", meaning: "a ajuta" },
  { tts: "homework", word: "homework", meaning: "teme" },
  {
    tts: "fly above the clouds",
    word: "fly above the clouds",
    meaning: "a zbura deasupra norilor",
  },
  { tts: "catch the ball", word: "catch the ball", meaning: "a prinde mingea" },
  {
    tts: "eat very fast",
    word: "eat very fast",
    meaning: "a mânca foarte repede",
  },
  {
    tts: "open the window",
    word: "open the window",
    meaning: "a deschide fereastra",
  },
  { tts: "fix cars", word: "fix cars", meaning: "a repara mașini" },
  {
    tts: "carry heavy boxes",
    word: "carry heavy boxes",
    meaning: "a căra cutii grele",
  },
  {
    tts: "teach three subjects",
    word: "teach three subjects",
    meaning: "a preda trei materii",
  },
  {
    tts: "go to piano lessons",
    word: "go to piano lessons",
    meaning: "a merge la lecții de pian",
  },
];

// -------------------- Room 6 --------------------
const AFF_ROOM_6_EXERCISES = [
  {
    id: 1,
    prompt: "(plays / the guitar / he / every weekend)",
    correct: "he plays the guitar every weekend",
    tts: "He plays the guitar every weekend.",
  },
  {
    id: 2,
    prompt: "(washes / on Sundays / the car / my father)",
    correct: "my father washes the car on sundays",
    tts: "My father washes the car on sundays.",
  },
  {
    id: 3,
    prompt: "(reads / she / the newspaper / every morning)",
    correct: "she reads the newspaper every morning",
    tts: "She reads the newspaper every morning.",
  },
  {
    id: 4,
    prompt: "(walks / the boy / every day / to school)",
    correct: "the boy walks to school every day",
    tts: "The boy walks to school every day.",
  },
  {
    id: 5,
    prompt: "(cooks / my aunt / dinner / every evening)",
    correct: "my aunt cooks dinner every evening",
    tts: "My aunt cooks dinner every evening.",
  },
  {
    id: 6,
    prompt: "(writes / the artist / new songs)",
    correct: "the artist writes new songs",
    tts: "The artist writes new songs.",
  },
  {
    id: 7,
    prompt: "(paints / the worker / the house)",
    correct: "the worker paints the house",
    tts: "The worker paints the house.",
  },
  {
    id: 8,
    prompt: "(takes / amazing photos / my friend)",
    correct: "my friend takes amazing photos",
    tts: "My friend takes amazing photos.",
  },
  {
    id: 9,
    prompt: "(drops / the baby / the toys)",
    correct: "the baby drops the toys",
    tts: "The baby drops the toys.",
  },
  {
    id: 10,
    prompt: "(opens / at 10 o’clock / the museum)",
    correct: "the museum opens at 10 o'clock",
    tts: "The museum opens at 10 o'clock.",
  },
];

const AFF_ROOM_6_GLOSSARY_ITEMS = [
  {
    tts: "play the guitar",
    word: "play the guitar",
    meaning: "a cânta la chitară",
  },
  {
    tts: "every weekend",
    word: "every weekend",
    meaning: "în fiecare weekend",
  },
  { tts: "wash the car", word: "wash the car", meaning: "a spăla mașina" },
  { tts: "on Sundays", word: "on Sundays", meaning: "duminica" },
  {
    tts: "read the newspaper",
    word: "read the newspaper",
    meaning: "a citi ziarul",
  },
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
  {
    tts: "walk to school",
    word: "walk to school",
    meaning: "a merge pe jos la școală",
  },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "cook dinner", word: "cook dinner", meaning: "a găti cina" },
  { tts: "every evening", word: "every evening", meaning: "în fiecare seară" },
  {
    tts: "write new songs",
    word: "write new songs",
    meaning: "a scrie cântece noi",
  },
  { tts: "paint the house", word: "paint the house", meaning: "a vopsi casa" },
  {
    tts: "take amazing photos",
    word: "take amazing photos",
    meaning: "a face poze uimitoare",
  },
  { tts: "drop the toys", word: "drop the toys", meaning: "a scăpa jucăriile" },
  {
    tts: "open at 10 o'clock",
    word: "open at 10 o'clock",
    meaning: "a se deschide la ora 10",
  },
];

// -------------------- Room 7 --------------------
const AFF_ROOM_7_EXERCISES = [
  {
    id: 1,
    prompt: "El repara telefoane.",
    correct: "he repairs phones",
    tts: "He repairs phones.",
  },
  {
    id: 2,
    prompt: "Ea conduce o masina rosie.",
    correct: "she drives a red car",
    tts: "She drives a red car.",
  },
  {
    id: 3,
    prompt: "Fratele meu gaseste solutii rapid.",
    correct: "my brother finds solutions quickly",
    tts: "My brother finds solutions quickly.",
  },
  {
    id: 4,
    prompt: "Bunica mea face prajituri delicioase.",
    correct: "my grandmother makes delicious cakes",
    tts: "My grandmother makes delicious cakes.",
  },
  {
    id: 5,
    prompt: "Tom deschide magazinul la ora 9.",
    correct: "tom opens the shop at 9 o'clock",
    tts: "Tom opens the shop at 9 o'clock.",
  },
  {
    id: 6,
    prompt: "Cainele se joaca cu jucariile.",
    correct: "the dog plays with the toys",
    tts: "The dog plays with the toys.",
  },
  {
    id: 7,
    prompt: "Ei construiesc case moderne.",
    correct: "they build modern houses",
    tts: "They build modern houses.",
  },
  {
    id: 8,
    prompt: "El aduce florile in fiecare zi.",
    correct: "he brings the flowers every day",
    tts: "He brings the flowers every day.",
  },
  {
    id: 9,
    prompt: "Sora mea canta foarte frumos.",
    correct: "my sister sings very beautifully",
    tts: "My sister sings very beautifully.",
  },
  {
    id: 10,
    prompt: "Copilul deseneaza pe hartie.",
    correct: "the child draws on the paper",
    tts: "The child draws on the paper.",
  },
];

const AFF_ROOM_7_GLOSSARY_ITEMS = [
  { tts: "repair", word: "repair", meaning: "a repara" },
  { tts: "phones", word: "phones", meaning: "telefoane" },
  { tts: "drive", word: "drive", meaning: "a conduce" },
  { tts: "a red car", word: "a red car", meaning: "o masina rosie" },
  { tts: "find", word: "find", meaning: "a gasi" },
  { tts: "solutions", word: "solutions", meaning: "solutii" },
  { tts: "quickly", word: "quickly", meaning: "rapid" },
  { tts: "make", word: "make", meaning: "a face" },
  {
    tts: "delicious cakes",
    word: "delicious cakes",
    meaning: "prajituri delicioase",
  },
  { tts: "open", word: "open", meaning: "a deschide" },
  { tts: "the shop", word: "the shop", meaning: "magazinul" },
  { tts: "at nine o'clock", word: "at nine o'clock", meaning: "la ora 9" },
  { tts: "build", word: "build", meaning: "a construi" },
  { tts: "modern houses", word: "modern houses", meaning: "case moderne" },
  { tts: "bring", word: "bring", meaning: "a aduce" },
  { tts: "the flowers", word: "the flowers", meaning: "florile" },
  { tts: "every day", word: "every day", meaning: "in fiecare zi" },
  { tts: "sing", word: "sing", meaning: "a canta" },
  {
    tts: "very beautifully",
    word: "very beautifully",
    meaning: "foarte frumos",
  },
  { tts: "play", word: "play", meaning: "a se juca" },
  { tts: "the toys", word: "the toys", meaning: "jucariile" },
  { tts: "draw", word: "draw", meaning: "a desena" },
  { tts: "the paper", word: "the paper", meaning: "hartia" },
  { tts: "my brother", word: "my brother", meaning: "fratele meu" },
  { tts: "my grandmother", word: "my grandmother", meaning: "bunica mea" },
  { tts: "my sister", word: "my sister", meaning: "sora mea" },
  { tts: "Tom", word: "Tom", meaning: "Tom" },
  { tts: "the child", word: "the child", meaning: "copilul" },
];

export const PS_AFFIRMATIVE_ROOMS = [
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 1,
    exercises: AFF_ROOM_1_EXERCISES,
    lexHints: affirmativeLexHints.room1,
    ExerciseListComponent: TextInputExerciseList,
    exerciseListProps: {
      testIdPrefix: "ps-aff-room1",
      withListenOnCorrect: true,
    },
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează spațiile libere cu forma corectă a verbul la persoana a
          III-a singular
        </h2>
      </>
    ),
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
    dictionaryDescription:
      "Apasă pe butonul cu 🔊 ca să auzi pronunția verbului, apoi citește traducerea.",
    dictionaryItems: AFF_ROOM_1_GLOSSARY_ITEMS,
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 2,
    exercises: AFF_ROOM_2_EXERCISES,
    // Keep hints local to this room so they follow the global Lex Junior rules.
    // (Task clarification → rule with NEW examples → strategy → motivation)
    lexHints: [
      "<strong>Ce ai de făcut:</strong> Completează fiecare spațiu liber cu <em>forma corectă a verbului</em> din paranteză, la <strong>Present Simple afirmativ</strong>. Scrie <strong>doar verbul</strong>.",
      "<strong>Regulă rapidă:</strong> cu <em>he / she / it</em> sau un singur om (Tom, my sister) verbul primește de obicei <strong>-s / -es</strong>: <em>She reads</em>, <em>Tom watches</em>. Cu <em>I / we / you / they</em> rămâne forma de bază: <em>We go</em>.",
      "<strong>Strategie:</strong> Întreabă-te mai întâi: subiectul e la singular (my brother, the bus, Alice)? Dacă da, adaugă <strong>-s</strong>. Dacă nu, lasă verbul simplu. Apoi citește propoziția cu voce tare (sau apasă 🔊 după ce e corect) ca să verifici dacă sună natural.",
      "Ține-o tot așa — încă 10 răspunsuri și cheia e tot mai aproape 🔑😊",
    ],
    ExerciseListComponent: GapSentenceExerciseList,
    exerciseListProps: {
      testIdPrefix: "ps-aff-room2",
      showIndex: false,
    },
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează spațiile libere cu forma corectă a verbului din paranteză
        </h2>
      </>
    ),
    dictionaryDescription:
      "Apasă pe 🔊 ca să auzi pronunția cuvintelor, apoi verifică sensul lor în română.",
    dictionaryItems: AFF_ROOM_2_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 3,
    exercises: AFF_ROOM_3_EXERCISES,
    lexHints: affirmativeLexHints.room3,
    ExerciseListComponent: GapSentenceExerciseList,
    // Room 3 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează spațiile libere cu forma corectă a verbului din propoziția
          dată.
        </h2>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 4),
    dictionaryDescription:
      "Apasă pe 🔊 ca să auzi verbul, apoi uită-te cum îl folosești în propozițiile cu he / she.",
    dictionaryItems: AFF_ROOM_3_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 4,
    exercises: AFF_ROOM_4_EXERCISES,
    lexHints: affirmativeLexHints.room4,
    ExerciseListComponent: McqExerciseList,
    // Room 4 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">Bifează varianta corectă a verbului</h2>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 5),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_4_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 5,
    exercises: AFF_ROOM_5_EXERCISES,
    lexHints: affirmativeLexHints.room5,
    ExerciseListComponent: GapSentenceExerciseList,
    // Room 5 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Corectează propozițiile completând spațiul liber cu forma corectă a
          verbului din propoziția dată
        </h2>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 6),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_5_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 6,
    exercises: AFF_ROOM_6_EXERCISES,
    lexHints: affirmativeLexHints.room6,
    ExerciseListComponent: TextareaExerciseList,
    exerciseListProps: { rows: 1, stacked: true, showIndex: true },
    // Room 6 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Scrie cuvintele date în ordinea corectă pentru a forma propoziții la
          Present Simple afirmativ
        </h2>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 7),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_6_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 7,
    exercises: AFF_ROOM_7_EXERCISES,
    lexHints: affirmativeLexHints.room7,
    ExerciseListComponent: TextareaExerciseList,
    exerciseListProps: { rows: 1, stacked: true, showIndex: true },
    // Room 7 previously had no ps-check/ps-feedback testIDs; keep output identical.
    verifyTestId: null,
    feedbackTestId: null,
    nextTo: null,
    verifyLabel: "Verifică răspunsurile",
    cardIntro: (
      <>
        <h2 className="card-title">
          Tradu propozițiile din română în engleză. Folosește dicționarul pentru
          a găsi cuvintele și expresiile potrivite.
        </h2>
      </>
    ),


    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_7_GLOSSARY_ITEMS,
    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate exercițiile din această cameră!",
  },
];

// Dev-only fail-fast validation (no runtime / UX changes in production)
if (import.meta.env.DEV) {
  validateRoomRegistry(PS_AFFIRMATIVE_ROOMS, {
    registryName: "PS_AFFIRMATIVE_ROOMS",
    sectionId: SECTION_ID,
    expectedRoomNumbers: [1, 2, 3, 4, 5, 6, 7],
  });
}

export function getPsAffirmativeRoomDef(roomNumber) {
  const idx = Number.isFinite(roomNumber) ? roomNumber - 1 : -1;
  if (idx < 0 || idx >= PS_AFFIRMATIVE_ROOMS.length) return null;
  return PS_AFFIRMATIVE_ROOMS[idx];
}


export function getPsAffirmativeExercises(roomNumber) {
  const def = getPsAffirmativeRoomDef(roomNumber);
  return def?.exercises ?? [];
}

const PS_AFFIRMATIVE_GLOSSARY_BY_ROOM = {
  1: AFF_ROOM_1_GLOSSARY_ITEMS,
  2: AFF_ROOM_2_GLOSSARY_ITEMS,
  3: AFF_ROOM_3_GLOSSARY_ITEMS,
  4: AFF_ROOM_4_GLOSSARY_ITEMS,
  5: AFF_ROOM_5_GLOSSARY_ITEMS,
  6: AFF_ROOM_6_GLOSSARY_ITEMS,
  7: AFF_ROOM_7_GLOSSARY_ITEMS,
};

export function getPsAffirmativeGlossaryItems(roomNumber) {
  const items = PS_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber];
  return Array.isArray(items) ? items : [];
}
