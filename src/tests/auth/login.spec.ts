import { test, expect } from '../fixtures/base.fixture';
import { users } from '../../utils/auth/test-data';

test.describe('Login Feature', () => {

  test('Login successfully', async ({ loginPage, page }) => {

    await test.step('Given user is on login page', async () => {
      await loginPage.goto();
    });

    await test.step('When user logs in with valid credentials', async () => {
      await loginPage.login(
        users.validUser.username,
        users.validUser.password
      );
    });

    await test.step('Then user should be redirected to inventory page', async () => {
      await expect(page).toHaveURL(/inventory/);
    });

  });

  test('Login Unsuccessfully: Wrong Password', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser_wrongPassword.username,
      users.invalidUser_wrongPassword.password
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('Login Unsuccessfully: Wrong Username', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser_wrongUsername.username,
      users.invalidUser_wrongUsername.password
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });

  test('Login Unsuccessfully: Locked account', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      users.invalidUser_lockedAccount.username,
      users.invalidUser_lockedAccount.password
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Sorry, this user has been locked out.');
  });

  test('Login Unsuccessfully: Empty Username', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      "",
      users.validUser.password
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username is required');
  });

  test('Login Unsuccessfully: Empty Password', async ({ loginPage }) => {

    await loginPage.goto();
    await loginPage.login(
      users.validUser.username,
      ""
    );

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Password is required');
  });

});