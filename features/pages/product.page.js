/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTambah(){
        return $('.css-1piskbq')
    }

    get inputnama(){
        return $('#nama')
    }

    get inputdesc(){
        return $('#deskripsi')
    }

    get inputhargaBeli(){
        return $('#harga beli')
    }

    get inputhargaJual(){
        return $('#harga jual')
    }

    get inputStok(){
        return $('#stok')
    }

    get inputKategori(){
        return $('#kategori')
    }

    get btnSimpan(){
        return $('.css-l5lnz6')
    }

    get searchProduct(){
        return $('.css-2s2hk4')
    }
    
    get btnSearch(){
        return $('.css-ur97uj')
    }

    get btnFilter(){
        return $('.css-r3uri8')
    }

    get category(){
        return $('.css-u3dlpe')
    }

   /**
     * overwrite specific options to adapt it to page object
     */
   open() {
    super.open('users')
}
}

module.exports = new ProductPage();