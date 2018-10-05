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
          description: 'With a lion as its crest and Professor McGonagall at its head, Gryffindor is the house which most values the virtues of courage, bravery and determination',
          founder: 'Godric Gryffindor, the most accomplished duellist of his time',
          famousMembers: 'Albus Dumbledore, Headmaster of Hogwarts and founder of the Order of the Phoenix, widely considered to be one of the greatest wizards of all time; Minerva McGonagall, and accomplished Animagus; Hermione Granger, one of the most brilliant witches of her time and constantly saving that chosen kid',
          houseGhost: 'Sir Nicholas de Mimsy-Porpington',

        },
        {
          name: 'Slytherin',
          points: 0,
          description: 'Slytherin produces more than its share of Dark wizards, but also turns out leaders who are proud, ambitious and cunning. Merlin is one particularly famous Slytherin',
          founder: 'Salazar Slytherin, one of the first recorded Parselmouths',
          famousMembers: 'Merlin, one of the most famous wizards in history; Phineas Nigellus Black, a Headmaster of Hogwarts, Tom Riddle, a direct descendent of Salazar Slytherin who was very promising but tried to kill nearly everyone',
          houseGhost: 'The Bloody Baron',

        },
        {
          name: 'Hufflepuff',
          points: 0,
          description: 'Hufflepuffs value hard work, patience, loyalty, and fair play. The house has produced its share of great wizards',
          founder: 'Helga Hufflepuff, skilled in food-related charms. Many Hogwarts recipes originated with Helga',
          famousMembers: 'Newt Scamander, author of Fantastic Beasts and Where to Find Them; Bridget Wenlock, the first to discover the magical significance of the number seven; Cendric Diggory, good, kind, brave, and a credit to his house.',
          houseGhost: 'The Fat Friar',

        },
        {
          name: 'Ravenclaw',
          points: 0,
          description: 'Ravenclaws prize wit, learning, and wisdom. It\'s an ethos etched into founder Rowena Ravenclaw diadem: \'wit beyond measure is man\'s greatest treasure\'',
          founder: 'Rowena Ravenclaw, an extremely skilled witch known for her intelligence and wisdom',
          famousMembers: 'Garrick Ollivander, an exceptionally talented wizard and the finest wandmaker the world has ever seen; Filius Flitwick, a professor and, in his youth, a duelling champion; Millicent Bagnold, a popular Minister for Magic who once asserted \'[the wizarding world\'s] inalienable right to party\'',
          houseGhost: 'The Grey Lady',

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
