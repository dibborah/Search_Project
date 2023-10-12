// Fetch API
// Defination => Fetch API is used to get data over the internet/Network 

// Basic Syntax  

// let promise = fetch(url,[Options]) without options a get request is sent 
//Options include post , update , delete


import {useState, useEffect} from 'react';

const Resource = () => {
    const [resource, resourceType] = useState('posts')
    
    // useEffect(()=>{
        
        // },[])
        
        
                let p = fetch("https://jsonplaceholder.typicode.com/comments/");
                p.then((response)=>{
                    return response = response.json
                }).then((value)=>{
                    console.log(value);
                })
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





