// Present Simple module config (canonical)
// NOTE: Values intentionally mirror the previous src/present-simple-core/config.js.

export const SECTIONS = [
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
    description: "Intrebari in Present Simple.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Intrebuintari ale Present Simple.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente.",
  },
];

export const ROOMS_PER_SECTION = 7;
export const STORAGE_PREFIX = "ps_";

export const HUD_TEXT = {
  keyObtainedLabel: "Cheia este obtinuta.",
  keyMissingLabel: "Cheia nu este obtinuta.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia inca.",
  hudNear: "Incearca din nou, esti foarte aproape!",
  hudNeedKey: "Ai rezolvat camera, dar ai nevoie de o incercare perfecta pentru cheie.",
  hudHasKey: "Perfect! Ai obtinut cheia pentru aceasta camera.",
  roomNear: "Sunt cateva greseli. Mai arunca o privire :)",
  roomPerfect: "Bravo! Ai terminat corect aceasta camera!",
};

// Dev-only helper flag used by some pages.
export const DEV_MODE = true;
