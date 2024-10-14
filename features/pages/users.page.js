/**
 * sub page containing specific selectors and methods for a specific page
 */
class UserPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTambah(){
        return $('.css-1piskbq')
    }

    get inputNamaUser(){
        return $('.css-4302v8')
    }

    get inputEmailUser(){
        return $('.css-ksd4gw')
    }

    get inputPassUser(){
        return $('.css-2s2hk4')
    }

    get btnSimpan(){
        return $('.css-l5lnz6')
    }


   /**
     * overwrite specific options to adapt it to page object
     */
   open() {
    super.open('users')
}
}

module.exports = new RegisterPage();