import React from 'react'

const MovieCard = ({ movie  : { Title, Year, imdbID, Type, Poster } }) => {
  return (
    <div className="movie" key={imdbID}>
        <div className="movieimg">
            <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} class="img-cover" alt={Title} />
        </div>
        <div className="moviecontent">
            <div className="movieyear">
                <span>{Type}</span>
                <p>{Year}</p>
            </div>
            <h3>{Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard