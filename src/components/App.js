import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddMovieForm from "./AddMovieForm";

import MovieContainer from "./MovieContainer";

function App(){
  const [showAddMovieForm, setShowAddMovieForm] = useState(false)
  //const [showNewCommentForm, setShowNewCommentForm] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch("http://localhost:3001/movies")
          .then(response => response.json())
          .then(setMovies)
  }, [])

  function handleClick(){
    setShowAddMovieForm(showAddMovieForm => !showAddMovieForm)
  }

  function handleAddMovie(newMovie){
      setMovies([...movies, newMovie])
  }

  function handleDeleteMovie(movieToBeDeleted){
      const updatedMovies = movies.filter(movie => movie.id !== movieToBeDeleted.id)
      setMovies(updatedMovies)
  }

  function handleUpdateMovie(updatedMovie){
      const updatedMovies = movies.map(movie =>
      movie.id === updatedMovie.id ? updatedMovie : movie
      );
      setMovies(updatedMovies);
  }

  return(
      <div>
          <Header />
          {showAddMovieForm ? <AddMovieForm onAddMovie={handleAddMovie} /> : null}
          <div className="buttonContainer">
              <button onClick={handleClick}>Add A New Movie</button>
          </div>
          
          <MovieContainer
              movies={movies}
              onDeleteMovie={handleDeleteMovie}
              onUpdateMovie={handleUpdateMovie}
          />
      </div>
  )
}

export default App