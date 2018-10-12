import React, { Component } from "react";
import Questions from "./questions";

import "./questionsContainer.css";

import Hufflepuff from "./hufflepuff/hufflepuff";
import Slytherin from "./slytherin/slytherin";
import Ravenclaw from "./ravenclaw/ravenclaw";
import Gryffindor from "./gryffindor/gryffindor";

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      point: "",
      pointsArray: [],
      winner: ""
    };
  }

  pickWinner = () => {
    const g = [];
    const h = [];
    const r = [];
    const s = [];
    let newArr = [];
    //
    let pointsArray = this.state.pointsArray;
    for (let i = 0; i < pointsArray.length; i++) {
      switch (pointsArray[i]) {
        case "g":
          g.push(pointsArray[i]);
          break;
        case "h":
          h.push(pointsArray[i]);
          break;
        case "r":
          r.push(pointsArray[i]);
          break;
        case "s":
          s.push(pointsArray[i]);
          break;
      }
    }
    //
    let first = g.length >= h.length ? g : h;
    let second = r.length >= s.length ? r : s;
    let third = s.length >= g.length ? s : g;
    let fourth = h.length >= r.length ? h : r;
    let fifth = first.length >= second.length ? first : second;
    let sixth = third.length >= fourth.length ? third : fourth;
    //
    if (fifth.length === sixth.length) {
      let five = fifth.shift();
      let six = sixth.shift();
      let randomized = Math.round(Math.random());
      newArr.push(five);
      newArr.push(six);
      // return newArr[randomized]
      this.setState({
        winner: newArr[randomized]
      });
      //
    } else if (fifth.length > sixth.length) {
      let five = fifth.shift();
      // return five
      this.setState({
        winner: five
      });
    }
  };

  questionIncrement = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      pointsArray: [...this.state.pointsArray, this.state.point]
    });
  };

  questionDecrement = () => {
    this.state.pointsArray.pop();
    this.setState({
      questionNumber: this.state.questionNumber - 1
    });
  };

  onRadio = e => {
    this.setState({
      point: e.target.value
    });
  };
  render() {
    if (this.state.winner === "g") {
      return <Gryffindor />;
    } else if (this.state.winner === "h") {
      return <Hufflepuff />;
    } else if (this.state.winner === "r") {
      return <Ravenclaw />;
    } else if (this.state.winner === "s") {
      return <Slytherin />;
    }
    if (this.state.questionNumber === 6) {
      return (
        <div>
          <img
            className="hat"
            src="https://pm1.narvii.com/6354/2581cf8b65eb24d8902e8dbd391e2666e110438c_hq.jpg"
          />
          <h1 className="sortPage">In that case you belong to:...</h1>
          <button onClick={this.pickWinner}>SORT</button>
        </div>
      );
    }
    return (
      <div>
        <img
          className="hat"
          src="https://pm1.narvii.com/6354/2581cf8b65eb24d8902e8dbd391e2666e110438c_hq.jpg"
        />
        <Questions
          questionDecrement={this.questionDecrement}
          questionIncrement={this.questionIncrement}
          questionsDataArray={this.props.questionsDataArray}
          questionNumber={this.state.questionNumber}
          onRadio={this.onRadio}
          point={this.state.point}
        />
      </div>
    );
  }
}

export default QuestionsContainer;
