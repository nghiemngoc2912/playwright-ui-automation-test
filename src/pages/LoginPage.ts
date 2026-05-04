import { Page } from '@playwright/test';
import { loginLocators } from '../locators/login.locator';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async enterUsername(username: string) {
    await this.page.fill(loginLocators.usernameInput, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(loginLocators.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(loginLocators.loginButton);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage() {
    return this.page.textContent(loginLocators.errorMessage);
  }
}