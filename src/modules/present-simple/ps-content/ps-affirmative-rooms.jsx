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
  { id: 3, prompt: "I kiss → he ", correct: "kisses", tts: "I kiss, he kisses." },
  { id: 4, prompt: "I fly → he ", correct: "flies", tts: "I fly, he flies." },
  { id: 5, prompt: "I watch → he ", correct: "watches", tts: "I watch, he watches." },
  { id: 6, prompt: "I enjoy → he ", correct: "enjoys", tts: "I enjoy, he enjoys." },
  { id: 7, prompt: "I talk → he ", correct: "talks", tts: "I talk, he talks." },
  { id: 8, prompt: "I go → he ", correct: "goes", tts: "I go, he goes." },
  { id: 9, prompt: "I wash → he ", correct: "washes", tts: "I wash, he washes." },
  { id: 10, prompt: "I dance → he ", correct: "dances", tts: "I dance, he dances." },
  { id: 11, prompt: "I paint → he ", correct: "paints", tts: "I paint, he paints." },
  { id: 12, prompt: "I teach → he ", correct: "teaches", tts: "I teach, he teaches." },
  { id: 13, prompt: "I study → he ", correct: "studies", tts: "I study, he studies." },
  { id: 14, prompt: "I try → he ", correct: "tries", tts: "I try, he tries." },
  { id: 15, prompt: "I watch → she ", correct: "watches", tts: "I watch, she watches." },
  { id: 16, prompt: "I clean → she ", correct: "cleans", tts: "I clean, she cleans." },
  { id: 17, prompt: "I do → she ", correct: "does", tts: "I do, she does." },
  { id: 18, prompt: "I fix → she ", correct: "fixes", tts: "I fix, she fixes." },
  { id: 19, prompt: "I wish → she ", correct: "wishes", tts: "I wish, she wishes." },
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
  { id: 1, prompt: "I like apples. → She ", correct: "likes apples", tts: "She likes apples." },
  { id: 2, prompt: "I go to school by bus. → He ", correct: "goes to school by bus", tts: "He goes to school by bus." },
  { id: 3, prompt: "I watch TV in the evening. → She ", correct: "watches TV in the evening", tts: "She watches TV in the evening." },
  { id: 4, prompt: "I play football on Sundays. → He ", correct: "plays football on Sundays", tts: "He plays football on Sundays." },
  { id: 5, prompt: "I study English every day. → She ", correct: "studies English every day", tts: "She studies English every day." },
  { id: 6, prompt: "I do my homework in the afternoon. → He ", correct: "does his homework in the afternoon", tts: "He does his homework in the afternoon." },
  { id: 7, prompt: "I wash the dishes after dinner. → She ", correct: "washes the dishes after dinner", tts: "She washes the dishes after dinner." },
  { id: 8, prompt: "I fix my bike at the weekend. → He ", correct: "fixes his bike at the weekend", tts: "He fixes his bike at the weekend." },
  { id: 9, prompt: "I clean my room on Fridays. → She ", correct: "cleans her room on Fridays", tts: "She cleans her room on Fridays." },
  { id: 10, prompt: "I paint pictures in my free time. → He ", correct: "paints pictures in his free time", tts: "He paints pictures in his free time." },
];

const AFF_ROOM_2_GLOSSARY_ITEMS = [
  { tts: "like", word: "like", meaning: "a plăcea" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "watch", word: "watch", meaning: "a se uita / a privi" },
  { tts: "play", word: "play", meaning: "a se juca / a cânta" },
  { tts: "study", word: "study", meaning: "a studia" },
  { tts: "do", word: "do", meaning: "a face" },
  { tts: "wash", word: "wash", meaning: "a spăla" },
  { tts: "fix", word: "fix", meaning: "a repara" },
  { tts: "clean", word: "clean", meaning: "a curăța" },
  { tts: "paint", word: "paint", meaning: "a picta / a vopsi" },
];

// -------------------- Room 3 --------------------
const AFF_ROOM_3_EXERCISES = [
  { id: 1, template: "1) I fix machines. → He [gap] machines.", correct: "fixes", tts: "He fixes machines." },
  { id: 2, template: "2) They build houses. → My father [gap] houses.", correct: "builds", tts: "My father builds houses." },
  { id: 3, template: "3) We catch the bus at 7. → She [gap] the bus at 7.", correct: "catches", tts: "She catches the bus at 7." },
  { id: 4, template: "4) They wash the car on Sundays. → He [gap] the car on Sundays.", correct: "washes", tts: "He washes the car on Sundays." },
  { id: 5, template: "5) We go to the park after school. → She [gap] to the park after school.", correct: "goes", tts: "She goes to the park after school." },
  { id: 6, template: "6) They watch cartoons in the evening. → He [gap] cartoons.", correct: "watches", tts: "He watches cartoons." },
  { id: 7, template: "7) We study English on Monday. → She [gap] English on Monday.", correct: "studies", tts: "She studies English on Monday." },
  { id: 8, template: "8) They play tennis at the weekend. → He [gap] tennis.", correct: "plays", tts: "He plays tennis." },
  { id: 9, template: "9) We do our homework in the afternoon. → She [gap] her homework in the afternoon.", correct: "does", tts: "She does her homework in the afternoon." },
  { id: 10, template: "10) They clean the classroom on Fridays. → He [gap] the classroom on Fridays.", correct: "cleans", tts: "He cleans the classroom on Fridays." },
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
  { tts: "keep promises", word: "keep promises", meaning: "a-și ține promisiunile" },
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
  { id: 1, template: "He write emails every morning. → He [gap] emails every morning.", correct: "writes", tts: "He writes emails every morning." },
  { id: 2, template: "My sister help me with homework. → My sister [gap] me with homework.", correct: "helps", tts: "My sister helps me with homework." },
  { id: 3, template: "The plane fly above the clouds. → The plane [gap] above the clouds.", correct: "flies", tts: "The plane flies above the clouds." },
  { id: 4, template: "Peter catch the ball easily. → Peter [gap] the ball easily.", correct: "catches", tts: "Peter catches the ball easily." },
  { id: 5, template: "The dog eat very fast. → The dog [gap] very fast.", correct: "eats", tts: "The dog eats very fast." },
  { id: 6, template: "She open the window every night. → She [gap] the window every night.", correct: "opens", tts: "She opens the window every night." },
  { id: 7, template: "Tom fix cars at the garage. → Tom [gap] cars at the garage.", correct: "fixes", tts: "Tom fixes cars at the garage." },
  { id: 8, template: "The man carry heavy boxes. → The man [gap] heavy boxes.", correct: "carries", tts: "The man carries heavy boxes." },
  { id: 9, template: "The teacher teach three subjects. → The teacher [gap] three subjects.", correct: "teaches", tts: "The teacher teaches three subjects." },
  { id: 10, template: "Mary go to piano lessons. → Mary [gap] to piano lessons.", correct: "goes", tts: "Mary goes to piano lessons." },
];

const AFF_ROOM_5_GLOSSARY_ITEMS = [
  { tts: "write emails", word: "write emails", meaning: "a scrie emailuri" },
  { tts: "every morning", word: "every morning", meaning: "în fiecare dimineață" },
  { tts: "help", word: "help", meaning: "a ajuta" },
  { tts: "homework", word: "homework", meaning: "teme" },
  { tts: "fly above the clouds", word: "fly above the clouds", meaning: "a zbura deasupra norilor" },
  { tts: "catch the ball", word: "catch the ball", meaning: "a prinde mingea" },
  { tts: "eat very fast", word: "eat very fast", meaning: "a mânca foarte repede" },
  { tts: "open the window", word: "open the window", meaning: "a deschide fereastra" },
  { tts: "fix cars", word: "fix cars", meaning: "a repara mașini" },
  { tts: "carry heavy boxes", word: "carry heavy boxes", meaning: "a căra cutii grele" },
  { tts: "teach three subjects", word: "teach three subjects", meaning: "a preda trei materii" },
  { tts: "go to piano lessons", word: "go to piano lessons", meaning: "a merge la lecții de pian" },
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
  { tts: "play the guitar", word: "play the guitar", meaning: "a cânta la chitară" },
  { tts: "every weekend", word: "every weekend", meaning: "în fiecare weekend" },
  { tts: "wash the car", word: "wash the car", meaning: "a spăla mașina" },
  { tts: "on Sundays", word: "on Sundays", meaning: "duminica" },
  { tts: "read the newspaper", word: "read the newspaper", meaning: "a citi ziarul" },
  { tts: "every morning", word: "every morning", meaning: "în fiecare dimineață" },
  { tts: "walk to school", word: "walk to school", meaning: "a merge pe jos la școală" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "cook dinner", word: "cook dinner", meaning: "a găti cina" },
  { tts: "every evening", word: "every evening", meaning: "în fiecare seară" },
  { tts: "write new songs", word: "write new songs", meaning: "a scrie cântece noi" },
  { tts: "paint the house", word: "paint the house", meaning: "a vopsi casa" },
  { tts: "take amazing photos", word: "take amazing photos", meaning: "a face poze uimitoare" },
  { tts: "drop the toys", word: "drop the toys", meaning: "a scăpa jucăriile" },
  { tts: "open at 10 o'clock", word: "open at 10 o'clock", meaning: "a se deschide la ora 10" },
];

// -------------------- Room 7 --------------------
const AFF_ROOM_7_EXERCISES = [
  { id: 1, prompt: "El repara telefoane.", correct: "he repairs phones", tts: "He repairs phones." },
  { id: 2, prompt: "Ea conduce o masina rosie.", correct: "she drives a red car", tts: "She drives a red car." },
  { id: 3, prompt: "Fratele meu gaseste solutii rapid.", correct: "my brother finds solutions quickly", tts: "My brother finds solutions quickly." },
  { id: 4, prompt: "Bunica mea face prajituri delicioase.", correct: "my grandmother makes delicious cakes", tts: "My grandmother makes delicious cakes." },
  { id: 5, prompt: "Tom deschide magazinul la ora 9.", correct: "tom opens the shop at 9 o'clock", tts: "Tom opens the shop at 9 o'clock." },
  { id: 6, prompt: "Cainele se joaca cu jucariile.", correct: "the dog plays with the toys", tts: "The dog plays with the toys." },
  { id: 7, prompt: "Ei construiesc case moderne.", correct: "they build modern houses", tts: "They build modern houses." },
  { id: 8, prompt: "El aduce florile in fiecare zi.", correct: "he brings the flowers every day", tts: "He brings the flowers every day." },
  { id: 9, prompt: "Sora mea canta foarte frumos.", correct: "my sister sings very beautifully", tts: "My sister sings very beautifully." },
  { id: 10, prompt: "Copilul deseneaza pe hartie.", correct: "the child draws on the paper", tts: "The child draws on the paper." },
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
  { tts: "delicious cakes", word: "delicious cakes", meaning: "prajituri delicioase" },
  { tts: "open", word: "open", meaning: "a deschide" },
  { tts: "the shop", word: "the shop", meaning: "magazinul" },
  { tts: "at nine o'clock", word: "at nine o'clock", meaning: "la ora 9" },
  { tts: "build", word: "build", meaning: "a construi" },
  { tts: "modern houses", word: "modern houses", meaning: "case moderne" },
  { tts: "bring", word: "bring", meaning: "a aduce" },
  { tts: "the flowers", word: "the flowers", meaning: "florile" },
  { tts: "every day", word: "every day", meaning: "in fiecare zi" },
  { tts: "sing", word: "sing", meaning: "a canta" },
  { tts: "very beautifully", word: "very beautifully", meaning: "foarte frumos" },
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
    exerciseListProps: { testIdPrefix: "ps-aff-room1", withListenOnCorrect: true },
    cardIntro: (
      <>
        <h2 className="card-title">Exercițiu – forme de he / she / it</h2>
        <p className="card-description">
          Completează forma de persoana a III-a singular (<strong>he / she / it</strong>) pentru verbele de mai jos,
          la <strong>Present Simple</strong>. Verbele urmează regulile clasice: <strong>-s</strong>, <strong>-es</strong>,
          <strong>-ies</strong>.
        </p>
      </>
    ),
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
    dictionaryDescription: "Apasă pe butonul cu 🔊 ca să auzi pronunția verbului, apoi citește traducerea.",
    dictionaryItems: AFF_ROOM_1_GLOSSARY_ITEMS,
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Afirmativ",
    roomNumber: 2,
    exercises: AFF_ROOM_2_EXERCISES,
    lexHints: affirmativeLexHints.room2,
    ExerciseListComponent: TextInputExerciseList,
    exerciseListProps: { withListenOnCorrect: true },
    cardIntro: (
      <>
        <h2 className="card-title">Exercițiu – transformă propozițiile pentru he / she</h2>
        <p className="card-description">
          Ai propoziția de bază cu <strong>I</strong>. Rescrie propoziția pentru <strong>he / she</strong>, având grijă să
          pui <strong>forma corectă a verbului</strong> la Present Simple și să păstrezi restul ideii.
        </p>
      </>
    ),
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_2_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
        <h2 className="card-title">Exercițiu – completează doar verbul în [gap]</h2>
        <p className="card-description">
          Ai propoziția de bază cu <strong>we / they</strong>, apoi propoziția transformată pentru <strong>he / she</strong>,
          cu un <strong>[gap]</strong> în locul verbului. Subiectul și restul propoziției sunt deja scrise. Tu completezi
          doar <strong>forma corectă a verbului</strong> la Present Simple.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 4),
    dictionaryDescription:
      "Apasă pe 🔊 ca să auzi verbul, apoi uită-te cum îl folosești în propozițiile cu he / she.",
    dictionaryItems: AFF_ROOM_3_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
        <h2 className="card-title">Exercițiu – alege forma corectă a verbului</h2>
        <p className="card-description">
          Bifează varianta corectă astfel încât propoziția să fie la <strong>Present Simple afirmativ</strong>. Uită-te
          bine la subiect (She, They, My uncle...) și la regulile de <strong>-s / -es</strong>.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 5),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_4_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
        <h2 className="card-title">Exercițiu – corectează verbul pentru he / she / it</h2>
        <p className="card-description">
          În prima parte vezi propoziția cu verbul greșit, iar în a doua parte rescrii propoziția corectă, completând
          doar forma corectă a verbului în spațiul liber.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 6),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_5_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
        <h2 className="card-title">Exercițiu – construiește propoziții corecte</h2>
        <p className="card-description">
          Ai cuvintele amestecate între paranteze. Scrie în căsuța de dedesubt propoziția corectă, la Present Simple
          afirmativ, cu ordinea corectă a cuvintelor.
        </p>
      </>
    ),
    nextTo: psRoomPath(SECTION_ID, 7),
    verifyLabel: "Verifică răspunsurile",
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_6_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
        <h2 className="card-title">Exercițiu – traduce propozițiile în engleză</h2>
        <p className="card-description">
          Scrie propoziția în engleză pentru fiecare enunț în limba română. Folosește Present Simple afirmativ și ai
          grijă la forma verbului pentru he / she / it.
        </p>
      </>
    ),
    afterBody: ({ roomState }) =>
      roomState.passed ? (
        <section className="card section-complete-card">
          <h2 className="card-title">
            Bravo! Ai terminat toate camerele din secțiunea Afirmativ – Present Simple. 🎉
          </h2>
          <p className="card-description">
            Ai parcurs toată ruta pentru propozițiile afirmative. Mergi la hartă ca să vezi progresul cheilor și cât de
            aproape ești de camera finală.
          </p>
          <div className="buttons">
            <Link to={psMapPath()} className="btn btn-outline">
              🏁 Înapoi la hartă
            </Link>
          </div>
        </section>
      ) : null,
    dictionaryDescription:
      "Apasă pe 🔊 ca să asculți verbele și expresiile, apoi verifică cum le folosești în propozițiile tale.",
    dictionaryItems: AFF_ROOM_7_GLOSSARY_ITEMS,
    errorText: "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText: "Bravo! Ai completat corect toate propozițiile la această cameră!",
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
