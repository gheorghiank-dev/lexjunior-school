import { PS_ROOMS_PER_SECTION, PS_SECTIONS } from "../ps-core/config.js";




// -------------------- Room 1 --------------------

export const PS_NEGATIVE_EXERCISES_BY_ROOM = {
1: [
  {
    id: 1,
    template: "She [gap] like carrots.",
    correct: "doesn't",
    tts: "She doesn't like carrots.",
  },
  {
    id: 2,
    template: "They [gap] watch TV in the morning.",
    correct: "don't",
    tts: "They don't watch TV in the morning.",
  },
  {
    id: 3,
    template: "My brother [gap] play tennis.",
    correct: "doesn't",
    tts: "My brother doesn't play tennis.",
  },
  {
    id: 4,
    template: "I [gap] eat fast food.",
    correct: "don't",
    tts: "I don't eat fast food.",
  },
  {
    id: 5,
    template: "Michael [gap] read in bed.",
    correct: "doesn't",
    tts: "Michael doesn't read in bed.",
  },
  {
    id: 6,
    template: "We [gap] drink soda.",
    correct: "don't",
    tts: "We don't drink soda.",
  },
  {
    id: 7,
    template: "The dog [gap] bark at strangers.",
    correct: "doesn't",
    tts: "The dog doesn't bark at strangers.",
  },
  {
    id: 8,
    template: "You [gap] need that book.",
    correct: "don't",
    tts: "You don't need that book.",
  },
  {
    id: 9,
    template: "Anna [gap] study on Saturdays.",
    correct: "doesn't",
    tts: "Anna doesn't study on Saturdays.",
  },
  {
    id: 10,
    template: "I [gap] go to the gym on Mondays.",
    correct: "don't",
    tts: "I don't go to the gym on Mondays.",
  },
],



// -------------------- Room 2 --------------------
2: [
  {
    id: 1,
    template: "I [gap] understand this exercise.",
    correct: "don't",
    tts: "I don't understand this exercise.",
  },
  {
    id: 2,
    template: "Sarah [gap] live near the school.",
    correct: "doesn't",
    tts: "Sarah doesn't live near the school.",
  },
  {
    id: 3,
    template: "They [gap] want ice cream.",
    correct: "don't",
    tts: "They don't want ice cream.",
  },
  {
    id: 4,
    template: "He [gap] like loud music.",
    correct: "doesn't",
    tts: "He doesn't like loud music.",
  },
  {
    id: 5,
    template: "We [gap] have classes today.",
    correct: "don't",
    tts: "We don't have classes today.",
  },
  {
    id: 6,
    template: "My parents [gap] cook dinner on Fridays.",
    correct: "don't",
    tts: "My parents don't cook dinner on Fridays.",
  },
  {
    id: 7,
    template: "The teacher [gap] speak Spanish.",
    correct: "doesn't",
    tts: "The teacher doesn't speak Spanish.",
  },
  {
    id: 8,
    template: "You [gap] know my cousin.",
    correct: "don't",
    tts: "You don't know my cousin.",
  },
  {
    id: 9,
    template: "Emma [gap] drink milk.",
    correct: "doesn't",
    tts: "Emma doesn't drink milk.",
  },
  {
    id: 10,
    template: "1I [gap] play the piano.",
    correct: "don't",
    tts: "I don't play the piano.",
  },
],



// -------------------- Room 3 --------------------
3: [
  {
    id: 1,
    template: "She loves chocolate. → She [gap] chocolate.",
    // Student writes the full negative verb form (aux + base verb)
    // e.g., "doesn't love" / "don't walk".
    correct: "doesn't love",
    tts: "She doesn't love chocolate.",
  },
  {
    id: 2,
    template:
      "They walk to school every day. → They [gap] to school every day.",
    correct: "don't walk",
    tts: "They don't walk to school every day.",
  },
  {
    id: 3,
    template: "He plays basketball. → He [gap] basketball.",
    correct: "doesn't play",
    tts: "He doesn't play basketball.",
  },
  {
    id: 4,
    template: "I read in the evening. → I [gap] in the evening.",
    correct: "don't read",
    tts: "I don't read in the evening.",
  },
  {
    id: 5,
    template:
      "Emma visits her aunt every weekend. → Emma [gap] her aunt every weekend.",
    correct: "doesn't visit",
    tts: "Emma doesn't visit her aunt every weekend.",
  },
  {
    id: 6,
    template: "We travel in summer. → We [gap] in summer.",
    correct: "don't travel",
    tts: "We don't travel in summer.",
  },
  {
    id: 7,
    template:
      "My mother cooks dinner every day. → My mother [gap] dinner every day.",
    correct: "doesn't cook",
    tts: "My mother doesn't cook dinner every day.",
  },
  {
    id: 8,
    template: "The dog barks at night. → The dog [gap] at night.",
    correct: "doesn't bark",
    tts: "The dog doesn't bark at night.",
  },
  {
    id: 9,
    template: "You study a lot. → You [gap] a lot.",
    correct: "don't study",
    tts: "You don't study a lot.",
  },
  {
    id: 10,
    template:
      "Mark drinks coffee in the morning. → Mark [gap] coffee in the morning.",
    correct: "doesn't drink",
    tts: "Mark doesn't drink coffee in the morning.",
  },
],



// -------------------- Room 4 --------------------
4: [
  {
    id: 1,
    prompt: "Alege varianta corectă.",
    correct: "a",
    tts: "He doesn't drive a car.",
    options: [
      { value: "a", label: "a) He doesn't drive a car." },
      { value: "b", label: "b) He don’t drive a car." },
      { value: "c", label: "c) He doesn’t drives a car." },
    ],
  },
  {
    id: 2,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "They don't go to school.",
    options: [
      { value: "a", label: "a) They doesn’t go to school." },
      { value: "b", label: "b) They don't go to school." },
      { value: "c", label: "c) They don’t goes to school." },
    ],
  },
  {
    id: 3,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "My sister doesn't cook.",
    options: [
      { value: "a", label: "a) My sister don’t cook." },
      { value: "b", label: "b) My sister doesn’t cooks." },
      { value: "c", label: "c) My sister doesn't cook." },
    ],
  },
  {
    id: 4,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "I don't speak French.",
    options: [
      { value: "a", label: "a) I doesn’t speak French." },
      { value: "b", label: "b) I don't speak French." },
      { value: "c", label: "c) I don’t speaks French." },
    ],
  },
  {
    id: 5,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "The cat doesn't sleep inside.",
    options: [
      { value: "a", label: "a) The cat don’t sleep inside." },
      { value: "b", label: "b) The cat doesn’t sleeps inside." },
      { value: "c", label: "c) The cat doesn't sleep inside." },
    ],
  },
  {
    id: 6,
    prompt: "Alege varianta corectă.",
    correct: "a",
    tts: "We don't like winter.",
    options: [
      { value: "a", label: "a) We don't like winter." },
      { value: "b", label: "b) We doesn’t like winter." },
      { value: "c", label: "c) We don’t likes winter." },
    ],
  },
  {
    id: 7,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "She doesn't read at night.",
    options: [
      { value: "a", label: "a) She don’t read at night." },
      { value: "b", label: "b) She doesn't read at night." },
      { value: "c", label: "c) She doesn't reads at night." },
    ],
  },
  {
    id: 8,
    prompt: "Alege varianta corectă.",
    correct: "c",
    tts: "The dog doesn't bark.",
    options: [
      { value: "a", label: "a) The dog don’t bark." },
      { value: "b", label: "b) The dog doesn’t barks." },
      { value: "c", label: "c) The dog doesn't bark." },
    ],
  },
  {
    id: 9,
    prompt: "Alege varianta corectă.",
    correct: "a",
    tts: "You don't need help.",
    options: [
      { value: "a", label: "a) You don't need help." },
      { value: "b", label: "b) You doesn’t need help." },
      { value: "c", label: "c) You don’t needs help." },
    ],
  },
  {
    id: 10,
    prompt: "Alege varianta corectă.",
    correct: "b",
    tts: "Mark doesn't write emails.",
    options: [
      { value: "a", label: "a) Mark don’t write emails." },
      { value: "b", label: "b) Mark doesn't write emails." },
      { value: "c", label: "c) Mark doesn’t writes emails." },
    ],
  },
],



// -------------------- Room 5 --------------------
5: [
  {
    id: 1,
    prompt: "(like / i / don't / apples)",
    correct: "i don't like apples",
    tts: "i don't like apples",
  },
  {
    id: 2,
    prompt: "(doesn't / coffee / she / drink)",
    correct: "she doesn't drink coffee",
    tts: "she doesn't drink coffee",
  },
  {
    id: 3,
    prompt: "(don't / Sundays / on / they / work)",
    correct: "they don't work on sundays",
    tts: "they don't work on sundays",
  },
  {
    id: 4,
    prompt: "(he / doesn't / play / football)",
    correct: "he doesn't play football",
    tts: "he doesn't play football",
  },
  {
    id: 5,
    prompt: "(tea / drink / maria / doesn't)",
    correct: "maria doesn't drink tea",
    tts: "maria doesn't drink tea",
  },
  {
    id: 6,
    prompt: "(we / don't / movies / watch)",
    correct: "we don't watch movies",
    tts: "we don't watch movies",
  },
  {
    id: 7,
    prompt: "(do / homework / their / don't / they)",
    correct: "they don't do their homework",
    tts: "they don't do their homework",
  },
  {
    id: 8,
    prompt: "(sleep / outside / the dog / doesn't)",
    correct: "the dog doesn't sleep outside",
    tts: "the dog doesn't sleep outside",
  },
  {
    id: 9,
    prompt: "(books / read / many / i / don't)",
    correct: "i don't read many books",
    tts: "i don't read many books",
  },
  {
    id: 10,
    prompt: "(the bus / early / doesn't / come)",
    correct: "the bus doesn't come early",
    tts: "the bus doesn't come early",
  },
],



// -------------------- Room 6 --------------------
6: [
  {
    id: 1,
    template: "He don’t likes pizza. → He [gap] pizza.",
    correct: "doesn't like",
    tts: "He doesn't like pizza.",
  },
  {
    id: 2,
    template: "They doesn’t live here. → They [gap] here.",
    correct: "don't live",
    tts: "They don't live here.",
  },
  {
    id: 3,
    template: "I doesn’t go to school by bike. → I [gap] to school by bike.",
    correct: "don't go",
    tts: "I don't go to school by bike.",
  },
  {
    id: 4,
    template: "The children don’t plays outside. → The children [gap] outside.",
    correct: "don't play",
    tts: "The children don't play outside.",
  },
  {
    id: 5,
    template: "My brother don’t watches TV. → My brother [gap] TV.",
    correct: "doesn't watch",
    tts: "My brother doesn't watch TV.",
  },
  {
    id: 6,
    template: "She don’t study English. → She [gap] English.",
    correct: "doesn't study",
    tts: "She doesn't study English.",
  },
  {
    id: 7,
    template: "We doesn’t have homework. → We [gap] homework.",
    correct: "don't have",
    tts: "We don't have homework.",
  },
  {
    id: 8,
    template: "The dog don’t bark loudly. → The dog [gap] loudly.",
    correct: "doesn't bark",
    tts: "The dog doesn't bark loudly.",
  },
  {
    id: 9,
    template: "You doesn’t know the answer. → You [gap] the answer.",
    correct: "don't know",
    tts: "You don't know the answer.",
  },
  {
    id: 10,
    template: "Anna don’t walks to school. → Anna [gap] to school.",
    correct: "doesn't walk",
    tts: "Anna doesn't walk to school.",
  },
],



// -------------------- Room 7 --------------------
7: [
  {
    id: 1,
    prompt: "Eu nu dansez dimineata.",
    correct: "i don't dance in the morning",
    tts: "i don't dance in the morning",
  },
  {
    id: 2,
    prompt: "Ea nu citeste seara.",
    correct: "she doesn't read in the evening",
    tts: "she doesn't read in the evening",
  },
  {
    id: 3,
    prompt: "Ei nu traiesc in Italia.",
    correct: "they don't live in italy",
    tts: "they don't live in italy",
  },
  {
    id: 4,
    prompt: "Noi nu avem timp.",
    correct: "we don't have time",
    tts: "we don't have time",
  },
  {
    id: 5,
    prompt: "El nu invata engleza.",
    correct: "he doesn't study english",
    tts: "he doesn't study english",
  },
  {
    id: 6,
    prompt: "Tu nu muncesti duminica.",
    correct: "you don't work on sundays",
    tts: "you don't work on sundays",
  },
  {
    id: 7,
    prompt: "Copiii nu se joaca afara.",
    correct: "the children don't play outside",
    tts: "the children don't play outside",
  },
  {
    id: 8,
    prompt: "Mama nu gateste joia.",
    correct: "mum doesn't cook on thursdays",
    tts: "mum doesn't cook on thursdays",
  },
  {
    id: 9,
    prompt: "Noi nu avem bani.",
    correct: "we don't have money",
    tts: "we don't have money",
  },
  {
    id: 10,
    prompt: "Cainele nu doarme aici.",
    correct: "the dog doesn't sleep here",
    tts: "the dog doesn't sleep here",
  },
],
};

export function getPsNegativeExercises(roomNumber) {
  return PS_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PS_NEGATIVE_GLOSSARY_BY_ROOM = {
  1: [{ tts: "don't", word: "don't", meaning: "nu (do not)" },
  { tts: "doesn't", word: "doesn't", meaning: "nu (does not)" },
  { tts: "like", word: "like", meaning: "a plăcea" },
  { tts: "carrots", word: "carrots", meaning: "morcovi" },
  { tts: "watch TV", word: "watch TV", meaning: "a te uita la TV" },
  { tts: "in the morning", word: "in the morning", meaning: "dimineața" },
  { tts: "brother", word: "brother", meaning: "frate" },
  { tts: "play tennis", word: "play tennis", meaning: "a juca tenis" },
  { tts: "fast food", word: "fast food", meaning: "mâncare tip fast-food" },
  { tts: "read in bed", word: "read in bed", meaning: "a citi în pat" },
  { tts: "drink soda", word: "drink soda", meaning: "a bea suc carbogazos" },
  {
    tts: "bark at strangers",
    word: "bark at strangers",
    meaning: "a lătra la străini",
  },
  {
    tts: "need that book",
    word: "need that book",
    meaning: "a avea nevoie de cartea aceea",
  },
  {
    tts: "study on Saturdays",
    word: "study on Saturdays",
    meaning: "a învăța sâmbăta",
  },
  {
    tts: "go to the gym on Mondays",
    word: "go to the gym on Mondays",
    meaning: "a merge la sală lunea" }],

  2: [{ tts: "don't", word: "don't", meaning: "nu (do not)" },
  { tts: "doesn't", word: "doesn't", meaning: "nu (does not)" },
  { tts: "understand", word: "understand", meaning: "a înțelege" },
  { tts: "this exercise", word: "this exercise", meaning: "acest exercițiu" },
  {
    tts: "live near the school",
    word: "live near the school",
    meaning: "a locui aproape de școală",
  },
  {
    tts: "want ice cream",
    word: "want ice cream",
    meaning: "a vrea înghețată",
  },
  {
    tts: "like loud music",
    word: "like loud music",
    meaning: "a-i plăcea muzica tare",
  },
  {
    tts: "have classes today",
    word: "have classes today",
    meaning: "a avea ore azi",
  },
  { tts: "parents", word: "parents", meaning: "părinți" },
  {
    tts: "cook dinner on Fridays",
    word: "cook dinner on Fridays",
    meaning: "a găti cina vinerea",
  },
  { tts: "teacher", word: "teacher", meaning: "profesor / profesoară" },
  { tts: "speak Spanish", word: "speak Spanish", meaning: "a vorbi spaniolă" },
  {
    tts: "know my cousin",
    word: "know my cousin",
    meaning: "a-l/o cunoaște pe vărul/verișoara mea",
  },
  { tts: "drink milk", word: "drink milk", meaning: "a bea lapte" },
  { tts: "play the piano", word: "play the piano", meaning: "a cânta la pian" }],

  3: [{ tts: "love", word: "love", meaning: "a iubi" },
  { tts: "chocolate", word: "chocolate", meaning: "ciocolată" },
  {
    tts: "play basketball",
    word: "play basketball",
    meaning: "a juca baschet",
  },
  { tts: "read", word: "read", meaning: "a citi" },
  { tts: "in the evening", word: "in the evening", meaning: "seara" },
  { tts: "visit", word: "visit", meaning: "a vizita" },
  { tts: "aunt", word: "aunt", meaning: "mătușă" },
  {
    tts: "every weekend",
    word: "every weekend",
    meaning: "în fiecare weekend",
  },
  { tts: "travel", word: "travel", meaning: "a călători" },
  { tts: "in summer", word: "in summer", meaning: "vara" },
  { tts: "cook dinner", word: "cook dinner", meaning: "a găti cina" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "bark", word: "bark", meaning: "a lătra" },
  { tts: "at night", word: "at night", meaning: "noaptea" },
  { tts: "drink coffee", word: "drink coffee", meaning: "a bea cafea" },
  { tts: "in the morning", word: "in the morning", meaning: "dimineața" }],

  4: [{ tts: "don't", word: "don't", meaning: "nu (pentru I / you / we / they)" },
  { tts: "doesn't", word: "doesn't", meaning: "nu (pentru he / she / it)" },
  { tts: "drive a car", word: "drive a car", meaning: "a conduce o mașină" },
  { tts: "go to school", word: "go to school", meaning: "a merge la școală" },
  { tts: "cook", word: "cook", meaning: "a găti" },
  { tts: "speak French", word: "speak French", meaning: "a vorbi franceza" },
  { tts: "sleep inside", word: "sleep inside", meaning: "a dormi în casă" },
  { tts: "like winter", word: "like winter", meaning: "a-i plăcea iarna" },
  { tts: "read at night", word: "read at night", meaning: "a citi noaptea" },
  { tts: "need help", word: "need help", meaning: "a avea nevoie de ajutor" },
  { tts: "write emails", word: "write emails", meaning: "a scrie emailuri" }],

  5: [{ tts: "like", word: "like", meaning: "a plăcea" },
  { tts: "apples", word: "apples", meaning: "mere" },
  { tts: "drink coffee", word: "drink coffee", meaning: "a bea cafea" },
  { tts: "play tennis", word: "play tennis", meaning: "a juca tenis" },
  { tts: "on Sunday", word: "on Sunday", meaning: "duminica" },
  { tts: "play football", word: "play football", meaning: "a juca fotbal" },
  { tts: "drink tea", word: "drink tea", meaning: "a bea ceai" },
  { tts: "watch movies", word: "watch movies", meaning: "a se uita la filme" },
  { tts: "often", word: "often", meaning: "des" },
  { tts: "do homework", word: "do homework", meaning: "a-și face temele" },
  { tts: "teacher", word: "teacher", meaning: "profesor/profesoară" },
  {
    tts: "start the lesson",
    word: "start the lesson",
    meaning: "a începe ora",
  },
  { tts: "late", word: "late", meaning: "târziu" },
  {
    tts: "call your friends",
    word: "call your friends",
    meaning: "a-ți suna prietenii",
  },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  { tts: "come early", word: "come early", meaning: "a veni devreme"  }],

  6: [{ tts: "like pizza", word: "like pizza", meaning: "a-i plăcea pizza" },
  { tts: "live here", word: "live here", meaning: "a locui aici" },
  {
    tts: "go to school by bike",
    word: "go to school by bike",
    meaning: "a merge la școală cu bicicleta",
  },
  { tts: "play outside", word: "play outside", meaning: "a se juca afară" },
  { tts: "watch TV", word: "watch TV", meaning: "a se uita la TV" },
  { tts: "study English", word: "study English", meaning: "a învăța engleză" },
  { tts: "have homework", word: "have homework", meaning: "a avea teme" },
  { tts: "bark loudly", word: "bark loudly", meaning: "a lătra tare" },
  {
    tts: "know the answer",
    word: "know the answer",
    meaning: "a ști răspunsul",
  },
  {
    tts: "walk to school",
    word: "walk to school",
    meaning: "a merge pe jos la școală" }],

  7: [{ tts: "dance", word: "dance", meaning: "a dansa" },
  { tts: "read", word: "read", meaning: "a citi" },
  { tts: "in the evening", word: "in the evening", meaning: "seara" },
  { tts: "live in Italy", word: "live in Italy", meaning: "a locui în Italia" },
  { tts: "have time", word: "have time", meaning: "a avea timp" },
  { tts: "study English", word: "study English", meaning: "a studia engleza" },
  {
    tts: "work on Sundays",
    word: "work on Sundays",
    meaning: "a munci duminica",
  },
  { tts: "play outside", word: "play outside", meaning: "a se juca afară" },
  { tts: "cook", word: "cook", meaning: "a găti" },
  {
    tts: "on Thursdays",
    word: "on Thursdays",
    meaning: "joia / în zilele de joi",
  },
  { tts: "have money", word: "have money", meaning: "a avea bani" },
  { tts: "dog", word: "dog", meaning: "câine" },
  { tts: "sleep here", word: "sleep here", meaning: "a dormi aici" },
  { tts: "mum", word: "mum", meaning: "mama" }],
  
};

export function getPsNegativeGlossaryItems(roomNumber) {
  return PS_NEGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PS_NEGATIVE_SECTION_ID = "negative";
const PS_NEGATIVE_SECTION_LABEL =
  PS_SECTIONS.find((s) => s.id === PS_NEGATIVE_SECTION_ID)?.title ?? "Negative";

export const PS_NEGATIVE_ROOMS = Array.from({ length: PS_ROOMS_PER_SECTION }, (_, idx) => {
  const roomNumber = idx + 1;
  return {
    sectionId: PS_NEGATIVE_SECTION_ID,
    sectionLabel: PS_NEGATIVE_SECTION_LABEL,
    roomNumber,
    exercises: PS_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
  };
});






