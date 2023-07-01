import React, {useState} from "react";

function NewCommentForm({onNewComment}){
    const [formData, setFormData] = useState({
        name: "",
        comment: "",
    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        function isMovie(item, theName){
            return item.name === `${theName}`
          }
        
          function getTheMovie(movies, theName, cb){
            let result = null
            for (let movie of movies){
              if(cb(movie, theName) === true){
                result = movie
                break
              }
            }
            return result
          }

        // get all the movies
        fetch('http://localhost:3001/movies')
            .then(response => response.json())
            // find the movie with the name and update the comment
            .then(movies => {
                let foundMovie = getTheMovie(movies, formData.name, isMovie)
                // update the comment
                foundMovie.comment = formData.comment
  
                // update the database
                fetch(`http://localhost:3001/movies/${foundMovie.id}`, {
                    method: 'PATCH',
                    headers:{
                        'Content-Type': 'application/json',
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(foundMovie)
                })
                    .then(response => response.json())
                    .then(onNewComment)
            })
    }

    return(
        <div className="comment-container">
            <form onSubmit={handleSubmit} className="new-comment-form">
                <h3>New Comment!</h3>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="Enter the name of the movie"
                    className="input-text"
                />
                <br />
                <input
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={formData.comment}
                    placeholder="Enter a new comment"
                    className="input-text"
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="SUBMIT"
                    className="submit"
                />
                <p>After SUBMIT, or to cancel, click New Comment button again</p>
            </form>
          </div>
    )
}

export default NewCommentForm