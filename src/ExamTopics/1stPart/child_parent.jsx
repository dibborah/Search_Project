//Parent Component
// App.jsx




// import React from 'react';
// import Child from './Child'
// class App extends React.Component {
 
//     state = {
//         name: "",
//     }
 
//     // Callback function to handle data received from the 
//     //child component
//     handleCallback = (childData) => {
//         // Update the name in the component's state
//         this.setState({ name: childData }) 
//     }
 
//     render() {
//         const { name } = this.state;
//         return (
//             <div>
//                 <Child parentCallback={this.handleCallback} />
//                 {name}
//             </div>
//         )
//     }
// }
// export default App















// Child Component 
// Child.jsx 


// import React from 'react'
// class Child extends React.Component {
//     // Function triggered when the form is submitted
//     onTrigger = (event) => {
//         // Call the parent callback function 
//         this.props.parentCallback(event.target.myname.value);
//         event.preventDefault();
//     }
 
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.onTrigger}>
//                     <input type="text"
//                             name="myname"
//                             placeholder="Enter Name" />
//                     <br></br><br></br>
//                     <input type="submit" value="Submit" />
//                     <br></br><br></br>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Child