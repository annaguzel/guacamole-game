import React from "react";
import "./Circle.css";
import guacamole from "./images/guacamole.png"
const Guacamole = props => {
  if (props.clicked) {
    return (
      <div
        className="Circle"
        onClick={props.clicked}
        style={{ backgroundImage:`url(${guacamole})`}}></div>
    );
  } 
     else {
    return <div className="Circle"></div>;
  }

};
export default Guacamole;