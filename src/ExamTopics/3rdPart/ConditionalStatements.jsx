// Conditional Statements

// Defination :

// Very often when you write code, you want to perform different actions for different decisions.

// You can use conditional statements in your code to do this.

// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// Syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// }


// Example 1 :

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript if</h2>

// <p>Display "Good day!" if the hour is less than 18:00:</p>

// <p id="demo">Good Evening!</p>

// <script>
// if (new Date().getHours() < 18) {
//   document.getElementById("demo").innerHTML = "Good day!";
// }
// </script>

// </body>
// </html>


// The else Statement

// Use the else statement to specify a block of code to be executed if the condition is false.

// if (condition) {
//   //  block of code to be executed if the condition is true
// } else {
//   //  block of code to be executed if the condition is false
// }

// Example 1 : 

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript if .. else</h2>

// <p>A time-based greeting:</p>

// <p id="demo"></p>

// <script>
// const hour = new Date().getHours(); 
// let greeting;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.getElementById("demo").innerHTML = greeting;
// </script>

// </body>
// </html>


// The else if Statement : 

// Use the else if statement to specify a new condition if the first condition is false.

// Syntax
// if (condition1) {
//   //  block of code to be executed if condition1 is true
// } else if (condition2) {
//   //  block of code to be executed if the condition1 is false and condition2 is true
// } else {
//   //  block of code to be executed if the condition1 is false and condition2 is false
// }

// Example 1 :

// <!DOCTYPE html>
// <html>
// <body>

// <h2>JavaScript if .. else</h2>

// <p>A time-based greeting:</p>

// <p id="demo"></p>

// <script>
// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;
// </script>

// </body>
// </html>

