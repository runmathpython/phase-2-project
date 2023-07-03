import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddMovieForm from "./AddMovieForm";
import MovieContainer from "./MovieContainer";
import NewCommentForm from "./NewCommentForm";

function Home(){
  const [showAddMovieForm, setShowAddMovieForm] = useState(false)
  const [showNewCommentForm, setShowNewCommentForm] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch("http://localhost:3001/movies")
          .then(response => response.json())
          .then(setMovies)
  }, [])

  function handleClick1(){
    setShowAddMovieForm(showAddMovieForm => !showAddMovieForm)
  }

  function handleClick2(){
    setShowNewCommentForm(showNewCommentForm => !showNewCommentForm)
  }

  function handleAddMovie(newMovie){
    setMovies([...movies, newMovie])
  }

  function updateTheSetOfAllThelMovies(updatedOne){
    // find the movie to be updated and replace it with updated movie
    const updatedMovies = movies.map(movie =>
      movie.id === updatedOne.id ? updatedOne : movie
      )
      // render all the movies
      setMovies(updatedMovies)
  }

  function handleNewComment(theMovie){
    // find the movie to be updated and replace it with updated movie with the new comment
    updateTheSetOfAllThelMovies(theMovie)
}

  function handleDeleteMovie(movieToBeDeleted){
      const updatedMovies = movies.filter(movie => movie.id !== movieToBeDeleted.id)
      setMovies(updatedMovies)
  }

  function handleUpdateMovie(updatedMovie){
      // find the movie to be updated and replace it with updated movie with the new likes
      updateTheSetOfAllThelMovies(updatedMovie)
  }

  return(
      <div>
          <Header />
          
          {showAddMovieForm ? <AddMovieForm onAddMovie={handleAddMovie} /> : null}
          <div className="buttonContainer">
              Adding a new movie, click this: <button onClick={handleClick1}>New Movie</button>
          </div>

          {showNewCommentForm ? <NewCommentForm onNewComment={handleNewComment} /> : null}
          <div className="buttonContainer">
              Putting a new comment, click this: <button onClick={handleClick2}>New Comment</button>
          </div>

          <MovieContainer
              movies={movies}
              onDeleteMovie={handleDeleteMovie}
              onUpdateMovie={handleUpdateMovie}
          />
      </div>
  )
}

export default Home