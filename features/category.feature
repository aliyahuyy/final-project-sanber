Feature: To test the user Feature

Scenario: Add new category successfully
Given I open the users page 
When i clik button tambah
And i input nama
And i input deskripsi
And i click button simpan
Then i successfully add new category

Scenario: Search category successfully
Given I open the users page
When I input nama kategori
And i click button search
Then the category is displayed