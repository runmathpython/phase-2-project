import React from "react";
import MovieCard from "./MovieCard";

function MovieContainer({movies, onDeleteMovie, onUpdateMovie}){
    const movieCards = movies.map(movie => 
        <MovieCard
            key={movie.id}
            movie={movie}
            onDeleteMovie={onDeleteMovie}
            onUpdateMovie={onUpdateMovie}
        />
    )

    return <div id="movie-collection">{movieCards}</div>
}

export default MovieContainer