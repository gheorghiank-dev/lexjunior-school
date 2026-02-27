// tests/present-continuous-map.spec.js
import { test, expect } from "@playwright/test";
import {
  openTenseMapAndAssertFirstSection,
  assertSectionHasTheoryAndFirstRoom,
} from "./helpers/tense-map-helpers.js";

test.describe("Present Continuous – Tense Map", () => {
  test("map-ul se încarcă și afișează secțiunea Affirmative", async ({
    page,
  }) => {
    await openTenseMapAndAssertFirstSection(page, {
      mapUrl: "/grammar/tenses/present-continuous/map",
      firstSectionPathTestId: "pc-path-affirmative",
    });

    await assertSectionHasTheoryAndFirstRoom(page, {
      startTheoryTestId: "pc-start-theory-affirmative",
      roomTestIdPrefix: "pc-room-affirmative",
    });
  });

  test("ruta de badge se încarcă fără erori", async ({ page }) => {
    const response = await page.goto(
      "/grammar/tenses/present-continuous/badge",
    );

    // 1) răspunsul HTTP trebuie să fie OK (200–299)
    expect(response?.ok()).toBeTruthy();

    // 2) suntem pe URL-ul corect
    await expect(page).toHaveURL("/grammar/tenses/present-continuous/badge");
  });
});
