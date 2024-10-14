const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, $, browser } = require('@wdio/globals')

const UserPage = require('../pages/users.page');

Given('I open the users page', async function () {
    try {
        UserPage.open();
        await browser.pause(10000);
    } catch (error) {
        console.log('Terjadi kesalahan saat membuka URL:', error.message);
    }
});

//add user
When('i clik button tambah', async function () {
    UserPage.btnTambah.click()
    await browser.pause(10000);
});

When('i input <namauser> {string}', function (namauser) {
    UserPage.inputNamaUser.setValue(namauser)
});

When('i input <emailuser> {string}', function (emailuser) {
    UserPage.inputEmailUser.setValue(emailuser)
});

When('i input <passworduser> {string}', function (passworduser) {
    UserPage.inputPassUser.setValue(passworduser)
});

When('I click the login button', async function () {
    UserPage.btnSimpan.click()
    await browser.pause(10000);
});
