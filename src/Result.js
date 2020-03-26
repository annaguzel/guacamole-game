import React, { Component } from "react";
import { Link } from "react-router-dom";
class Result extends Component {
    render(){
  return (
    <div className="header bg ">
      <div className="align-self-center text-center">
        <h1 className="display-3">Holy Guacamole!!!</h1>
        <h2 className="display-5">
              Your score is {this.props.score}!!!
            </h2>
            <Link to="/">
          <button type="button" className="btn btn-success">
            Play Again!!!
          </button>
            </Link>
      </div>
    </div>
  );
}}
export default Result;