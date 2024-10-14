const { $ } = require('@wdio/globals')
const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnRegister (){
        return $('<a href="/register">ingin mencoba, daftar ?</a>')
    }

    get inputNamaToko () {
        return $('#name');
    }
    
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnDaftar () {
        return $('.css-1n8i4of');
    }

    get warningMsg () {
        return $('.css-qwanz3')
    }

    async register (email, password, namatoko) {
        await this.btnRegister.click();
        await this.inputNamaToko.setValue(namatoko);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await browser.pause(10000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        super.open('login')
    }
}

module.exports = new RegisterPage();