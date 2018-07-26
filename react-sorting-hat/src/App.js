import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Questions from './Components/Questions';
import Results from './Components/Results';

class App extends Component {
  constructor() {
    super();
    this.state = { name: 'Wizard', started: false, completed: false, currentQuestion: 0, currentAnswer: 1, result: 0 };
    // add , result: 0
  }

  startQuiz = () => {
    this.setState((prevState) => {
      return {started: !prevState.started};
    });
  }

  currentAnswer = (event) => {
    this.setState({currentAnswer: event.target.value})
  }

  nextQuestion = (event) => {
    event.preventDefault();
    if (this.state.currentQuestion !== 5){
      this.setState((prevState) => {
        return {currentQuestion: prevState.currentQuestion + 1, result: Number(prevState.result) + Number(prevState.currentAnswer) };
      });
    } else {
      this.setState({completed: true});
    }
  }

  render() {
    return (
      <div className="container">
        <Title name={this.state.name} startQuiz={this.startQuiz} />
        <Questions currentQuestion = {this.state.currentQuestion} nextQuestion={this.nextQuestion} currentAnswer={this.currentAnswer} />
        <Results />
      </div>
    );
  }
}

export default App;
