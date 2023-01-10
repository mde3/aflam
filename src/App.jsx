import React, {useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import MovieCard from './MovieCard';
import './App.css'

//static variable to hold api key
const API_URL = "http://www.omdbapi.com?apikey=d51e3d60";

const App =() => {
  //useState hook to display movies
  const [movies, setMovies] = useState([]);

  //useState hook to enable search function
  const [searchTerm, setSearchTerm] = useState("");

  //calling the useEffect hook
  useEffect(() => {
    searchMovies("Shrek");//calling movie to be displayed on initial start page
  }, []);

  //function to fetch movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="App container">

      <h1>AFLAM</h1>

      <div className="search-container">
        <input type="text" placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <AiOutlineSearch onClick={() => searchMovies(searchTerm)} className="icon" />
      </div>

      {
        movies?.length > 0
        ? (
            <div className="main-container grid container">
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className="empty">
              <h3>No movies found</h3>
            </div>
          )
      }

    </div>
  )
}

export default App
