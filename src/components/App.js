import React, {useEffect, useState} from "react";
import Header from "./Header";
import AddMovieForm from "./AddMovieForm";
import MovieContainer from "./MovieContainer";
import NewCommentForm from "./NewCommentForm";

function App(){
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

  function handleNewComment(theMovie){
    let k = null;
    for (let i = 0; i < movies.length; i++){
        if(movies[i].id === theMovie.id){
            k = i
            break
        }
    }
    movies[k] = theMovie
    setMovies([...movies])
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

export default App