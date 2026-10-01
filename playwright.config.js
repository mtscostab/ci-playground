import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: process.env.CI ? 2 : 0,
  snapshotPathTemplate: '{testDir}/__visual__/{arg}{ext}',
  reporter: [['html', { open: 'never' }], ['list']],
  use: { baseURL: 'http://localhost:4173', trace: 'on-first-retry', screenshot: 'only-on-failure' },
  webServer: { command: 'npx serve . -l 4173', url: 'http://localhost:4173', reuseExistingServer: !process.env.CI }
});
