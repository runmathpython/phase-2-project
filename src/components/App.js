import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import MovieSpecs from "./MovieSpecs";

function App() {
  return(
    <div>
      <NavBar />
      <Switch>
        <Route path="/movieSpecs">
          <MovieSpecs />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  ) 
}

export default App;