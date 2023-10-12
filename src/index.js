import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Example 3 :

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// import React from 'react'

// export const Counter = () => {
//   const[count, setCount] = useState(0)
//   const[calculations, setCalculations] = useState(0)

//   useEffect(()=>{
//     setCalculations(()=> count * 2)
//   },[count])

//   return (
//     <div>
//       count : {count}
//       <div>
//       <button onClick={() => setCount((c) => c+1)}>Click</button>
//       </div>
//       {calculations}
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Counter />);
