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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tally: {
        g: 0,
        h: 0,
        r: 0,
        s: 0
      },
      currentQuestion: false
    }
  }

  handleAnswerQuestion = (ans) => {
    const prevTally = this.state.tally
    const currentQuestion = this.state.currentQuestion < 4 ? this.state.currentQuestion + 1 : false
    this.setState({ tally: {...prevTally, [ans]: prevTally[ans] + 1}, currentQuestion })
  }

  renderQuestions  = () => {
    return <Question handleAnswerQuestion={this.handleAnswerQuestion} question={questions[this.state.currentQuestion - 1]} />
  }
  
  render() {
    console.log(this.state.tally)
    return (
      <div>
        {this.state.currentQuestion && this.renderQuestions()}
        {!this.state.currentQuestion && <button onClick={() => this.setState({ currentQuestion: 1 })}>Start!</button>}
      </div>
    )
  }
}