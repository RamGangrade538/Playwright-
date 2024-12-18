const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const testData = require('../data/testData.json');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin();
    });

    test('should login successfully with valid credentials', async () => {
        await loginPage.login(testData.validUser.username, testData.validUser.password);
        // Assert successful login
        await expect(page).toHaveURL('/dashboard');
    });

    // test('should fail login with invalid credentials', async () => {
    //     await loginPage.login(testData.invalidUser.username, testData.invalidUser.password);
    //     // Assert failure message
    //     const errorMsg = await page.textContent('.error');
    //     expect(errorMsg).toContain('Invalid credentials');
    // });
});