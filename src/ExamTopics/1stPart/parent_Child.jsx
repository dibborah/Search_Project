// Example: 

// Filename: App.js In this file, we will embed the child component to the parent component. Also, we pass multiple props to the child component.

// import React, { Component } from 'react';
// import Child from './components/child.js';
 
// // Child component embedded to parent component
// // with props value
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a parent component</h1>
//                 <ul>
//                     <li>
//                         <Child gfgcolor="green" usercolor="blue" />
//                     </li>
//                 </ul>
//             </div>
//         );
//     }
// }
 
// export default App;

 
// Filename: Child.js In the child.js file, we will access props from the parent component and render them inside the child component. 

// import React, { Component } from 'react';
 
// // Accessing the props value using this.props
// class Child extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>This is a child component</h1>
//                 <h1 style={{ color: this.props.gfgcolor }}>
//                     GeeksForGeeks
//                 </h1>
//                 <h1 style={{ color: this.props.usercolor }}>
//                     hello user
//                 </h1>
//             </div>
//         );
//     }
// }
 
// export default Child;



///Child to parent 1st quesytion


// import React, { useState } from 'react'
// import Second from "./Second"

//  const First = () => {

//  const [state, setState] = useState("Dibya");
//  const [gettingDataFromChildComponent, setGettingDataFromChildComponent] = useState("");

//  const NaamLagao = (data) => {
  
//   console.log("Checking", data);
//     setGettingDataFromChildComponent(data)
//  }

//   return (
//     <div>

//       <Second
//       state = {state}
//       setName = {NaamLagao}
//       />

//      <span>hII{gettingDataFromChildComponent}</span>
//     </div>
//   )
// }

// export default First;


// 2nd child part 

// import React, { useEffect } from 'react'

//  const Second = ({state,setName}) => {

//   useEffect(()=>{
//     setName("Dib Good Going")
//   },[state])
  
//   return (
//     <>
//     {state}
//     </>
//   )
// }

// export default Second;

