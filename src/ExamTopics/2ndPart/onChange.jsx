// Onchange Event 

// Defination :

// The onchange event occurs when the value of an HTML element is changed.

// Example 1 :

// <!DOCTYPE html>
// <html>
// <body>

// <p>Select a new car from the list.</p>

// <select id="mySelect" onchange="myFunction()">
//   <option value="Audi">Audi</option>
//   <option value="BMW">BMW</option>
//   <option value="Mercedes">Mercedes</option>
//   <option value="Volvo">Volvo</option>
// </select>

// <p>When you select a new car, a function is triggered which outputs the value of the selected car.</p>

// <p id="demo"></p>

// <script>

// function myFunction() {
//   var x = document.getElementById("mySelect").value;
//   document.getElementById("demo").innerHTML = "You selected: " + x;
// }

// </script>

// </body>
// </html>

// Example 2 : 

// <!DOCTYPE html>
// <html>
// <body>

// <p>Assign an "onchange" event to an input element.</p>

// Enter your name: <input type="text" id="fname" onchange="myFunction()">

// <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

// <script>
// function myFunction() {
//   var x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// </script>

// </body>
// </html>

// Example 3 :

// <!DOCTYPE html>
// <html>
// <body>

// <p>Use the HTML DOM to assign an "onchange" event to an input element.</p>

// Enter your name: <input type="text" id="fname">

// <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

// <script>
// document.getElementById("fname").onchange = function() {myFunction()};

// function myFunction() {
//   var x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// </script>

// </body>
// </html>

// Example 4 :

// <!DOCTYPE html>
// <html>
// <body>

// <p>Use the addEventListener() method to attach a "change" event to an input element.</p>

// Enter your name: <input type="text" id="fname">

// <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>

// <script>
// document.getElementById("fname").addEventListener("change", myFunction);//change here is an event similar khandan as onChange

// function myFunction() {
//   var x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// </script>

// </body>
// </html>


// Example 5 :

// <!DOCTYPE html>
// <html>
// <body>

// <p>Modify the text in the input field, then click outside the field to fire the onchange event.</p>

// Enter some text: <input type="text" name="txt" value="Hello" onchange="myFunction(this.value)">

// <script>
// function myFunction(val) {
//   alert("The input value has changed. The new value is: " + val);
// }
// </script>

// </body>
// </html>




