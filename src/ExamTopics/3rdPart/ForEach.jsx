// ForEach Loop :

// Defination :

// The forEach() method calls a function for each element in an array.

// The forEach() method is not executed for empty elements.

// Syntax :

// array.forEach(function(currentValue, index, arr), thisValue)

// Example 1 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Arrays</h1>
// <h2>The forEach() Method</h2>

// <p>forEach() calls a function for each element in an array:</p>

// <p id="demo"></p>

// <script>
// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// document.getElementById("demo").innerHTML = text;
 
// function myFunction(item, index) {
//   text += index + ": " + item + "<br>"; 
// }
// </script>

// </body>
// </html>

// Example 2 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Arrays</h1>
// <h2>The forEach() Method</h2>

// <p>forEach() calls a function for each element in an array:</p>

// <p>Compute the sum of the values in an array:</p>

// <p id="demo"></p>

// <script>
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;

// function myFunction(item) {
//   sum += item;
// }
// </script>

// </body>
// </html>

// Example 3 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Arrays</h1>
// <h2>The forEach() Method</h2>

// <p>forEach() calls a function for each element in an array:</p>

// <p>Multiply the value of each element with 10:</p>

// <p id="demo"></p>

// <script>
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// document.getElementById("demo").innerHTML = numbers;

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }
// </script>

// </body>
// </html>

