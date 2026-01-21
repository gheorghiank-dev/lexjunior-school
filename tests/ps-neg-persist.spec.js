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
  1: "doesn't",
  2: "don't",
  3: "doesn't",
  4: "don't",
  5: "doesn't",
  6: "don't",
  7: "doesn't",
  8: "don't",
  9: "doesn't",
  10: "don't",
};


async function setGap(page, exId, value) {
  await page.getByTestId(`ps-neg-room1-gap-${exId}`).fill(value);
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setGap(page, exId, value);
  }
}


test("Negative: key persists after refresh", async ({ page }) => {
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
  await completeTheory(page, expect, "ps-start-theory-negative", /negative\/theory/i);

  await obtainKeyVariantA(page, expect, {
    sectionId: "negative",
    roomNumber: 1,
    roomTestId: "ps-room-negative-1",
    roomUrlRegex: /negative\/room-1/i,
    doWrongAttempt: async () => {
      await setGap(page, 1, "don't"); // correct is "doesn't" => stable wrong
    },
    doPerfectAttempt: async () => {
      await fillAllCorrect(page);
    },
  });

  // Verify on map
  await page.goto(MAP);
  await expect(page.getByTestId("ps-path-negative")).toBeVisible();
  await expectRoomHasKeyOnMap(page, expect, "ps-room-negative-1");

  // Refresh and re-check
  await page.reload();
  await expect(page.getByTestId("ps-path-negative")).toBeVisible();
  await expectRoomHasKeyOnMap(page, expect, "ps-room-negative-1");

  // Also stable via localStorage
  expect(await readRoomKeyFlag(page, "negative", 1)).toBe(true);
});
