import React from "react";
import "./Circle.css";
import avocado from "./images/avocado.png";
const Avocado = props => {
  if (props.isVisible === true) {
    return (
      <div
        className="Circle"
        onClick={props.clicked}
        style={{ backgroundImage: `url(${avocado})` }}></div>
    );
  } else {
    return <div className="Circle"></div>;
  }
};
export default Avocado;