const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, $, browser } = require('@wdio/globals')

const ProductPage = require('../pages/product.page');

Given('I open the product page', async function () {
    try {
        ProductPage.open();
        await browser.pause(10000);
    } catch (error) {
        console.log('Terjadi kesalahan saat membuka URL:', error.message);
    }
});

//add product
When('i clik button tambah', async function () {
    ProductPage.btnTambah.click()
    await browser.pause(10000);
});

When('i input nama {string}', function (nama) {
    ProductPage.inputnama.setValue(nama)
});

When('i input deskripsi {string}', function (deskripsi) {
    ProductPage.inputdesc.setValue(deskripsi)
});

When('i input harga beli {string}', function (hargabeli) {
    ProductPage.inputhargaBeli.setValue(hargabeli)
});

When('i input harga jual {string}', function (hargajual) {
    ProductPage.inputhargaJual.setValue(hargajual)
});

When('i input stok {string}', function (stok) {
    ProductPage.inputStok.setValue(stok)
});

When('i input kategori {string}', function (kategori) {
    ProductPage.inputKategori.setValue(kategori)
});


When('i click button simpan', async function () {
    ProductPage.btnSimpan.click()
    await browser.pause(10000);
});

//search
When('i click button search', function () {
    ProductPage.btnSearch.click()
});

When('I click filter product', function () {
    ProductPage.btnFilter.click()
});

When('i click the category', function () {
    ProductPage.category.click()
});
