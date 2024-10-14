const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pages/login.page');
const RegisterPage = require('../pages/register.page');

Given('I open the login page', async function () {
    try {
        LoginPage.open();
        expect(browser).toHaveTitle('KasirAja');
        await browser.pause(10000);
    } catch (error) {
        console.log('Terjadi kesalahan saat membuka URL:', error.message);
    }
    
});

//login
When('I input my email {string}', function (email) {
    LoginPage.inputEmail.setValue(email)
});

When('I input my password {string}', function (password) {
    LoginPage.inputPassword.setValue(password)
});

When('I click the login button', async function () {
    LoginPage.btnSubmit.click()
    await browser.pause(10000);
});

Then('I should be logged in successfully and get the message {string}', async function (string) {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toBe('https://kasirdemo.vercel.app/dashboard');
});

Then('I should get alert message', function (string) {
    expect(LoginPage.alertMsg).toBeExisting();
});

//register
When('i click daftar', function () {
    RegisterPage.btnRegister.click()
});

When('I input namatoko {string}', async function (namatoko) {
    await RegisterPage.register(namatoko);
});

When('I input email {string}', async function (email) {
    await RegisterPage.register(email);
});

When('I input password {string}', async function (password) {
    await RegisterPage.register(password);
});

When('I click the daftar button', function () {
    RegisterPage.btnDaftar.click()
});

Then('system direct to login page', async function (string) {
    await browser.url('https://kasirdemo.vercel.app/login')
    await expect(browser).toHaveUrlContaining("login");
});
Then('I should get warning message', () => {
    expect(RegisterPage.warningMsg).toBeExisting();
})
