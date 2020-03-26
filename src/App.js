import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Game from "./Game";
import Result from "./Result";
function App() {
  return (
    <div className="bgcolor">
      <Switch>
        <Route exact path="/game" component={Game} />
        <Route exact path="/" component={Home} />
        <Route exact path="/result" component={Result} />
        <Redirect exact path="/" />
      </Switch>
    </div>
  );
}
export default App;