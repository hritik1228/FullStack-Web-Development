import React, { useEffect, useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function GenerateJoke() {
  // Custom Hook-Passing arugment as category="movie"
  // const joke=useRandomJoke('movie')

  // Creating state for input fields
  const [category, setCategory] = useState("food");

  // Because of useState hook it send request each time when the input field value changes so using useRef hook as a reference
  const movieRef = useRef(null);

  // onChange method for input field
  // const handleOnChange=(e)=>{
  //     setCategory(e.target.value)
  // }

  // onClick method on button click
  const generateJoke = (e) => {
    e.preventDefault();
    setCategory(movieRef.current.value);
  };

  const joke = useRandomJoke(category);

  //   const [joke,setJoke]=useState('')

  //   useEffect(()=>{
  //     const fetchJoke=async ()=>{
  //       await fetch('https://api.chucknorris.io/jokes/random').then(res=>res.json()).then(data=>{
  //         setJoke(data.value);
  //       // console.log(data.value)
  //       })
  //     }
  //     fetchJoke()
  //   },[])
  return (
    <div>
      <center>
        <h1>Joke Generator</h1>
        <h4>{joke}</h4>
        <form>
          <input
            type="text"
            placeholder="Enter category for the joke"
            ref={movieRef}
          />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default GenerateJoke;
