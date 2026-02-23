// Config auto-style for Present Continuous Badge exercises.
// Mai scurt decât varianta de Present Simple, dar forma este identică,
// ca să putem folosi global TenseBadgeRoom.

export const badgeStoryConfig = {
  verbs: [
    "getting ready",
    "packing",
    "waiting",
    "running",
    "wearing",
    "studying",
    "talking",
    "playing",
    "cooking",
    "relaxing",
  ],
  // Index-based answers pentru renderSlot(index) în poveste.
  slotAnswers: [
    "getting ready",
    "packing",
    "waiting",
    "running",
    "wearing",
    "studying",
    "talking",
    "playing",
    "cooking",
    "relaxing",
  ],
};

export const badgeEx2Questions = [
  {
    id: 1,
    question: "Are you getting ready for school at the moment?",
    correctShort: "yes",
    shortLabels: {
      yes: "Yes, I am.",
      no: "No, I’m not.",
    },
    sentence: "I am getting ready for school.",
    acceptSentences: [],
  },
  {
    id: 2,
    question: "Is your best friend waiting at the bus stop now?",
    correctShort: "yes",
    shortLabels: {
      yes: "Yes, he is.",
      no: "No, he isn’t.",
    },
    sentence: "He is waiting at the bus stop.",
    acceptSentences: ["He’s waiting at the bus stop."],
  },
  {
    id: 3,
    question: "Are your classmates running in the park right now?",
    correctShort: "no",
    shortLabels: {
      yes: "Yes, they are.",
      no: "No, they aren’t.",
    },
    sentence: "They are not running in the park right now.",
    acceptSentences: [
      "They aren’t running in the park right now.",
      "They are not running in the park now.",
      "They aren’t running in the park now.",
    ],
  },
  {
    id: 4,
    question: "Are your parents cooking dinner at the moment?",
    correctShort: "yes",
    shortLabels: {
      yes: "Yes, they are.",
      no: "No, they aren’t.",
    },
    sentence: "They are cooking dinner at the moment.",
    acceptSentences: ["They’re cooking dinner at the moment."],
  },
];

export const badgeEx3Prompts = [
  "Write a sentence about what you are doing right now:",
  "Write a sentence about what your best friend is doing today:",
  "Write a sentence about what your family is doing this evening:",
];

export const badgeMiniDictionaryItems = [
  { tts: "getting ready", word: "getting ready", meaning: "se pregătește" },
  {
    tts: "packing a bag",
    word: "packing a bag",
    meaning: "își pregătește ghiozdanul",
  },
  {
    tts: "waiting at the bus stop",
    word: "waiting at the bus stop",
    meaning: "așteaptă în stația de autobuz",
  },
  {
    tts: "running in the park",
    word: "running in the park",
    meaning: "aleargă în parc",
  },
  {
    tts: "wearing a jacket",
    word: "wearing a jacket",
    meaning: "poartă o jachetă",
  },
  { tts: "cooking dinner", word: "cooking dinner", meaning: "gătesc cina" },
  {
    tts: "relaxing after school",
    word: "relaxing after school",
    meaning: "se relaxează după școală",
  },
];

export const badgeStoryTtsText =
  "Today is a special day. My class is going on a trip, and everyone is busy. " +
  "Right now I am getting ready for school and packing my bag with snacks and a camera. " +
  "Outside the house, my best friend is waiting at the bus stop because the bus is late. " +
  "In the park some students are running to catch the bus and others are wearing their colourful jackets. " +
  "At the same time, my parents are cooking dinner while my little brother is playing video games. " +
  "Later this evening, I am relaxing and studying for tomorrow’s test while we are talking about the trip.";
