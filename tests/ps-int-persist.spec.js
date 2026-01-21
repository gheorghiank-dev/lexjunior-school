import { test, expect } from "@playwright/test";
import {
  MAP,
  openMap,
  completeTheory,
  obtainKeyVariantA,
  readRoomKeyFlag,
  expectRoomHasKeyOnMap,
} from "./helpers/ps-key-variantA.js";

// Correct answers for Interrogative – Room 1.
const ROOM1_CORRECT = {
  1: "do",
  2: "does",
  3: "do",
  4: "does",
  5: "do",
  6: "does",
  7: "do",
  8: "does",
  9: "do",
  10: "does",
};

async function setGap(page, exId, value) {
  await page.getByTestId(`ps-int-room1-gap-${exId}`).fill(value);
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setGap(page, exId, value);
  }
}

test("Interrogative: key persists after refresh", async ({ page }) => {
  // Clear once at the beginning of the test run
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

  // Open map
  await openMap(page, expect);
  await completeTheory(
    page,
    expect,
    "ps-start-theory-interrogative",
    /interrogative\/theory/i,
  );

  await obtainKeyVariantA(page, expect, {
    sectionId: "interrogative",
    roomNumber: 1,
    roomTestId: "ps-room-interrogative-1",
    roomUrlRegex: /interrogative\/room-1/i,
    doWrongAttempt: async () => {
      await fillAllCorrect(page);
      await setGap(page, 1, "does"); // correct is "do" => stable wrong
    },
    doPerfectAttempt: async () => {
      await fillAllCorrect(page);
    },
  });

  // Refresh and check key is still there
  await page.reload();
  expect(await readRoomKeyFlag(page, "interrogative", 1)).toBe(true);

  await page.goto(MAP);
  await expect(page.getByTestId("ps-room-interrogative-1")).toBeVisible();
  await expectRoomHasKeyOnMap(page, expect, "ps-room-interrogative-1");
  expect(await readRoomKeyFlag(page, "interrogative", 1)).toBe(true);
});
