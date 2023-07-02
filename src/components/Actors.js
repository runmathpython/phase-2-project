import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map(actor => (
    <div className="spec" key={actor.name}>
      <h1 id="head">{actor.name}</h1>
      <h3>Movies:</h3>
      <ul>
        {actor.movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return(

    <div>
      <h1 id="head">Actors List</h1>
      {actorList}
    </div>
  )
}

export default Actors;