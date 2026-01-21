import { test, expect } from "@playwright/test";
import {
  MAP,
  openMap,
  completeTheory,
  obtainKeyVariantA,
  readRoomKeyFlag,
  expectRoomHasKeyOnMap,
} from "./helpers/ps-key-variantA.js";

const ROOM1_CORRECT = {
  1: "joins",
  2: "likes",
  3: "kisses",
  4: "flies",
  5: "watches",
  6: "enjoys",
  7: "talks",
  8: "goes",
  9: "washes",
  10: "dances",
  11: "paints",
  12: "teaches",
  13: "studies",
  14: "tries",
  15: "watches",
  16: "cleans",
  17: "does",
  18: "fixes",
  19: "wishes",
  20: "goes",
};

async function setInput(page, exId, value) {
  await page.getByTestId(`ps-aff-room1-input-${exId}`).fill(value);
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setInput(page, exId, value);
  }
}

test("Affirmative: key persists after refresh (Room 1)", async ({ page }) => {
  await page.addInitScript(() => {
    try {
      if (!sessionStorage.getItem("__e2e_ls_cleared__")) {
        localStorage.clear();
        sessionStorage.setItem("__e2e_ls_cleared__", "1");
      }
    } catch {
      // ignore
    }
  });

  await openMap(page, expect);
  await completeTheory(page, expect, "ps-start-theory-affirmative", /affirmative\/theory/i);

  await obtainKeyVariantA(page, expect, {
    sectionId: "affirmative",
    roomNumber: 1,
    roomTestId: "ps-room-affirmative-1",
    roomUrlRegex: /affirmative\/room-1/i,
    doWrongAttempt: async () => {
      await setInput(page, 1, "join");
    },
    doPerfectAttempt: async () => {
      await fillAllCorrect(page);
    },
  });

  expect(await readRoomKeyFlag(page, "affirmative", 1)).toBe(true);

  // Refresh and re-check
  await page.reload();
  await expect(page).toHaveURL(/affirmative\/room-1/i);
  expect(await readRoomKeyFlag(page, "affirmative", 1)).toBe(true);

  // Map reflects key after refresh
  await page.goto(MAP);
  await expectRoomHasKeyOnMap(page, expect, "ps-room-affirmative-1");
});
