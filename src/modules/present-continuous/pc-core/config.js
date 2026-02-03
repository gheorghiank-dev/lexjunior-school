export const PC_STORAGE_PREFIX = "pc_";
export const PC_ROOMS_PER_SECTION = 7;

// Learning sections + final badge.
// IDs must stay stable – they are used in storage & progress manager.
export const PC_SECTIONS = [
  { id: "affirmative", title: "Affirmative" },
  { id: "negative", title: "Negative" },
  { id: "interrogative", title: "Interrogative" },
  { id: "uses", title: "Uses" },
  { id: "time-expressions", title: "Time Expressions" },
];


export const PC_HUD_TEXT = {
  keyObtainedLabel: "Cheia este obtinuta.",
  keyMissingLabel: "Cheia nu este obtinuta.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia inca.",
};
