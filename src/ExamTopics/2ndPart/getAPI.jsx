// GET API => Fetch()

// Defination 
// The fetch() method starts the process of fetching a resource from a server.

// The fetch() method returns a Promise that resolves to a Response object.

// Syntax 1:

// <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Fetch API</h1>
// <h2>The fetch() Method</h2>
// <p id="demo">Fetch a file to change this text.</p>

// <script>
// let file = "fetch_info.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);
// </script>

// </body>
// </html>

// Syntax 2:


// <!DOCTYPE html>
// <html>
// <body>
// <h1>JavaScript Fetch API</h1>
// <h2>The fetch() Method</h2>
// <p id="demo">Fetch a file to change this text.</p>

// <script>
// getText("fetch_info.txt");

// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   document.getElementById("demo").innerHTML = y;
// }
// </script>

// </body>
// </html>


// Syntax 3 

// <!DOCTYPE html>
// <html>
// <body>
// <h1>JavaScript Fetch API</h1>
// <h2>The fetch() Method</h2>
// <p id="demo">Fetch a file to change this text.</p>

// <script>
// getText("fetch_info.txt");

// async function getText(file) {
//   let myObject = await fetch(file);
//   let myText = await myObject.text();
//   document.getElementById("demo").innerHTML = myText;
// }
// </script>

// </body>
// </html>

// Syntax 4


