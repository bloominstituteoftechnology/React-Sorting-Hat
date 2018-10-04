import React, { Component } from 'react';
import logo from './logo.svg';
import Start from './components/Start.js';
import QuestionList from './components/QuestionList.js';
import Question from './components/Question.js';
import Sorted from './components/Sorted.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      started: false,
      questionList: QuestionList,
      currentIndex: 0,
      currentQuestion: '',
      sortedHouse: '',
      lastQuestion: false,
      houses: [
        {
          name: 'Gryffindor',
          points: 0,

        },
        {
          name: 'Slytherin',
          points: 0,

        },
        {
          name: 'Hufflepuff',
          points: 0,

        },
        {
          name: 'Ravenclaw',
          points: 0

        }
      ],

    }
  }

componentDidMount() {
    this.setState(prevState => ({ currentQuestion: prevState.questionList[prevState.currentIndex] }))
  }

  handleStart = () => {
    this.setState({started: true})
  };

  handleAnswer = selected => {
    if (selected) {
    this.setState(prevState => ({
      houses: prevState.houses.map(house => {
        if (house.name.toLowerCase() === selected) {
          house.points = house.points + 1;
          return house;
        } else {
          return house;
        }
      })
    }))
    if (this.state.currentIndex < this.state.questionList.length-1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1
      }))
      console.log(this.state.houses);
      this.nextQuestion();
    } else {
      this.sort();
    }
  }
  }

  handleQuestion = () => {
    if (this.state.currentIndex === this.state.questionList.length-1) {
      this.setState({lastQuestion: true})
    }
  }

  nextQuestion = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.questionList[prevState.currentIndex]
    }))
  }

  sort = () => {
    let chosenHouse = this.state.houses.reduce((first, house) => {
      return house.points > first.points ? house : first
    });
    this.setState({ sortedHouse: chosenHouse})
    console.log(this.state.sortedHouse);
  }


  render() {
    const showQuestions = this.state.started && !this.state.sortedHouse;
    const showSorted = this.state.started && this.state.sortedHouse;
    return (
      <div className="App">
        <div className='container'>
          {!this.state.started &&
          <Start handleStart={this.handleStart}/>}
          {showQuestions &&
          <Question
          currentQuestion={this.state.currentQuestion}
        handleAnswerChange={this.handleAnswerChange}
        handleAnswer={this.handleAnswer}
      lastQuestion={this.state.lastQuestion}
    handleQuestion={this.handleQuestion} />}
    {showSorted &&
    <Sorted
      sortedHouse={this.state.sortedHouse} />
    }
        </div>
      </div>
    );
  }
}

export default App;
