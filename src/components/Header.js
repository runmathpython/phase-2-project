import React from "react";
import moviephoto from "./images/moviephoto.png"

function Header(){
    return(
        <div >
            <h1 id="head">Movie Library</h1>
            <div id="movie-header">
                <img
                src={moviephoto}
                alt="movie header"
                />
            </div>
        </div>
    )
}

export default Header