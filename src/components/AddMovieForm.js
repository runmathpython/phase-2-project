import React, {useState} from "react";

function AddMovieForm({onAddMovie}){
    const [formData, setFormData] = useState({
        name: "",
        image: "",
    })

    function handleChange(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newMovie = {
            ...formData,
            likes: 0,
            comment: "no comment"
        }

        fetch("http://localhost:3001/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMovie)
        })
            .then(r => r.json())
            .then(onAddMovie)
    }

    return(
        <div className="add-container">
            <form onSubmit={handleSubmit} className="add-movie-form">
                <h3>Add A Movie!</h3>
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
                    name="image"
                    onChange={handleChange}
                    value={formData.image}
                    placeholder="Enter the image location of the movie..."
                    className="input-text"
                />
                <br />
                <input
                    type="submit"
                    name="submit"
                    value="SUBMIT"
                    className="submit"
                />
                <p>After SUBMIT, or to cancel, click Add A New Movie button</p>
            </form>
        </div>
    )
}

export default AddMovieForm