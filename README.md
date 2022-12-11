jQuery Server Calculator

## Description

### Calculator that utilizes the Server

1. ✅ Created a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. 

2. ✅  When the submit (`=` button) is clicked, captured this input, bundled it up in an object, and sent this object to the server via a POST.

3. ✅ There is a 'C' button that will clear the user input fields.

4. ✅ Built out the server-side logic to compute the numbers as appropriate. The server is able to handle Addition, Subtraction, Multiplication, and Division. 

5. ✅ Once the calculation is complete, sent back the OK. 

6. ✅ Did a GET request after the POST to get the actual calculation.

### History

7. ✅ Kept a historical record of all math operations and solutions on the server. Displays a list of all previous calculations on the page when it loads using a GET request. Updated the list when a new calculation is made.

> NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.

> Note: As per instructions I did not use eval() to complete this assignment.

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
