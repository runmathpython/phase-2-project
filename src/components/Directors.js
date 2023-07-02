import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map(director => (
    <div className="spec" key={director.name}>
      <h1 id="head">{director.name}</h1>
      <h4>Movies:</h4>
      <ul>
        {director.movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return(
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  )
}

export default Directors;
