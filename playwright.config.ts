import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: [
    ['html'],
    ['allure-playwright']
  ],
timeout:60000,

  use: {
//base url to 
    baseURL: 'https://www.zigwheels.com/',
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
    headless: false,

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});