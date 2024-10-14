Feature: To test the user Feature

Scenario: Add new user successfully
Given I open the users page at "https://kasirdemo.vercel.app/users"
When i clik button tambah
And i input <namauser>
And i input <emailuser>
And i input <passworduser>
And i click button simpan
Then i successfully add new user

Examples:
    | namauser                | emailuser                      | passworduser     |
    | Kasir A                 | testerkasir@gmail.com          | kasir123          |
    | Kasir B                 | testerkasirdua@gmail.com       | kasiryes098       |

# Scenario: View list of registered users
# Given I am logged in as an admin
# When I navigate to the users page "https://kasirdemo.vercel.app/users"
# Then I should see a list of users
# And the list should include "testerkasir@gmail.com"