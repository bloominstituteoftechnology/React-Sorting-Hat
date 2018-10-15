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
    let newFirst = [];
    let newSecond = [];
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
    let first = [];
    if (g.length === h.length) {
      newFirst.push(g[0]);
      newFirst.push(h[0]);
      let randomized1 = newFirst[Math.round(Math.random())];
      if (randomized1 === g[0]) {
        first = g;
      } else if (randomized1 === h[0]) {
        first = h;
      }
    } else first = g.length > h.length ? g : h;

    let second = [];
    if (r.length === s.length) {
      newSecond.push(r[0]);
      newSecond.push(s[0]);
      let randomized2 = newSecond[Math.round(Math.random())];
      if (randomized2 === r[0]) {
        second = r;
      } else if (randomized2 === s[0]) {
        second = s;
      }
    } else second = r.length > s.length ? r : s;

    // let first = g.length >= h.length ? g : h;
    // let second = r.length >= s.length ? r : s;
    // let third = s.length >= g.length ? s : g;
    // let fourth = h.length >= r.length ? h : r;
    // let fifth = first.length >= second.length ? first : second;
    // let sixth = third.length >= fourth.length ? third : fourth;
    //
    // if (fifth.length === sixth.length) {
    //   let five = fifth.shift();
    //   let six = sixth.shift();
    //   let randomized = Math.round(Math.random());
    //   newArr.push(five);
    //   newArr.push(six);
    //   this.setState({
    //     winner: newArr[randomized]
    //   });
    // } else if (fifth.length > sixth.length) {
    //   let five = fifth.shift();
    //   this.setState({
    //     winner: five
    //   });
    // }
    let third = [];
    if (first.length === second.length) {
      newArr.push(first[0]);
      newArr.push(second[0]);
      let randomized = Math.round(Math.random());
      this.setState({
        winner: newArr[randomized]
      });
    } else if ((third = first.length > second.length ? first : second)) {
      this.setState({
        winner: third[0]
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
            alt="hat loading"
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
          alt="hat questions"
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
