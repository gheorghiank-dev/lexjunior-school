// Present Simple > Affirmative content registry
// Sprint G5: move *content* (exercises, dictionaries, intros, messages) out of page files.
//
// Guardrails:
// - NO UX / gating / keys changes
// - keep templates intact (PsRoomTemplateV1 renders the same)

import { PS_ROOMS_PER_SECTION, PS_SECTIONS } from "../ps-core/config.js";

export const PS_AFFIRMATIVE_EXERCISES_BY_ROOM = {



// -------------------- Room 1 --------------------
1: [
  { id: "ps-r1-ex1", prompt: "I join → he ", correct: "joins", tts: "I join, he joins." },
  { id: "ps-r1-ex2", prompt: "I like → he ", correct: "likes", tts: "I like, he likes." },
  {
    id: "ps-r1-ex3",
    prompt: "I kiss → he ",
    correct: "kisses",
    tts: "I kiss, he kisses.",
  },
  { id: "ps-r1-ex4", prompt: "I fly → he ", correct: "flies", tts: "I fly, he flies." },
  {
    id: "ps-r1-ex5",
    prompt: "I watch → he ",
    correct: "watches",
    tts: "I watch, he watches.",
  },
  {
    id: "ps-r1-ex6",
    prompt: "I enjoy → he ",
    correct: "enjoys",
    tts: "I enjoy, he enjoys.",
  },
  { id: "ps-r1-ex7", prompt: "I talk → he ", correct: "talks", tts: "I talk, he talks." },
  { id: "ps-r1-ex8", prompt: "I go → he ", correct: "goes", tts: "I go, he goes." },
  {
    id: "ps-r1-ex9",
    prompt: "I wash → he ",
    correct: "washes",
    tts: "I wash, he washes.",
  },
  {
    id: "ps-r1-ex10",
    prompt: "I dance → he ",
    correct: "dances",
    tts: "I dance, he dances.",
  },
  {
    id: "ps-r1-ex11",
    prompt: "I paint → he ",
    correct: "paints",
    tts: "I paint, he paints.",
  },
  {
    id: "ps-r1-ex12",
    prompt: "I teach → he ",
    correct: "teaches",
    tts: "I teach, he teaches.",
  },
  {
    id: "ps-r1-ex13",
    prompt: "I study → he ",
    correct: "studies",
    tts: "I study, he studies.",
  },
  { id: "ps-r1-ex14", prompt: "I try → he ", correct: "tries", tts: "I try, he tries." },
  {
    id: "ps-r1-ex15",
    prompt: "I watch → she ",
    correct: "watches",
    tts: "I watch, she watches.",
  },
  {
    id: "ps-r1-ex16",
    prompt: "I clean → she ",
    correct: "cleans",
    tts: "I clean, she cleans.",
  },
  { id: "ps-r1-ex17", prompt: "I do → she ", correct: "does", tts: "I do, she does." },
  {
    id: "ps-r1-ex18",
    prompt: "I fix → she ",
    correct: "fixes",
    tts: "I fix, she fixes.",
  },
  {
    id: "ps-r1-ex19",
    prompt: "I wish → she ",
    correct: "wishes",
    tts: "I wish, she wishes.",
  },
  { id: "ps-r1-ex20", prompt: "I go → she ", correct: "goes", tts: "I go, she goes." },
],



// -------------------- Room 2 --------------------
2: [
  {
    id: "ps-r2-ex1",
    template: "1. I [gap] jam. (like)",
    correct: "like",
    tts: "I like jam.",
  },
  {
    id: "ps-r2-ex2",
    template: "2. My brother [gap] honey. (like)",
    correct: "likes",
    tts: "My brother likes honey.",
  },
  {
    id: "ps-r2-ex3",
    template: "3. We [gap] to school in the morning. (go)",
    correct: "go",
    tts: "We go to school in the morning.",
  },
  {
    id: "ps-r2-ex4",
    template: "4. The girl [gap] to the cinema on Saturday. (go)",
    correct: "goes",
    tts: "The girl goes to the cinema on Saturday.",
  },
  {
    id: "ps-r2-ex5",
    template: "5. The teacher [gap] the lesson every day. (read)",
    correct: "reads",
    tts: "The teacher reads the lesson every day.",
  },
  {
    id: "ps-r2-ex6",
    template: "6. The pupils [gap] the lesson, too. (read)",
    correct: "read",
    tts: "The pupils read the lesson, too.",
  },
  {
    id: "ps-r2-ex7",
    template: "7. The bus [gap] at the traffic lights. (stop)",
    correct: "stops",
    tts: "The bus stops at the traffic lights.",
  },
  {
    id: "ps-r2-ex8",
    template: "8. Tom [gap] TV in the evening. (watch)",
    correct: "watches",
    tts: "Tom watches TV in the evening.",
  },
  {
    id: "ps-r2-ex9",
    template: "9. My sister [gap] to read that book. (want)",
    correct: "wants",
    tts: "My sister wants to read that book.",
  },
  {
    id: "ps-r2-ex10",
    template: "10. Alice [gap] this blouse every Sunday. (wear)",
    correct: "wears",
    tts: "Alice wears this blouse every Sunday.",
  },
],



// -------------------- Room 3 --------------------
3: [
  {
    id: "ps-r3-ex1",
    template: "I fix machines. → He [gap] machines.",
    correct: "fixes",
    tts: "He fixes machines.",
  },
  {
    id: "ps-r3-ex2",
    template: "They build houses. → My father [gap] houses.",
    correct: "builds",
    tts: "My father builds houses.",
  },
  {
    id: "ps-r3-ex3",
    template: "We catch the bus at 7. → She [gap] the bus at 7.",
    correct: "catches",
    tts: "She catches the bus at 7.",
  },
  {
    id: "ps-r3-ex4",
    template: "They wash the car on Sundays. → He [gap] the car on Sundays.",
    correct: "washes",
    tts: "He washes the car on Sundays.",
  },
  {
    id: "ps-r3-ex5",
    template:
      "We go to the park after school. → She [gap] to the park after school.",
    correct: "goes",
    tts: "She goes to the park after school.",
  },
  {
    id: "ps-r3-ex6",
    template:
      "They watch cartoons in the evening. → He [gap] cartoons in the evening.",
    correct: "watches",
    tts: "He watches cartoons.",
  },
  {
    id: "ps-r3-ex7",
    template: "We study English on Monday. → She [gap] English on Monday.",
    correct: "studies",
    tts: "She studies English on Monday.",
  },
  {
    id: "ps-r3-ex8",
    template:
      "They play tennis at the weekend. → He [gap] tennis at the weekend.",
    correct: "plays",
    tts: "He plays tennis.",
  },
  {
    id: "ps-r3-ex9",
    template:
      "We do our homework in the afternoon. → She [gap] her homework in the afternoon.",
    correct: "does",
    tts: "She does her homework in the afternoon.",
  },
  {
    id: "ps-r3-ex10",
    template:
      "They clean the classroom on Fridays. → He [gap] the classroom on Fridays.",
    correct: "cleans",
    tts: "He cleans the classroom on Fridays.",
  },
],



// -------------------- Room 4 --------------------
4: [
  {
    id: "ps-r4-ex1",
    prompt: "She ______ the answer.",
    correct: "knows",
    tts: "She knows the answer.",
    options: [
      { value: "know", label: "know" },
      { value: "knows", label: "knows" },
    ],
  },
  {
    id: "ps-r4-ex2",
    prompt: "They ______ their promises.",
    correct: "keep",
    tts: "They keep their promises.",
    options: [
      { value: "keep", label: "keep" },
      { value: "keeps", label: "keeps" },
    ],
  },
  {
    id: "ps-r4-ex3",
    prompt: "My uncle ______ a taxi.",
    correct: "drives",
    tts: "My uncle drives a taxi.",
    options: [
      { value: "drive", label: "drive" },
      { value: "drives", label: "drives" },
    ],
  },
  {
    id: "ps-r4-ex4",
    prompt: "We ______ this restaurant.",
    correct: "choose",
    tts: "We choose this restaurant.",
    options: [
      { value: "choose", label: "choose" },
      { value: "chooses", label: "chooses" },
    ],
  },
  {
    id: "ps-r4-ex5",
    prompt: "Sarah ______ beautiful cakes.",
    correct: "makes",
    tts: "Sarah makes beautiful cakes.",
    options: [
      { value: "make", label: "make" },
      { value: "makes", label: "makes" },
    ],
  },
  {
    id: "ps-r4-ex6",
    prompt: "The team ______ many matches.",
    correct: "wins",
    tts: "The team wins many matches.",
    options: [
      { value: "win", label: "win" },
      { value: "wins", label: "wins" },
    ],
  },
  {
    id: "ps-r4-ex7",
    prompt: "My friend ______ photos every day.",
    correct: "takes",
    tts: "My friend takes photos every day.",
    options: [
      { value: "take", label: "take" },
      { value: "takes", label: "takes" },
    ],
  },
  {
    id: "ps-r4-ex8",
    prompt: "The baby ______ the toys.",
    correct: "drops",
    tts: "The baby drops the toys.",
    options: [
      { value: "drop", label: "drop" },
      { value: "drops", label: "drops" },
    ],
  },
  {
    id: "ps-r4-ex9",
    prompt: "We ______ snacks to school.",
    correct: "bring",
    tts: "We bring snacks to school.",
    options: [
      { value: "bring", label: "bring" },
      { value: "brings", label: "brings" },
    ],
  },
  {
    id: "ps-r4-ex10",
    prompt: "The train ______ on platform 3.",
    correct: "arrives",
    tts: "The train arrives on platform 3.",
    options: [
      { value: "arrive", label: "arrive" },
      { value: "arrives", label: "arrives" },
    ],
  },
],



// -------------------- Room 5 --------------------
5: [
  {
    id: "ps-r5-ex1",
    template: "He write emails every morning. → He [gap] emails every morning.",
    correct: "writes",
    tts: "He writes emails every morning.",
  },
  {
    id: "ps-r5-ex2",
    template:
      "My sister help me with homework. → My sister [gap] me with homework.",
    correct: "helps",
    tts: "My sister helps me with homework.",
  },
  {
    id: "ps-r5-ex3",
    template:
      "The plane fly above the clouds. → The plane [gap] above the clouds.",
    correct: "flies",
    tts: "The plane flies above the clouds.",
  },
  {
    id: "ps-r5-ex4",
    template: "Peter catch the ball easily. → Peter [gap] the ball easily.",
    correct: "catches",
    tts: "Peter catches the ball easily.",
  },
  {
    id: "ps-r5-ex5",
    template: "The dog eat very fast. → The dog [gap] very fast.",
    correct: "eats",
    tts: "The dog eats very fast.",
  },
  {
    id: "ps-r5-ex6",
    template:
      "She open the window every night. → She [gap] the window every night.",
    correct: "opens",
    tts: "She opens the window every night.",
  },
  {
    id: "ps-r5-ex7",
    template: "Tom fix cars at the garage. → Tom [gap] cars at the garage.",
    correct: "fixes",
    tts: "Tom fixes cars at the garage.",
  },
  {
    id: "ps-r5-ex8",
    template: "The man carry heavy boxes. → The man [gap] heavy boxes.",
    correct: "carries",
    tts: "The man carries heavy boxes.",
  },
  {
    id: "ps-r5-ex9",
    template:
      "The teacher teach three subjects. → The teacher [gap] three subjects.",
    correct: "teaches",
    tts: "The teacher teaches three subjects.",
  },
  {
    id: "ps-r5-ex10",
    template: "Mary go to piano lessons. → Mary [gap] to piano lessons.",
    correct: "goes",
    tts: "Mary goes to piano lessons.",
  },
],


  

// -------------------- Room 6 --------------------
6: [
  {
    id: "ps-r6-ex1",
    prompt: "(plays / the guitar / he / every weekend)",
    correct: "he plays the guitar every weekend",
    tts: "He plays the guitar every weekend.",
  },
  {
    id: "ps-r6-ex2",
    prompt: "(washes / on Sundays / the car / my father)",
    correct: "my father washes the car on sundays",
    tts: "My father washes the car on sundays.",
  },
  {
    id: "ps-r6-ex3",
    prompt: "(reads / she / the newspaper / every morning)",
    correct: "she reads the newspaper every morning",
    tts: "She reads the newspaper every morning.",
  },
  {
    id: "ps-r6-ex4",
    prompt: "(walks / the boy / every day / to school)",
    correct: "the boy walks to school every day",
    tts: "The boy walks to school every day.",
  },
  {
    id: "ps-r6-ex5",
    prompt: "(cooks / my aunt / dinner / every evening)",
    correct: "my aunt cooks dinner every evening",
    tts: "My aunt cooks dinner every evening.",
  },
  {
    id: "ps-r6-ex6",
    prompt: "(writes / the artist / new songs)",
    correct: "the artist writes new songs",
    tts: "The artist writes new songs.",
  },
  {
    id: "ps-r6-ex7",
    prompt: "(paints / the worker / the house)",
    correct: "the worker paints the house",
    tts: "The worker paints the house.",
  },
  {
    id: "ps-r6-ex8",
    prompt: "(takes / amazing photos / my friend)",
    correct: "my friend takes amazing photos",
    tts: "My friend takes amazing photos.",
  },
  {
    id: "ps-r6-ex9",
    prompt: "(drops / the baby / the toys)",
    correct: "the baby drops the toys",
    tts: "The baby drops the toys.",
  },
  {
    id: "ps-r6-ex10",
    prompt: "(opens / at 10 o’clock / the museum)",
    correct: "the museum opens at 10 o'clock",
    tts: "The museum opens at 10 o'clock.",
  },
],



// -------------------- Room 7 --------------------
7: [
  {
    id: "ps-r7-ex1",
    prompt: "El repara telefoane.",
    correct: "he repairs phones",
    tts: "He repairs phones.",
  },
  {
    id: "ps-r7-ex2",
    prompt: "Ea conduce o masina rosie.",
    correct: "she drives a red car",
    tts: "She drives a red car.",
  },
  {
    id: "ps-r7-ex3",
    prompt: "Fratele meu gaseste solutii rapid.",
    correct: "my brother finds solutions quickly",
    tts: "My brother finds solutions quickly.",
  },
  {
    id: "ps-r7-ex4",
    prompt: "Bunica mea face prajituri delicioase.",
    correct: "my grandmother makes delicious cakes",
    tts: "My grandmother makes delicious cakes.",
  },
  {
    id: "ps-r7-ex5",
    prompt: "Tom deschide magazinul la ora 9.",
    correct: "tom opens the shop at 9 o'clock",
    tts: "Tom opens the shop at 9 o'clock.",
  },
  {
    id: "ps-r7-ex6",
    prompt: "Cainele se joaca cu jucariile.",
    correct: "the dog plays with the toys",
    tts: "The dog plays with the toys.",
  },
  {
    id: "ps-r7-ex7",
    prompt: "Ei construiesc case moderne.",
    correct: "they build modern houses",
    tts: "They build modern houses.",
  },
  {
    id: "ps-r7-ex8",
    prompt: "El aduce florile in fiecare zi.",
    correct: "he brings the flowers every day",
    tts: "He brings the flowers every day.",
  },
  {
    id: "ps-r7-ex9",
    prompt: "Sora mea canta foarte frumos.",
    correct: "my sister sings very beautifully",
    tts: "My sister sings very beautifully.",
  },
  {
    id: "ps-r7-ex10",
    prompt: "Copilul deseneaza pe hartie.",
    correct: "the child draws on the paper",
    tts: "The child draws on the paper.",
  },
],
};

 
export function getPsAffirmativeExercises(roomNumber) {
  return PS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PS_AFFIRMATIVE_GLOSSARY_BY_ROOM = {
  1: [
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
],
2: [
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
],
3: [
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
],
4: [
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
],
5: [
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
  { tts: "teach three subjects",
    word: "teach three subjects",
    meaning: "a preda trei materii",
  },
  {
    tts: "go to piano lessons",
    word: "go to piano lessons",
    meaning: "a merge la lecții de pian",
  },
],
6: [
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
],
7:  [
    { tts: "today", word: "today", meaning: "astăzi" },
  ],
};

export function getPsAffirmativeGlossaryItems(roomNumber) {
  return PS_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PS_AFFIRMATIVE_SECTION_ID = "affirmative";
const PS_AFFIRMATIVE_SECTION_LABEL =
  PS_SECTIONS.find((s) => s.id === PS_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const PS_AFFIRMATIVE_ROOMS = Array.from({ length: PS_ROOMS_PER_SECTION }, (_, idx) => {
  const roomNumber = idx + 1;
  return {
    sectionId: PS_AFFIRMATIVE_SECTION_ID,
    sectionLabel: PS_AFFIRMATIVE_SECTION_LABEL,
    roomNumber,
    exercises: PS_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
  };
});
