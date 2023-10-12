// onchange
// Defination => The onchange event occurs when the value of an HTML element is changed.


// <!DOCTYPE html>
// <html>
// <body>

// <p>Modify the text in the input field, then click outside the field to fire the onchange event.</p>

// Enter some text : <input id="x" value="hello" type="text" onchange="myFunc(this.value)"> </input>

// <script>
// function myFunc(val){
// alert("The text has changed.The updates text is: "+ val)
// }

// </script>

// </body>
// </html>



// <!DOCTYPE html>
// <html>
// <body>

// <p>Select a new car from the list.</p>

// <select id="vehicles" onchange="myFunc()">
// <option value="Thar">Thar</option>
// <option value="Tesla">Tesla</option>
// <option value="lambo">lambo</option>
// </select>
// <p>Select your dream car and it will be registered in your brain</p>
// <p id="demo"></p>

// <script>
// function myFunc(){
// var x = document.getElementById("vehicles").value
// document.getElementById("demo").innerHTML = "You registered aimed car is : " + x;
// }
// </script>

// </body>
// </html>
