import { defineConfig } from '@playwright/test';
import {env} from './utils/env';
export default defineConfig({
  testDir: './src/tests',

  reporter: [['list']],
  use: {
    baseURL: env.baseURL,
    headless: true,
    launchOptions:{
      slowMo: 800
    }
  }
});