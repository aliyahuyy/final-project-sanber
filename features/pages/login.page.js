const { $ } = require('@wdio/globals');
const Page = require('./page');

class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get btnRegister () {
        return $('.css-4rvv7a');
    }  
    
    get alertMsg () {
        return $('.css-qwanz3')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login')
    }
}

module.exports = new LoginPage();