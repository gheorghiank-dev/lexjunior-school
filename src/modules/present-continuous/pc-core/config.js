export const PC_STORAGE_PREFIX = "pc_";
export const PC_ROOMS_PER_SECTION = 7;

// Learning sections + final badge.
// IDs must stay stable – they are used in storage & progress manager.
export const PC_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozitiilor afirmative.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozitiilor negative.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Intrebari in Present Continuous.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Intrebuintari ale Present Continuous.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente.",
  },
];


export const PC_HUD_TEXT = {
  keyObtainedLabel: "Cheia este obtinuta.",
  keyMissingLabel: "Cheia nu este obtinuta.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia inca.",
};
