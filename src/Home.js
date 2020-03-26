import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="header bg ">
      <div className="align-self-center text-center">
        <h1 className="display-3">Guac-A-Mole</h1>
        <h4 className="display-5">
          Make the fastest and the most delicious guacamole!
        </h4>
        <Link to="/game">
          <button type="button" className="btn btn-success">
            Start Game!!!
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Home;