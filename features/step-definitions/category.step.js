const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pages/login.page');

Given('I open the users page ', function () {
    
});

//add new category
When('i clik button tambah', function () {

});

When('I input nama {string}', function (nama) {

});

When('i input deskripsi {string}', function (deskripsi) {

});

When('i click button simpan', async function () {
    
});

Then('i successfully add new category', async function () {
    
})

//search
When('I input nama kategori', function () {

});

When('i click button search', function (){

});

Then('the category is displayed', function () {
    
})
