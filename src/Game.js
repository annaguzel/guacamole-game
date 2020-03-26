import React, { Component } from "react";
import Avocado from "./Avocado";
import "./App.css";
// import { NavLink } from "react-router-dom";
import Result from "./Result";
class Game extends Component {
  state = {
    circles: new Array(6).fill({}).map(() => {
      return { isAvocado: false };
    }),
    score: 0,
    remainingTime: 10
  };
  startGame = () => {
    this.startCountDown(this.state.remainingTime);
    setInterval(() => {
      this.setState({
        circles: this.getCircles()
      });
    }, 1000);
  };
  getCircles = () => {
    const circlesArray = new Array(6).fill({}).map(() => {
      return { isAvocado: false };
    });
    const randomNumber = Math.floor(Math.random() * Math.floor(6));
    circlesArray[randomNumber].isAvocado = true;
    return circlesArray;
  };
  startCountDown = seconds => {
    let counter = seconds;
    const interval = setInterval(() => {
      counter--;
      this.setState({ remainingTime: counter });
      if (counter <= 0) {
        clearInterval(interval);
        // alert("game Over! your Score is " + this.state.score);
        // return (
        //   <NavLink to="/result">
        //     <button>Result</button>
        //   </NavLink>
        // );
      }
    }, 1000);
  };
  avocadoSmashed = () => {
    this.setState({
      circles: this.getCircles(),
      score: this.state.score + 5
    });
  };
  render() {
    const circles = this.state.circles.map((circle, index) => {
      return (
        <Avocado
          key={`circle-${index}`}
          isVisible={circle.isAvocado}
          clicked={this.avocadoSmashed}
        />
      );
    });
    return (
      <div className="container header">
        {this.state.remainingTime === 0 && <Result score={this.state.score} />}
        {this.state.remainingTime > 0 && (
          <div class="row align-items-center">
            <div class="col-sm-6">
              <h2>Score: {this.state.score}</h2>
              <p>Remaining Time: {this.state.remainingTime / 100} min</p>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.startGame}
              >
                <h3>Start</h3>
              </button>
              <br></br>
            </div>
            <div class="col-sm-6">{circles}</div>
          </div>
        )}
      </div>
    );
  }
}
export default Game;