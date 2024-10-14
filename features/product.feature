Feature: To test the user Feature

Scenario: Add new category successfully
Given I open the product page
When i clik button tambah
And i input nama
And i input deskripsi
And i input harga beli
And i input harga jual
And i input stok
And i input kategori
And i click button simpan
Then i successfully add new product

Scenario: Search category successfully
Given I open the users page
When I input nama product
And i click button search
Then the products are displayed

Scenario: Search category successfully
Given I open the users page 
When I click filter product
And i click the category
Then the products are displayed"