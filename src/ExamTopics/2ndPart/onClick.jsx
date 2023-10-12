// Onclick 

// Defination : 

// The onclick event occurs when the user clicks on an HTML element.

// Example 1 : 

// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>The onclick event triggers a function when an element is clicked on.</p>
// <p>Click to trigger a function that will output "Hello World":</p>

// <button onclick="myFunction()">Click me</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
// </script>

// </body>
// </html>

// Example 2 :

// <!DOCTYPE html>
// <html>
// <body>
// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>How to assign an "onclick" event to a p element:</p>

// <p id="demo" onclick="myFunction()">Click me.</p>

// <script>
// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// </script>

// </body>
// </html>

// Example 3 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Use the HTML DOM to assign an "onclick" event to a p element:</p>

// <p id="demo">Click me.</p>

// <script>
// document.getElementById("demo").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// </script>

// </body>
// </html>


// Example 4 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Use the HTML DOM to assign an "onclick" event to a p element:</p>

// <p id="demo">Click me.</p>

// <script>
// document.getElementById("demo").onclick = function() {myFunction()};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }
// </script>

// </body>
// </html>

// Example 5 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Click to display the time.</p>

// <button onclick="getElementById('demo').innerHTML=Date()">What is the time?</button>

// <p id="demo"></p>

// </body>
// </html>


// Example 6 : 

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .dropbtn {
//   background-color: #4CAF50;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
// }

// .dropbtn:hover, .dropbtn:focus {
//   background-color: #3e8e41;
// }

// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   overflow: auto;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {background-color: #f1f1f1}

// .show {display:block;}
// </style>
// </head>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Click on the button to open the dropdown menu.</p>

// <div class="dropdown">
//   <button id="myBtn" class="dropbtn">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//   </div>
// </div>

// <script>
// // Get the button, and when the user clicks on it, execute myFunction
// document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// </script>

// </body>
// </html>

// Example 7 : 

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <h3 onclick="myFunction(this, 'red')">Click me to change my text color.</h3>

// <script>
// function myFunction(element, color) {
//   element.style.color = color;
// }
// </script>

// </body>
// </html>

// Example 8 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Field1: <input type="text" id="field1" value="Hello World!"></p>
// <p>Field2: <input type="text" id="field2"></p>

// <p>Clicking "Copy" triggers a function that copies the text value from Field1 to Field2.</p>

// <button onclick="myFunction()">Copy</button>

// <script>
// function myFunction() {
//   document.getElementById("field2").value = document.getElementById("field1").value;
// }
// </script>

// </body>
// </html>

// Example 9 :

// <!DOCTYPE html>
// <html>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>How to assign an "onclick" event to the window object.</p>
// <p>Click anywhere in this window to change the background color of body.</p>

// <script>
// window.onclick = myFunction;

// function myFunction() {
//   document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
// }
// </script>

// </body>
// </html>











