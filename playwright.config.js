const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter:  [['list'], // Existing reporters
  ['allure-playwright'], // Add Allure
],
  timeout: 60000, // Set a global timeout of 60 seconds for each test
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    trace: 'on-first-retry',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000, // Timeout for individual actions (e.g., clicks, fills)
    navigationTimeout: 30000, // Timeout for page navigations
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: "on",
        video: "on",
        trace: "on",
      },
    },
  ],
});
