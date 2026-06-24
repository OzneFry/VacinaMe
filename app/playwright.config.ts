import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

const screenshotsDir = path.resolve(__dirname, 'tests/e2e/screenshots');

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 60000,
  fullyParallel: false,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:8085',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npx http-server dist -p 8085 -a 127.0.0.1 -s',
    url: 'http://127.0.0.1:8085',
    reuseExistingServer: true,
    timeout: 180000,
    env: {
      CI: '1',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: path.join(screenshotsDir, '..', 'artifacts'),
});
