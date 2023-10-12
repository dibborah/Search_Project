//useState
//React Hook

//Defination ==> "useState is used to track state of a functional component"
//State refers => 1.Data 2. Properties => Needed to be tracked in an application

// Uses => Allows to add state to functional component

// Syntax w/ Example => 2 arguement => 1. Current State 2. Updater Funtion

// import { useState } from "react";

// function FavoriteColor() {
//   const [color, setColor] = useState("");
// }


import React, { useState } from 'react'

const UseStateLearn = () => {
    const [count, setCount] = useState(0);

    const Decrement = () => {
        setCount( prevCount => prevCount - 1);
    }
    const Increment = () => {
        setCount( prevCount => prevCount + 1);
    }

    return(
        <>
        <button onClick={()=>Decrement()}>-</button>
        {count}
        <button onClick={()=>Increment()}>+</button>
        
        </>
    );
}

export default UseStateLearn;


// Example Syntax 

// import {useState} from 'react';

// const FavoriteColor= () =>{
//     const [color, setColor] = useState("")
    
//     return(
//         <>
//         </>
//     );
// }


// UseState is a React Hook which tracks and Add state like Data or Properties in React Functional Component 

