import React from "react";
import moviephoto from "./images/moviephoto.png"

function Header(){
    return(
        <div id="movie-header">
            <img
                src={moviephoto}
                alt="movie header"
            />
        </div>
    )
}

export default Header