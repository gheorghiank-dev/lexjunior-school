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
  1: "N",
  2: "R",
  3: "N",
  4: "R",
  5: "N",
  6: "R",
  7: "N",
  8: "R",
  9: "R",
  10: "R",
};

async function pick(page, exId, value) {
  await page.getByTestId(`ps-uses-room1-ex-${exId}-${value}`).click();
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await pick(page, exId, value);
  }
}

test("Uses: key persists after refresh", async ({ page }) => {
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
  await completeTheory(page, expect, "ps-start-theory-uses", /uses\/theory/i);

  await obtainKeyVariantA(page, expect, {
    sectionId: "uses",
    roomNumber: 1,
    roomTestId: "ps-room-uses-1",
    roomUrlRegex: /uses\/room-1/i,
    doWrongAttempt: async () => {
      await pick(page, 1, "R"); // correct is N
    },
    doPerfectAttempt: async () => {
      await fillAllCorrect(page);
    },
  });

  // Verify on map
  await page.goto(MAP);
  await expect(page.getByTestId("ps-path-uses")).toBeVisible();
  await expectRoomHasKeyOnMap(page, expect, "ps-room-uses-1");

  // Refresh and re-check
  await page.reload();
  await expect(page.getByTestId("ps-path-uses")).toBeVisible();
  await expectRoomHasKeyOnMap(page, expect, "ps-room-uses-1");

  // Also stable via localStorage
  expect(await readRoomKeyFlag(page, "uses", 1)).toBe(true);
});
