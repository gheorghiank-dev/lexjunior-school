import { test, expect } from "@playwright/test";

test("Affirmative: room is gated until theory is completed", async ({ page }) => {
  // Start clean before app loads (but don't wipe progress on every navigation)
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

  // Go to Present Simple hub
  await page.goto("/grammar/tenses/present-simple");

  // Open the React map (stable selector; avoids wording-dependent click)
  await expect(page).toHaveURL(/present-simple\/map/i);

  // Confirm path exists
  await expect(page.getByTestId("ps-path-affirmative")).toBeVisible();

  // Room 1 exists even when locked
  await expect(page.getByTestId("ps-room-affirmative-1")).toBeVisible();

  // Click Room 1 (should be blocked because theory not done)
  await page.getByTestId("ps-room-affirmative-1").click();

  // Must NOT navigate to the room page.
  // Note: in some paths, clicking a locked room can redirect to the theory page.
  await expect(page).not.toHaveURL(/affirmative\/room-1/i);

  // Ensure theory is opened at least once (this should mark theory as completed)
  if (!/affirmative\/theory/i.test(page.url())) {
    await page.getByTestId("ps-start-theory-affirmative").click();
    await expect(page).toHaveURL(/affirmative\/theory/i);
  }

  // Back to map
  await page.goto("/grammar/tenses/present-simple");
  await expect(page.getByTestId("ps-path-affirmative")).toBeVisible();

  // Now Room 1 should navigate
  await page.getByTestId("ps-room-affirmative-1").click();
  await expect(page).toHaveURL(/affirmative\/room-1/i);
});
