// useState 

// Defination =>

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properties that need to be tracking in an application.


// Example Syntax :

// import { useState } from "react";

// function FavoriteColor() {
//   const [color, setColor] = useState("");
// }

// Example 1 :

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
    //   const [color, setColor] = useState("red");
    
    //   return <h1>My favorite color is {color}!</h1>
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<FavoriteColor />);
    
// Example 2 :

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
    //   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);


// Example 3 :

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   return (
    //     <>
    //       <h1>My {car.brand}</h1>
    //       <p>
    //         It is a {car.color} {car.model} from {car.year}.
    //       </p>
    //     </>
    //   )
    // }
    
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<Car />);
    


// Example 4 :

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function Car() {
    //   const [car, setCar] = useState({
        //     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
    //     setCar(previousState => {
        //       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car />);