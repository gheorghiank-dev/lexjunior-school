import { test, expect } from "@playwright/test";
import {
  MAP,
  openMap,
  completeTheory,
  obtainKeyVariantA,
  readRoomKeyFlag,
  expectRoomHasKeyOnMap,
} from "./helpers/ps-key-variantA.js";

// Correct answers for Time Expressions – Room 1.
const ROOM1_CORRECT = {
  1: "every-morning",
  2: "on-mondays",
  3: "every-weekend",
  4: "in-the-evening",
  5: "every-month",
  6: "at-noon",
  7: "in-the-morning",
  8: "every-wednesday",
  9: "every-saturday",
  10: "in-the-afternoon",
};

// NOTE: openMap and completeTheory are now reused from helpers for uniformity.

async function setPair(page, exId, value) {
  await page.getByTestId(`ps-te-room1-opt-${value}`).click();
  await page.getByTestId(`ps-te-room1-slot-${exId}`).click();
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setPair(page, exId, value);
  }
}

// NOTE: readRoomKeyFlag is now reused from helpers.

test("Time Expressions: key persists after refresh (Room 1)", async ({ page }) => {
  // Clear once at the beginning of the test run for this page (avoid re-clearing on page.goto)
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
  await completeTheory(
    page,
    expect,
    "ps-start-theory-time-expressions",
    /time-expressions\/theory/i,
  );

  await obtainKeyVariantA(page, expect, {
    sectionId: "time-expressions",
    roomNumber: 1,
    roomTestId: "ps-room-time-expressions-1",
    roomUrlRegex: /time-expressions\/room-1/i,
    doWrongAttempt: async () => {
      // Stable wrong: pair slot 1 with a different option
      await setPair(page, 1, "on-mondays"); // slot 1 expects "every-morning"
    },
    doPerfectAttempt: async () => {
      await fillAllCorrect(page);
    },
  });

  // Refresh: key should still be present
  await page.reload();
  expect(await readRoomKeyFlag(page, "time-expressions", 1)).toBe(true);

  // Map should still reflect the key state
  await page.goto(MAP);
  await expectRoomHasKeyOnMap(page, expect, "ps-room-time-expressions-1");
});
