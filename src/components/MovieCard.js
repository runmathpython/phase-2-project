import React from "react";

function MovieCard({movie, onDeleteMovie, onUpdateMovie}){
    const {id, name, image, likes, comment} = movie

    console.log("image: ", `${image}`)

    function handleClickDelete(){
        fetch(`http://localhost:3001/movies/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(() => {
                onDeleteMovie(movie);
            });
    }

    function handleClickLike(){
        const updateObj = {
            likes: movie.likes + 1,
          };
      
          fetch(`http://localhost:3001/movies/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateObj),
          })
            .then(res => res.json())
            .then(onUpdateMovie);
    }

    return(
        <div className="card">
            <h2>{name}</h2>
            <img src={image} alt={name} className="movie-avatar" />
            <p>{likes} Likes </p>
            <button className="like-btn" onClick={handleClickLike}>
                Like {"❤️"}
            </button>
            <br />
            <button className="del-btn" onClick={handleClickDelete}>
                Delete
            </button>
            <p>{comment}</p>
        </div>
    )

}

export default MovieCard