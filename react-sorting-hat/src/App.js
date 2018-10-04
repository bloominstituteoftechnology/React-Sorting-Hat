import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Question from './components/question';

let questions = [{
    id: 'q1',
    copy: 'Question 1: When hanging out with friends, what do you prefer to do?', 
    choices: [
      'Try as many new things as you can.',
      "Catch up on each other's lives.",
      'Play strategy board games.',
      "Talk about new things you've learned.",
    ]},{
    id: 'q2',
    copy: 'Question 2: When encountering a potential enemy, what do you do?',
    choices: [
      'Immediately attempt to attack them.',
      'Make your best effort to befriend them.',
      'Escape the situation by tricking them.',
      'Devise a detailed plan before doing anything else.', 
    ]},{
    id: 'q3',
    copy: 'Question 3: Which of these is your spirit animal?',
    choices: [
      'A Lion.',
      'A Badger.',
      'A Raven.',
      'A Snake.',
    ]},{
    id: 'q4',
    copy: 'Question 4: Which of these elements resonates most with you?',
    choices: [    
      'Fire',
      'Earth',
      'Air',
      'Water',
    ]},{
    id: 'q5',
    copy: 'Question 5: Which of these famous wizards appeals to you most?',
    choices: [    
      'Harry Potter',
      'Cedric Diggory',
      'Draco Malfoy',
      'Luna Lovegood',
  ]},{
    id: 'q6',
    copy: 'Question 6: Which of these is your defining trait?',
    choices: [
    'Bravery',
    'Loyalty',
    'Cunning',
    'Wisdom',
    ]},
]

//----------------------------------------------------------------------------------------------------

class App extends Component {

  constructor() {
    super();
    this.state = {
      questions: questions,
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      q6: '',
    };
  }

  hideLanding(event) {
    event.target.parentNode.className = 'landingHidden';
  }

  changeHandler(event) {
    console.log(event.target.value);
    this.setState({event.target.name: event.target.value})

  }

  render() {
    return (
      <div className="App">
        <Landing hideLanding={this.hideLanding}></Landing>
        <form>
          {this.state.questions.map((question, i ) => <Question key={i+1} question={question} changeHandler={this.changeHandler}/>) }
          <input type='submit' value="sort me!" />
        </form>
      </div>
    );
  }
}

export default App;