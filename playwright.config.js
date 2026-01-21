import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://127.0.0.1:5173",
    headless: true,
  },
  webServer: {
    // NOTE: Without --strictPort, Vite may auto-pick a different port if 5173 is busy.
    // That can cause Playwright to accidentally hit another already-running app on 5173.
    command: "npm run dev -- --host 127.0.0.1 --port 5173 --strictPort",
    url: "http://127.0.0.1:5173",
    // Important for stability: don't accidentally reuse a dev server running
    // from another folder/project on the same port.
    reuseExistingServer: false,
    timeout: 120_000,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
