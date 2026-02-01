// Present Simple > Uses content registry
// Sprint 16: start moving *content* (exercises, dictionaries, intros, messages) out of page files.
//
// Guardrails:
// - NO UX / gating / keys changes
// - keep templates intact (PsRoomTemplateV1 renders the same)

import React from "react";
import { Link } from "react-router-dom";

import { psMapPath } from "../ps-paths.js";

import { McqExerciseList } from "../../../shared/exercises/McqExerciseList.jsx";
import { CheckboxExerciseList } from "../../../shared/exercises/CheckboxExerciseList.jsx";
import { GapSentenceExerciseList } from "../../../shared/exercises/GapSentenceExerciseList.jsx";

import { presentSimpleUsesLexHints as usesLexHints } from "../../lex-hints/present-simple/index.js";

import { validateRoomRegistry } from "../../../core/registry/validate-room-registry.js";

import { RuneTranslationExerciseList } from "../components/RuneTranslationExerciseList.jsx";

const SECTION_ID = "uses";

// Room 1
const USES_ROOM_1_EXERCISES = [
  {
    id: 1,
    prompt: "The museum opens at 9 a.m.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "N",
    tts: "The museum opens at 9 a.m.",
  },
  {
    id: 2,
    prompt: "We play tennis on Saturdays.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "We play tennis on Saturdays.",
  },
  {
    id: 3,
    prompt: "My brother lives in Madrid.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "N",
    tts: "My brother lives in Madrid.",
  },
  {
    id: 4,
    prompt: "He usually walks to work.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "He usually walks to work.",
  },
  {
    id: 5,
    prompt: "The train leaves at 6:30.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "N",
    tts: "The train leaves at 6:30.",
  },
  {
    id: 6,
    prompt: "I get up at 7 o’clock.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "I get up at 7 o’clock.",
  },
  {
    id: 7,
    prompt: "The film starts at 8 p.m.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "N",
    tts: "The film starts at 8 p.m.",
  },
  {
    id: 8,
    prompt: "We have English on Mondays.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "We have English on Mondays.",
  },
  {
    id: 9,
    prompt: "She goes to school every day.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "She goes to school every day.",
  },
  {
    id: 10,
    prompt: "My dad drinks coffee every morning.",
    options: [
      {
        value: "R",
        label: "Rutina",
      },
      {
        value: "N",
        label: "Nu este rutina",
      },
    ],
    correct: "R",
    tts: "My dad drinks coffee every morning.",
  },
];

const USES_ROOM_1_GLOSSARY_ITEMS = [
  {
    tts: "museum",
    word: "museum",
    meaning: "muzeu",
  },
  {
    tts: "opens",
    word: "opens",
    meaning: "se deschide",
  },
  {
    tts: "play tennis",
    word: "play tennis",
    meaning: "a juca tenis",
  },
  {
    tts: "brother",
    word: "brother",
    meaning: "frate",
  },
  {
    tts: "lives",
    word: "lives",
    meaning: "locuiește",
  },
  {
    tts: "Madrid",
    word: "Madrid",
    meaning: "Madrid",
  },
  {
    tts: "usually",
    word: "usually",
    meaning: "de obicei",
  },
  {
    tts: "walks to work",
    word: "walks to work",
    meaning: "merge pe jos la serviciu",
  },
  {
    tts: "train",
    word: "train",
    meaning: "tren",
  },
  {
    tts: "leaves",
    word: "leaves",
    meaning: "pleacă",
  },
  {
    tts: "get up",
    word: "get up",
    meaning: "a se trezi",
  },
  {
    tts: "o'clock",
    word: "o'clock",
    meaning: "fix (ora exactă)",
  },
  {
    tts: "film",
    word: "film",
    meaning: "film",
  },
  {
    tts: "starts",
    word: "starts",
    meaning: "începe",
  },
  {
    tts: "have English",
    word: "have English",
    meaning: "a avea ora de engleză",
  },
  {
    tts: "on Mondays",
    word: "on Mondays",
    meaning: "în zilele de luni",
  },
  {
    tts: "every day",
    word: "every day",
    meaning: "în fiecare zi",
  },
  {
    tts: "drinks coffee",
    word: "drinks coffee",
    meaning: "bea cafea",
  },
  {
    tts: "every morning",
    word: "every morning",
    meaning: "în fiecare dimineață",
  },
];

// Room 2
const USES_ROOM_2_EXERCISES = [
  {
    id: 1,
    prompt: "Water boils at 100°C.",
    correct: "true",
    tts: "Water boils at 100°C.",
  },
  {
    id: 2,
    prompt: "The Earth orbits the Sun.",
    correct: "true",
    tts: "The Earth orbits the Sun.",
  },
  {
    id: 3,
    prompt: "My brother works in a bank.",
    correct: "false",
    tts: "My brother works in a bank.",
  },
  {
    id: 4,
    prompt: "Cats have four legs.",
    correct: "true",
    tts: "Cats have four legs.",
  },
  {
    id: 5,
    prompt: "We live in Bucharest.",
    correct: "false",
    tts: "We live in Bucharest.",
  },
  {
    id: 6,
    prompt: "Metal expands when it is heated.",
    correct: "true",
    tts: "Metal expands when it is heated.",
  },
  {
    id: 7,
    prompt: "Children need sleep to grow.",
    correct: "true",
    tts: "Children need sleep to grow.",
  },
  {
    id: 8,
    prompt: "She studies French on Mondays.",
    correct: "false",
    tts: "She studies French on Mondays.",
  },
  {
    id: 9,
    prompt: "Sugar dissolves in water.",
    correct: "true",
    tts: "Sugar dissolves in water.",
  },
  {
    id: 10,
    prompt: "The Sun rises in the east.",
    correct: "true",
    tts: "The Sun rises in the east.",
  },
];

const USES_ROOM_2_GLOSSARY_ITEMS = [
  {
    tts: "water",
    word: "water",
    meaning: "apă",
  },
  {
    tts: "boils",
    word: "boils",
    meaning: "fierbe",
  },
  {
    tts: "orbits",
    word: "orbits",
    meaning: "se învârte în jurul",
  },
  {
    tts: "the Sun",
    word: "the Sun",
    meaning: "Soarele",
  },
  {
    tts: "works in a bank",
    word: "works in a bank",
    meaning: "lucrează într-o bancă",
  },
  {
    tts: "cats",
    word: "cats",
    meaning: "pisici",
  },
  {
    tts: "have four legs",
    word: "have four legs",
    meaning: "au patru picioare",
  },
  {
    tts: "We live in Bucharest.",
    word: "We live in Bucharest",
    meaning: "noi locuim în București",
  },
  {
    tts: "metal",
    word: "metal",
    meaning: "metal",
  },
  {
    tts: "expands",
    word: "expands",
    meaning: "se dilată",
  },
  {
    tts: "when it is heated",
    word: "when it is heated",
    meaning: "când este încălzit",
  },
  {
    tts: "children",
    word: "children",
    meaning: "copiii",
  },
  {
    tts: "need sleep",
    word: "need sleep",
    meaning: "au nevoie de somn",
  },
  {
    tts: "to grow",
    word: "to grow",
    meaning: "ca să crească",
  },
  {
    tts: "studies French",
    word: "studies French",
    meaning: "studiază franceza",
  },
  {
    tts: "on Mondays",
    word: "on Mondays",
    meaning: "în zilele de luni",
  },
  {
    tts: "sugar",
    word: "sugar",
    meaning: "zahărul",
  },
  {
    tts: "dissolves in water",
    word: "dissolves in water",
    meaning: "se dizolvă în apă",
  },
  {
    tts: "rises in the east",
    word: "rises in the east",
    meaning: "răsare la est",
  },
];

// Room 3
const USES_ROOM_3_EXERCISES = [
  {
    id: 1,
    template: "The train [gap] at 6:30.\n            (to leave)",
    correct: "leaves",
    tts: "The train leaves at 6:30.",
  },
  {
    id: 2,
    template: "School [gap] at 8 o’clock.\n            (to start)",
    correct: "starts",
    tts: "School starts at 8 o’clock.",
  },
  {
    id: 3,
    template: "The film [gap] at 9 p.m.\n            (to begin)",
    correct: "begins",
    tts: "The film begins at 9 p.m.",
  },
  {
    id: 4,
    template: "The museum [gap] at 9 a.m.\n            (to open)",
    correct: "opens",
    tts: "The museum opens at 9 a.m.",
  },
  {
    id: 5,
    template: "The museum [gap] at 5 p.m.\n            (to close)",
    correct: "closes",
    tts: "The museum closes at 5 p.m.",
  },
  {
    id: 6,
    template: "The bus [gap] at quarter past seven.\n            (to leave)",
    correct: "leaves",
    tts: "The bus leaves at quarter past seven.",
  },
  {
    id: 7,
    template: "The shop [gap] at 10 o’clock on Sundays.\n            (to open)",
    correct: "opens",
    tts: "The shop opens at 10 o’clock on Sundays.",
  },
  {
    id: 8,
    template:
      "The plane [gap] at 4:20 tomorrow morning.\n            (to land)",
    correct: "lands",
    tts: "The plane lands at 4:20 tomorrow morning.",
  },
  {
    id: 9,
    template: "The shop [gap] at 10 p.m. every day.\n            (to close)",
    correct: "closes",
    tts: "The shop closes at 10 p.m. every day.",
  },
  {
    id: 10,
    template: "The train [gap] at platform 4 at 7:10.\n            (to arrive)",
    correct: "arrives",
    tts: "The train arrives at platform 4 at 7:10.",
  },
];

const USES_ROOM_3_GLOSSARY_ITEMS = [
  {
    tts: "train",
    word: "train",
    meaning: "tren",
  },
  {
    tts: "leave",
    word: "leave",
    meaning: "a pleca",
  },
  {
    tts: "start",
    word: "start",
    meaning: "a începe",
  },
  {
    tts: "begin",
    word: "begin",
    meaning: "a începe",
  },
  {
    tts: "museum",
    word: "museum",
    meaning: "muzeu",
  },
  {
    tts: "open",
    word: "open",
    meaning: "a deschide",
  },
  {
    tts: "close",
    word: "close",
    meaning: "a închide",
  },
  {
    tts: "bus",
    word: "bus",
    meaning: "autobuz",
  },
  {
    tts: "shop",
    word: "shop",
    meaning: "magazin",
  },
  {
    tts: "land",
    word: "land",
    meaning: "a ateriza",
  },
  {
    tts: "arrive",
    word: "arrive",
    meaning: "a sosi",
  },
  {
    tts: "at quarter past seven",
    word: "at quarter past seven",
    meaning: "la și un sfert",
  },
  {
    tts: "at ten o’clock",
    word: "at ten o’clock",
    meaning: "la ora zece fix",
  },
  {
    tts: "on Sundays",
    word: "on Sundays",
    meaning: "duminica",
  },
  {
    tts: "tomorrow morning",
    word: "tomorrow morning",
    meaning: "mâine dimineață",
  },
  {
    tts: "every day",
    word: "every day",
    meaning: "în fiecare zi",
  },
];

// Room 4
const USES_ROOM_4_EXERCISES = [
  {
    id: 1,
    prompt: "They live in Cluj.",
    correct: "true",
    tts: "They live in Cluj.",
  },
  {
    id: 2,
    prompt: "She stays in a hotel in the mountains every winter.",
    correct: "false",
    tts: "She stays in a hotel in the mountains every winter.",
  },
  {
    id: 3,
    prompt: "He works in IT.",
    correct: "true",
    tts: "He works in IT.",
  },
  {
    id: 4,
    prompt: "We visit our cousins for a few days every summer.",
    correct: "false",
    tts: "We visit our cousins for a few days every summer.",
  },
  {
    id: 5,
    prompt: "My parents have a small house in the country.",
    correct: "true",
    tts: "My parents have a small house in the country.",
  },
  {
    id: 6,
    prompt: "I work on a big project every summer.",
    correct: "false",
    tts: "I work on a big project every summer.",
  },
  {
    id: 7,
    prompt: "She believes this is a good idea.",
    correct: "true",
    tts: "She believes this is a good idea.",
  },
  {
    id: 8,
    prompt: "I wear a uniform at school.",
    correct: "true",
    tts: "I wear a uniform at school.",
  },
  {
    id: 9,
    prompt: "My sister studies at a medical university.",
    correct: "true",
    tts: "My sister studies at a medical university.",
  },
  {
    id: 10,
    prompt: "They own a small café in town.",
    correct: "true",
    tts: "They own a small café in town.",
  },
];

const USES_ROOM_4_GLOSSARY_ITEMS = [
  {
    tts: "live",
    word: "live",
    meaning: "a locui",
  },
  {
    tts: "stay",
    word: "stay",
    meaning: "a sta / a rămâne temporar",
  },
  {
    tts: "work",
    word: "work",
    meaning: "a lucra",
  },
  {
    tts: "visit",
    word: "visit",
    meaning: "a vizita",
  },
  {
    tts: "have",
    word: "have",
    meaning: "a avea",
  },
  {
    tts: "believe",
    word: "believe",
    meaning: "a crede",
  },
  {
    tts: "wear",
    word: "wear",
    meaning: "a purta",
  },
  {
    tts: "study",
    word: "study",
    meaning: "a studia",
  },
  {
    tts: "own",
    word: "own",
    meaning: "a deține",
  },
  {
    tts: "hotel",
    word: "hotel",
    meaning: "hotel",
  },
  {
    tts: "mountains",
    word: "mountains",
    meaning: "munți",
  },
  {
    tts: "cousins",
    word: "cousins",
    meaning: "veri / verișori",
  },
  {
    tts: "house in the country",
    word: "house in the country",
    meaning: "casă la țară",
  },
  {
    tts: "project",
    word: "project",
    meaning: "proiect",
  },
  {
    tts: "uniform",
    word: "uniform",
    meaning: "uniformă",
  },
  {
    tts: "medical university",
    word: "medical university",
    meaning: "universitate de medicină",
  },
  {
    tts: "café in town",
    word: "café in town",
    meaning: "cafenea în oraș",
  },
  {
    tts: "every summer",
    word: "every summer",
    meaning: "în fiecare vară",
  },
  {
    tts: "every winter",
    word: "every winter",
    meaning: "în fiecare iarnă",
  },
];

// Room 5
const USES_ROOM_5_EXERCISES = [
  {
    id: 1,
    prompt: "First you cut the onions.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🍳 Instrucțiune",
    tts: "First you cut the onions.",
  },
  {
    id: 2,
    prompt: "Then you add the tomatoes and stir.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🍳 Instrucțiune",
    tts: "Then you add the tomatoes and stir.",
  },
  {
    id: 3,
    prompt: "You heat the oven to 180 degrees.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🍳 Instrucțiune",
    tts: "You heat the oven to 180 degrees.",
  },
  {
    id: 4,
    prompt: "You go straight ahead and then you turn left.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🧭 Direcție",
    tts: "You go straight ahead and then you turn left.",
  },
  {
    id: 5,
    prompt: "You cross the bridge and you see the museum on the right.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🧭 Direcție",
    tts: "You cross the bridge and you see the museum on the right.",
  },
  {
    id: 6,
    prompt: "You take the second street on the left.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "🧭 Direcție",
    tts: "You take the second street on the left.",
  },
  {
    id: 7,
    prompt: "I usually cook dinner in the evening.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "⭐ Alt tip",
    tts: "I usually cook dinner in the evening.",
  },
  {
    id: 8,
    prompt: "My mum works in a restaurant.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "⭐ Alt tip",
    tts: "My mum works in a restaurant.",
  },
  {
    id: 9,
    prompt: "The train leaves from platform 2.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "⭐ Alt tip",
    tts: "The train leaves from platform 2.",
  },
  {
    id: 10,
    prompt: "He lives near the station.",
    options: [
      {
        value: "🍳 Instrucțiune",
        label: "🍳 Instrucțiune",
      },
      {
        value: "🧭 Direcție",
        label: "🧭 Direcție",
      },
      {
        value: "⭐ Alt tip",
        label: "⭐ Alt tip",
      },
    ],
    correct: "⭐ Alt tip",
    tts: "He lives near the station.",
  },
];

const USES_ROOM_5_GLOSSARY_ITEMS = [
  {
    tts: "cut",
    word: "cut",
    meaning: "a tăia",
  },
  {
    tts: "add",
    word: "add",
    meaning: "a adăuga",
  },
  {
    tts: "stir",
    word: "stir",
    meaning: "a amesteca",
  },
  {
    tts: "heat",
    word: "heat",
    meaning: "a încălzi",
  },
  {
    tts: "go straight ahead",
    word: "go straight ahead",
    meaning: "a merge drept înainte",
  },
  {
    tts: "turn left",
    word: "turn left",
    meaning: "a face la stânga",
  },
  {
    tts: "cross the bridge",
    word: "cross the bridge",
    meaning: "a traversa podul",
  },
  {
    tts: "take the second street",
    word: "take the second street",
    meaning: "a o lua pe a doua stradă",
  },
  {
    tts: "cook dinner",
    word: "cook dinner",
    meaning: "a găti cina",
  },
  {
    tts: "leave",
    word: "leave",
    meaning: "a pleca",
  },
  {
    tts: "live",
    word: "live",
    meaning: "a locui",
  },
  {
    tts: "onions",
    word: "onions",
    meaning: "cepe",
  },
  {
    tts: "tomatoes",
    word: "tomatoes",
    meaning: "roșii",
  },
  {
    tts: "oven",
    word: "oven",
    meaning: "cuptor",
  },
  {
    tts: "bridge",
    word: "bridge",
    meaning: "pod",
  },
  {
    tts: "museum",
    word: "museum",
    meaning: "muzeu",
  },
  {
    tts: "platform",
    word: "platform",
    meaning: "peron",
  },
  {
    tts: "station",
    word: "station",
    meaning: "gară",
  },
];

// Room 6
const USES_ROOM_6_EXERCISES = [
  {
    id: 1,
    prompt: "The bus leaves at 7:45.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "⏰ Program fix",
    tts: "The bus leaves at 7:45.",
  },
  {
    id: 2,
    prompt: "I brush my teeth every evening.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🔁 Rutina",
    tts: "I brush my teeth every evening.",
  },
  {
    id: 3,
    prompt: "The Earth goes around the Sun.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🌍 Adevar general",
    tts: "The Earth goes around the Sun.",
  },
  {
    id: 4,
    prompt: "She lives near the park.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🏠 Situatii permanente",
    tts: "She lives near the park.",
  },
  {
    id: 5,
    prompt: "Our English class starts at 10:30.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "⏰ Program fix",
    tts: "Our English class starts at 10:30.",
  },
  {
    id: 6,
    prompt: "Water freezes at 0°C.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🌍 Adevar general",
    tts: "Water freezes at 0°C.",
  },
  {
    id: 7,
    prompt: "My brother plays football on Saturdays.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🔁 Rutina",
    tts: "My brother plays football on Saturdays.",
  },
  {
    id: 8,
    prompt: "They work in a hospital.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🏠 Situatii permanente",
    tts: "They work in a hospital.",
  },
  {
    id: 9,
    prompt: "Our train arrives at 6:05.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "⏰ Program fix",
    tts: "Our train arrives at 6:05.",
  },
  {
    id: 10,
    prompt: "My cousin always forgets my birthday.",
    options: [
      {
        value: "🔁 Rutina",
        label: "🔁 Rutina",
      },
      {
        value: "🌍 Adevar general",
        label: "🌍 Adevar general",
      },
      {
        value: "⏰ Program fix",
        label: "⏰ Program fix",
      },
      {
        value: "🏠 Situatii permanente",
        label: "🏠 Situatii permanente",
      },
    ],
    correct: "🏠 Situatii permanente",
    tts: "My cousin always forgets my birthday.",
  },
];

const USES_ROOM_6_GLOSSARY_ITEMS = [
  {
    tts: "bus",
    word: "bus",
    meaning: "autobuz",
  },
  {
    tts: "leave",
    word: "leave",
    meaning: "a pleca",
  },
  {
    tts: "brush",
    word: "brush",
    meaning: "a peria",
  },
  {
    tts: "teeth",
    word: "teeth",
    meaning: "dinți",
  },
  {
    tts: "every evening",
    word: "every evening",
    meaning: "în fiecare seară",
  },
  {
    tts: "Earth",
    word: "Earth",
    meaning: "Pământul",
  },
  {
    tts: "go around",
    word: "go around",
    meaning: "a se învârti în jurul",
  },
  {
    tts: "Sun",
    word: "Sun",
    meaning: "Soarele",
  },
  {
    tts: "live",
    word: "live",
    meaning: "a locui",
  },
  {
    tts: "near the park",
    word: "near the park",
    meaning: "aproape de parc",
  },
  {
    tts: "class",
    word: "class",
    meaning: "oră / curs",
  },
  {
    tts: "start",
    word: "start",
    meaning: "a începe",
  },
  {
    tts: "water",
    word: "water",
    meaning: "apă",
  },
  {
    tts: "freeze",
    word: "freeze",
    meaning: "a îngheța",
  },
  {
    tts: "at zero degrees",
    word: "at zero degrees",
    meaning: "la zero grade",
  },
  {
    tts: "play football",
    word: "play football",
    meaning: "a juca fotbal",
  },
  {
    tts: "on Saturdays",
    word: "on Saturdays",
    meaning: "sâmbăta",
  },
  {
    tts: "work",
    word: "work",
    meaning: "a lucra",
  },
  {
    tts: "hospital",
    word: "hospital",
    meaning: "spital",
  },
  {
    tts: "train",
    word: "train",
    meaning: "tren",
  },
  {
    tts: "arrive",
    word: "arrive",
    meaning: "a sosi",
  },
  {
    tts: "at six o five",
    word: "at six o five",
    meaning: "la șase și cinci",
  },
  {
    tts: "forget",
    word: "forget",
    meaning: "a uita",
  },
  {
    tts: "birthday",
    word: "birthday",
    meaning: "zi de naștere",
  },
  {
    tts: "always",
    word: "always",
    meaning: "întotdeauna",
  },
];

// Room 7
const USES_ROOM_7_EXERCISES = [
  {
    id: 1,
    native: "Trenul pleacă la ora 7.",
    hint: "Este un program fix.",
    correct: "the train leaves at 7 o'clock.",
    tts: null,
  },
  {
    id: 2,
    native: "Noi locuim în București.",
    hint: "Este o situație permanentă.",
    correct: "we live in bucharest.",
    tts: null,
  },
  {
    id: 3,
    native: "Apa fierbe la 100 de grade.",
    hint: "Este un adevăr general.",
    correct: "water boils at 100 degrees.",
    tts: null,
  },
  {
    id: 4,
    native: "El se trezește la ora 6 în fiecare zi.",
    hint: "Este o rutină.",
    correct: "he gets up at 6 o'clock every day.",
    tts: null,
  },
  {
    id: 5,
    native: "Filmul începe la ora 9 seara.",
    hint: "Este un program fix.",
    correct: "the film begins at 9 o'clock in the evening.",
    tts: null,
  },
  {
    id: 6,
    native: "Ei merg la bunici duminica.",
    hint: "Este o rutină.",
    correct: "they go to their grandparents on sundays.",
    tts: null,
  },
  {
    id: 7,
    native: "Școala se deschide la ora 8.",
    hint: "Este un program fix.",
    correct: "school opens at 8 o'clock.",
    tts: null,
  },
  {
    id: 8,
    native: "Cartea povestește viața unui tânăr doctor.",
    hint: "Este o recenzie.",
    correct: "the book tells the story of a young doctor.",
    tts: null,
  },
  {
    id: 9,
    native: "Ei lucrează într-un spital.",
    hint: "Este o situație permanentă.",
    correct: "they work in a hospital.",
    tts: null,
  },
  {
    id: 10,
    native: "Serialul urmărește viața a patru prieteni.",
    hint: "Este o recenzie.",
    correct: "the series follows the life of four friends.",
    tts: null,
  },
];

const USES_ROOM_7_GLOSSARY_ITEMS = [
  { tts: "leave", word: "leave", meaning: "a pleca" },
  { tts: "live", word: "live", meaning: "a locui" },
  { tts: "boil", word: "boil", meaning: "a fierbe" },
  { tts: "get up", word: "get up", meaning: "a se trezi" },
  { tts: "begin", word: "begin", meaning: "a începe" },
  { tts: "go", word: "go", meaning: "a merge" },
  { tts: "open", word: "open", meaning: "a deschide" },
  { tts: "tell", word: "tell", meaning: "a spune" },
  { tts: "work", word: "work", meaning: "a lucra" },
  { tts: "follow", word: "follow", meaning: "a urmări / a urmăra" },
  { tts: "train", word: "train", meaning: "tren" },
  { tts: "water", word: "water", meaning: "apă" },
  { tts: "school", word: "school", meaning: "școală" },
  { tts: "film", word: "film", meaning: "film" },
  { tts: "book", word: "book", meaning: "carte" },
  { tts: "story", word: "story", meaning: "poveste" },
  { tts: "doctor", word: "doctor", meaning: "doctor" },
  { tts: "station", word: "station", meaning: "gară" },
  { tts: "hospital", word: "hospital", meaning: "spital" },
  { tts: "series", word: "series", meaning: "serial" },
  { tts: "life", word: "life", meaning: "viață" },
  { tts: "friends", word: "friends", meaning: "prieteni" },
  { tts: "grandparents", word: "grandparents", meaning: "bunici" },
  { tts: "bucharest", word: "bucharest", meaning: "București" },
  { tts: "at 7 o'clock", word: "at 7 o'clock", meaning: "la ora 7" },
  { tts: "at 6 o'clock", word: "at 6 o'clock", meaning: "la ora 6" },
  { tts: "at 8 o'clock", word: "at 8 o'clock", meaning: "la ora 8" },
  { tts: "at 9 o'clock", word: "at 9 o'clock", meaning: "la ora 9" },
  { tts: "every day", word: "every day", meaning: "în fiecare zi" },
  {
    tts: "on sundays",
    word: "on sundays",
    meaning: "duminica / în zilele de duminică",
  },
  { tts: "in the evening", word: "in the evening", meaning: "seara" },
  {
    tts: "the story of a young doctor",
    word: "the story of a young doctor",
    meaning: "povestea unui tânăr doctor",
  },
];

export const PS_USES_ROOMS = [
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 1,
    exercises: USES_ROOM_1_EXERCISES,
    lexHints: usesLexHints.room1,
    ExerciseListComponent: McqExerciseList,
    exerciseListProps: {
      showIndex: true,
      testIdPrefix: "ps-uses-room1",
    },
    cardIntro: (
      <>
        <h2 className="card-title">
          Bifează varianta corectă pentru fiecare propoziție.
        </h2>
      </>
    ),

    errorText:
      "Mai ai câteva răspunsuri de corectat – verifică ce e marcat cu roșu.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_1_GLOSSARY_ITEMS,
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 2,
    exercises: USES_ROOM_2_EXERCISES,
    lexHints: usesLexHints.room2,
    ExerciseListComponent: CheckboxExerciseList,
    exerciseListProps: { showIndex: true },
    cardIntro: (
      <>
        <h2 className="card-title">
          Bifează propozițiile care descriu adevăruri general valabile și legi
          ale naturii.
        </h2>
      </>
    ),

    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_2_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 3,
    exercises: USES_ROOM_3_EXERCISES,
    lexHints: usesLexHints.room3,
    ExerciseListComponent: GapSentenceExerciseList,
    exerciseListProps: { showIndex: true },
    cardIntro: (
      <>
        <h2 className="card-title">
          Completează spațiile libere cu forma corectă a verbului din paranteză
        </h2>
      </>
    ),
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_3_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 4,
    exercises: USES_ROOM_4_EXERCISES,
    lexHints: usesLexHints.room4,
    ExerciseListComponent: CheckboxExerciseList,
    exerciseListProps: { showIndex: true },
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Bifează propozițiile care descriu situații permanente.
        </h2>
      </>
    ),
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_4_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 5,
    exercises: USES_ROOM_5_EXERCISES,
    lexHints: usesLexHints.room5,
    ExerciseListComponent: McqExerciseList,
    exerciseListProps: { showIndex: true },
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <>
        <h2 className="card-title">
          Pentru fiecare propoziție, alege categoria corectă:
          <br />
          🍳 Instrucțiune, 🧭 Direcție sau ⭐ Alt tip.
        </h2>
      </>
    ),

    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_5_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Întrebuințări",
    roomNumber: 6,
    exercises: USES_ROOM_6_EXERCISES,
    lexHints: usesLexHints.room6,
    ExerciseListComponent: McqExerciseList,
    exerciseListProps: { showIndex: true },
    verifyTestId: null,
    feedbackTestId: null,
    cardIntro: (
      <h2 className="card-title">
        Pentru fiecare propoziție, alege categoria corectă:
        <br />
        🔁 Rutina, 🌍 Adevăr general, ⏰ Program fix, 🏠 Situație permanentă.
      </h2>
    ),
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_6_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
  {
    sectionId: SECTION_ID,
    sectionLabel: "Uses",
    roomNumber: 7,
    exercises: USES_ROOM_7_EXERCISES,
    lexHints: usesLexHints.room7,
    ExerciseListComponent: RuneTranslationExerciseList,
    exerciseListProps: { showIndex: true },
    verifyTestId: null,
    feedbackTestId: null,
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
    afterBody: ({ roomState }) =>
      roomState.passed ? (
        <section className="card section-complete-card">
          <h2 className="card-title">
            Bravo! Ai terminat toate camerele din secțiunea Întrebuințări –
            Present Simple. 🎉
          </h2>
          <p className="card-description">
            Ai parcurs toată ruta pentru întrebuințările Present Simple. Mergi
            la hartă ca să vezi progresul cheilor și cât de aproape ești de
            camera finală.
          </p>
          <div className="buttons">
            <Link to={psMapPath()} className="btn btn-outline">
              🏁 Înapoi la hartă
            </Link>
          </div>
        </section>
      ) : null,
    dictionaryDescription:
      "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea.",
    dictionaryItems: USES_ROOM_7_GLOSSARY_ITEMS,
    errorText: "Mai încearcă! Ai unele răspunsuri greșite.",
    successText:
      "Bravo! Ai completat corect toate propozițiile la această cameră!",
  },
];

// Dev-only fail-fast validation (no runtime / UX changes in production)
if (import.meta.env.DEV) {
  validateRoomRegistry(PS_USES_ROOMS, {
    registryName: "PS_USES_ROOMS",
    sectionId: SECTION_ID,
    expectedRoomNumbers: [1, 2, 3, 4, 5, 6, 7],
  });
}

export function getPsUsesRoomDef(roomNumber) {
  const idx = Number.isFinite(roomNumber) ? roomNumber - 1 : -1;
  if (idx < 0 || idx >= PS_USES_ROOMS.length) return null;
  return PS_USES_ROOMS[idx];
}
