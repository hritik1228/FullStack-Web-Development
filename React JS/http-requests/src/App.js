import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {

 
  const [movies,setMovies]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);

  async function fetchMoviesHandler(){

    // fetch("https://swapi.dev/api/films").then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data.results);
    // })

    setIsLoading(true);
    setError(null);

    try{
      const response=await fetch('https://swapi.dev/api/films')
      if(!response.ok){
        throw new Error('Something went error')
      }
      const data=await response.json() // To convert the JSON Response into Javascript objects
      
      setMovies(data.results);
  
      setIsLoading(false)
    }

    catch(error){
      setError(error.message);
    }
   setIsLoading(false);
    
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length==0 && !error && <p>Found no Movies.</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
