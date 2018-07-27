import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Question from './components/Question'
import QuestionList from './components/QuestionList'
import Results from './components/Results'
import Hat from './harry-potter.svg'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomed : false,
      chosenHouse: '',
      questionList: QuestionList,
      houses: [
        {
          name: 'hufflepuff',
          count: 0
        },
        {
          name: 'ravenclaw',
          count: 0
        },
        {
          name: 'gryffindor',
          count: 0
        },
        {
          name: 'slytherin',
          count: 0
        }
      ],
      currentIndex: 0,
      currentQuestion: '',
      isLastQuestion: false
    }
  }

  componentDidMount() {
    this.setState(prevState => ({ currentQuestion: prevState.questionList[prevState.currentIndex] }))
  }

  handleWelcome = () => {
    this.setState({ welcomed: true })
  }

  handleSubmit = (selected) => {
    if (selected) {
    this.setState(prevState => ({
      houses: prevState.houses.map(house => {
        if (house.name === selected) {
          house.count = house.count + 1;
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
      this.showNext();
    } else {  
      this.handleResults();
    }
  }
}
  handleQuestionCheck = () => {
    if (this.state.currentIndex === this.state.questionList.length-1) {
      this.setState({isLastQuestion: true})
    } 
  }

  showNext = () => {
    this.setState(prevState => ({
      currentQuestion: prevState.questionList[prevState.currentIndex]
    }))
  }

  handleResults = () => {
    let winner = this.state.houses.reduce((first, house) => {
      return house.count > first.count ? house : first
    }, this.state.houses[0]);
    this.setState({ chosenHouse: winner })
  }

  render() { 
    const showQuestions = this.state.welcomed && !this.state.chosenHouse;
    const showResults = this.state.welcomed && this.state.chosenHouse;
    return (
      <div className="App">
        <div className="background"></div>
        <img className="header" src={Hat} />
        <div className="app-container">
        {!this.state.welcomed && 
        <Welcome 
          handleWelcome={this.handleWelcome} 
        /> }
        {showQuestions && <Question 
          currentQuestion={this.state.currentQuestion}
          handleSubmit={this.handleSubmit}
          isLastQuestion={this.state.isLastQuestion}
          handleQuestionCheck={this.handleQuestionCheck}
        />} 
        {showResults && 
        <Results 
          chosenHouse={this.state.chosenHouse} />}
        </div>
      </div>
    );
  }
}

export default App;
