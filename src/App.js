import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Game from "./Game";
function App() {
  return (
    <div className="bgcolor">
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
export default App;