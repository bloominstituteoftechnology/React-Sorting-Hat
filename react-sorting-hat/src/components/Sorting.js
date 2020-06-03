import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionStepper from "../components/QuestionStepper";

export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      house: "",
    };
  }

  handleAnswers = (userAnswers) => {
    console.log("test");
// setting state working sort not working from in this function yet
    this.setState({
      ...this.state,
      answers: userAnswers,
    });
    this.sort();
};

  sort = () => {
    let arr = this.state.answers;
    let count = {};
    let compare = 0;
    let mostFrequent;
    let nextFrequent;
    let freqArr = [];
    let chosenHouse;
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      if (count[word] === undefined) {
        count[word] = 1;
      } else {
        count[word] = count[word] + 1;
      }
      if (count[word] > compare) {
        compare = count[word];
        mostFrequent = arr[i];
        if (!freqArr.includes(mostFrequent)) {
          freqArr.push(arr[i]);
        }
      } else if ((count[word] = compare)) {
        compare = count[word];
        nextFrequent = arr[i];
      }
    }
    chosenHouse = freqArr[Math.floor(Math.random() * freqArr.length)];

    this.setState({
      ...this.state,
      house: chosenHouse,
    });
  };

  render() {
    return (
      <>
        <Route
          path="/sort"
          render={(props) => (
            <QuestionStepper
              {...props}
              sort={this.sort}
              handleAnswers={this.handleAnswers}
              forlogs={this.state.answers}
            />
          )}
        />

        <div>You belong to house {this.state.house}</div>
        <button onClick={this.sort}>Sort</button>
      </>
    );
  }
}
