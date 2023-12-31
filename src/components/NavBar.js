import React from "react";
import {NavLink} from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/movieSpecs">Movie Specs</NavLink></li>
        <li><NavLink to="/directors">Directors List</NavLink></li>
        <li><NavLink to="/actors">Actors List</NavLink></li>
      </ul>
      
    </div>
  )
}

export default NavBar;