import React from "react";
import {movieSpecs} from "../data";

function MovieSpecs(){
  const movieSpecList = movieSpecs.map(movieSpec => (
    <div className="spec" key={movieSpec.title}>
      <h1 id="head">{movieSpec.title}</h1>
      <p>Run Time: {movieSpec.time} minutes</p>
      <p>Genres:</p>
      <ul>
        {movieSpec.genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return(
    <div>
      <h1 id="head">Movie Specs</h1>
      {movieSpecList}
    </div>
  )
}

export default MovieSpecs;