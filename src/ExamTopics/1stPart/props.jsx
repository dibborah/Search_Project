// Props 

// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

// props stands for properties.

// React Props

// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

// Syntax :

// Example 1: 

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// const myElement = <Car brand="Ford" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

// Example 2 :

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function Garage() {
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand="Ford" />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// Example 3 :

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
    //   return <h2>I am a { props.brand }!</h2>;
    // }
    
    // function Garage() {
        //   const carName = "Ford";
        //   return (
            //     <>
            // 	    <h1>Who lives in my garage?</h1>
            // 	    <Car brand={ carName } />
            //     </>
            //   );
            // }
            
            // const root = ReactDOM.createRoot(document.getElementById('root'));
            // root.render(<Garage />);
            
// Example 4 :

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a { props.brand.model }!</h2>;
// }

// function Garage() {
//   const carInfo = { name: "Ford", model: "Mustang" };
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand={ carInfo } />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
            