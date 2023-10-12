// UseEffect =>

// Defination => UseEffect is a React Hook which allows you to put sideEffects in your components

// UseEffects takes two arguement : The Second arguement is optional

// UseEffect(<function>, <dependency>)

// Syntax with Example :

// import ReactDOM from "react-dom/client";
// import { useState, useEffect } from "react";

// function Timer() {
    //   const [count, setCount] = useState(0);
    
    //   useEffect(() => {
        //     setTimeout(() => {
            //       setCount((count) => count + 1);
            //     }, 1000);
            //   },[]);
            
            //   return <h1>I've rendered {count} times!</h1>;
            // }
            
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);





import {useState, useEffect} from 'react';

const Resource = () => {
    const [resource, resourceType] = useState('posts')

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => console.log(json))
    },[resource])

    return(
        <>
        <button onClick={() => resourceType('posts')}>posts</button>
        <button onClick={() => resourceType('users')}>users</button>
        <button onClick={() => resourceType('comments')}>comments</button>

        <h1>{resource}</h1>
        </>
    );
}

export default Resource;
















