import React, { useState, useEffect } from "react";

export const FetchAPI = () => {
  const [records, setRecords] = useState([]);
//   const [records, setRecords] = useState([]);
  useEffect(() =>{
   console.log('pokamon data' , records)
  },[records]);
  const fetchData = () => {
    let p = fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

    p.then((response) => response.json()) 
     .then((data) => {
        console.log(data);
        console.log(data.results);
      return setRecords(data.results);
    })
    .catch((err) => console.log(err));
  }

useEffect(() => {
    fetchData()   
  }, []);

  const displayData=()=>{

    records?.map((result, index) => {

        const imageWrapper = document.createElement("div")
        imageWrapper.classList.add("search-results")
        const image = document.createElement("img")
        image.src = result.url;
        image.alt = result.name

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageWrapper)

    })
   
  }

//   submit function 
const fun = () => {

}


// user filter method to filter out your searched element.
// records  state



  return (
    <div>

      <h1>Kanto PokeDex</h1>

        <form>
            {/* onchange={(e)=>setState(e.target.value)} */}
            <input type="text" id="search-input" placeholder="Search for pokemon"/>
            {/* onClick={()=> fun()} */}
            <button id="search-button"> Search </button>
        </form>

       {/*
        <div className="search-results">
            <div className="search-result">
                <img src="https://pokeapi.co/api/v2/pokemon/1/" alt="BULBA...."/>
            </div>
        </div> */}

        {records?.map((element, index) => (
            <p key = {index}> {element.name} </p>  
        ))} 

        {displayData()}

    </div>
  );
};

export default FetchAPI;

