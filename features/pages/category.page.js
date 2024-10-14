const { $ } = require('@wdio/globals');
const Page = require('./page');

class CategoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTambah() {
        return $('.css-1piskbq')
    }

    get inputNama() {
        return $('#nama')
    }

    get inputDesc() {
        return $('#deskripsi')
    }

    get btnSave() {
        return $('css-l5lnz6')
    }

    get inputCategory() {
        return $('.css-2s2hk4')
    }

    get btnSearc() {
        return $('.css-ur97uj')
    }

}

module.exports = new CategoryPage();