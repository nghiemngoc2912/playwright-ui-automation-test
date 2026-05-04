import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
  headless: process.env.HEADLESS === 'true'
};