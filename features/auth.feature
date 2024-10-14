Feature: To test the Authentication

Scenario: User login successfully
 Given I open the login page 
 When I input my email "<email>"
 And I input my password "<password>"
 And I click the login button
 Then I should be logged in successfully and get the message
 Examples:
    | email                    | password              | 
    | serbaada10@gmail.com     | suksesjaya1_          | 
    | serbaada10@gmail.com     | nopass123             | 

Scenario: User login failed
 Given I open the login page
 When I input my email "<email>"
 And I input my password "<password>"
 And I click the login button
 Then I should get alert message

Scenario: User Register successfully
 Given I open the login page
 When i click daftar
 And I input namatoko "<namatoko>"
 And I input email "<email>"
 And I input password "<password>"
 And I click the daftar button
 Then system direct to login page
 
Scenario: User register failed
 Given I open the login page 
 When i click daftar
 And I input namatoko "<namatoko>"
 And I input email "<email>"
 And I input password "<password>"
 And I click the daftar button
 Then I should get warning message

 Examples:
    | namatoko       | email                 |password       | 
    | Toko Serbaada  | serbaada10@gmail.com  | suksesjaya1_  |
    | Toko Agen Jaya | serbaada10@gmail.com  | nopass123     |