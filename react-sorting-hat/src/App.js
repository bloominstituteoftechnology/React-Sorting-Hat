import React from 'react';
import logo from './logo.svg';
import './App.css';

import Question from "./components/Question";

const questions = [
  {
    question: "Which adjective best describes you?",
    brave: "g",
    patient: "h",
    witty: "r",
    ambitious: "s"
  },
  {
    question: "What is your spirit animal?",
    snake: "s",
    raven: "r",
    badger: "h",
    lion: "g"
  },
  {
    question: "What's your favorite color?",
    yellow: "h",
    green: "s",
    red: "g",
    blue: "r"
  },
  {
    question: "Choose your element.",
    air: "r",
    fire: "g",
    water: "s",
    earth: "h"
  }
]

const newState = {
  tally: {
    g: 0,
    h: 0,
    r: 0,
    s: 0,
  },
  currentQuestion: false,
  class: ["n", 0],
  result: ""
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...newState
    }
  }

  handleAnswerQuestion = (ans) => {
    const prevTally = this.state.tally   
    let highestTally
    if (prevTally[ans] + 1 >= this.state.class[1]) {
      highestTally = [ans, prevTally[ans] + 1]
    }
    const currentQuestion = this.state.currentQuestion < 5 ? this.state.currentQuestion + 1 : false
    if (currentQuestion === 5) {
      switch (this.state.class[0]) {
        case "g":
          this.setState({ result: "Gryffindor "});
          break;
        case "h":
          this.setState({ result: "Hufflepuff "});
          break;
        case "r":
          this.setState({ result: "Ravenclaw "});
          break;
        case "s":
          this.setState({ result: "Slytherin "});
          break;
      }
    }
    this.setState({ tally: {...prevTally, [ans]: prevTally[ans] + 1}, currentQuestion, class: highestTally })
  }

  renderQuestions  = () => {
    if (this.state.currentQuestion === 5) {

      return <h2>{this.state.result}</h2>
    }
    return <Question handleAnswerQuestion={this.handleAnswerQuestion} question={questions[this.state.currentQuestion - 1]} />
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.currentQuestion  && this.renderQuestions()}
        {(!this.state.currentQuestion || this.state.currentQuestion === 5 ) && <button onClick={() => this.setState({ ...newState, currentQuestion: 1  })}>Start!</button>}
      </div>
    )
  }
}