// CALLBACKS 

// "I will call back later!"

// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.



// Example 1 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Functions</h1>
// <h2>Function Sequence</h2>
// <p>JavaScript functions are executed in the sequence they are called.</p>

// <p id="demo"></p>

// <script>
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();
// </script>

// </body>
// </html>


// Example 2 : 

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Functions</h1>
// <h2>Function Sequence</h2>
// <p>JavaScript functions are executed in the sequence they are called.</p>

// <p id="demo"></p>

// <script>
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// mySecond();
// myFirst();
// </script>

// </body>
// </html>

// Example 3 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Functions</h1>
// <h2>Function Sequence</h2>
// <p>JavaScript functions are executed in the sequence they are called.</p>

// <p>The result of the calculation is:</p>
// <p id="demo"></p>

// <script>
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);
// </script>

// </body>
// </html>

// Example 4 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Functions</h1>
// <h2>Callback Functions</h2>

// <p>The result of the calculation is:</p>
// <p id="demo"></p>

// <script>
// function myDisplayer(something) {
//   document.getElementById("demo").innerHTML = something;
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);
// </script>

// </body>
// </html>

// Example 5 :

// <!DOCTYPE html>
// <html>
// <body style="text-align: right">

// <h1>JavaScript Functions</h1>
// <h2>Callback Functions</h2>
// <p id="demo"></p>

// <script>
// // Create an Array
// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a Callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// document.getElementById("demo").innerHTML = posNumbers;

// // Remove negative numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }
// </script>

// </body>
// </html>



