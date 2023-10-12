// Destructuring 

// Defination : 

// To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

// Destructuring is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring makes it easy to extract only what is needed.

// Example 1 :

// Before:

// const vehicles = ['mustang', 'f-150', 'expedition'];

// // old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

// Here is the new way of assigning array items to a variable:

// After

// With destructuring:

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car, truck, suv] = vehicles;

// Then =>

// const vehicles = ['mustang', 'f-150', 'expedition'];

// const [car,, suv] = vehicles;


// Example 2 :

// <!DOCTYPE html>
// <html>

// <body>
  
// <script>
// function calculate(a, b) {
//   const add = a + b;
//   const subtract = a - b;
//   const multiply = a * b;
//   const divide = a / b;

//   return [add, subtract, multiply, divide];
// }

// const [add, subtract, multiply, divide] = calculate(4, 7);

// document.write("<p>Sum: " + add + "</p>");
// document.write("<p>Difference " + subtract + "</p>");
// document.write("<p>Product: " + multiply + "</p>");
// document.write("<p>Quotient " + divide + "</p>");
// </script>

// </body>
// </html>


// Example 3 :
// Before:

// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne); 

// // old way
// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
// }

// Example
// With destructuring:

// <!DOCTYPE html>
// <html>

// <body>

// <p id="demo"></p>
  
// <script>
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red'
// }

// myVehicle(vehicleOne);

// function myVehicle({type, color, brand, model}) {
//   const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';

//   document.getElementById("demo").innerHTML = message;
// }
// </script>

// </body>
// </html>

// Example 

// <!DOCTYPE html>
// <html>

// <body>

// <p id="demo"></p>
  
// <script>
// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021, 
//   color: 'red',
//   registration: {
//     city: 'Houston',
//     state: 'Texas',
//     country: 'USA'
//   }
// }

// myVehicle(vehicleOne)

// function myVehicle({ model, registration: { state } }) {
//   const message = 'My ' + model + ' is registered in ' + state + '.';

//   document.getElementById("demo").innerHTML = message;
// }
// </script>

// </body>
// </html>