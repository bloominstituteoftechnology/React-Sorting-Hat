import React from 'react';
import math from 'mathjs'
import Landing from './components/landing';
import Question from './components/question';
import './App.css';

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

class App extends React.Component {
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
      house: '',
    };
  }

  hideLanding(event) {
    event.target.parentNode.className = 'landingHidden';
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  submitHandler = (event) => {
    event.preventDefault();
    let arr = Object.values(this.state);
    arr.shift();
    arr.pop();
    console.log(arr);

    let arr2 = [];
    let holder;

    for (let i = 0; i < arr.length; i++) {
      holder = this.state.questions[i].choices.indexOf(arr[i]);
      arr2.push(holder);
    }
    let mode = math.mode(arr2);
    let house = mode[Math.floor(Math.random() * mode.length)];
    
    switch (house) {
      case 0: 
        this.setState({house: 'Gryffindor'})
        console.log('Gryffindor')
        break; 
      case 1: 
        this.setState({house: 'Hufflepuff'})
        console.log('Hufflepuff');
        break; 
      case 2: 
        this.setState({house: 'Slytherin'})
        console.log('Slytherin');
        break; 
      case 3:
        this.setState({house: 'Ravenclaw'})
        console.log('Ravenclaw');
        break;
      default:
        break; 
    }
  }

  render() {
    return (
      <div className="App">
        <Landing hideLanding={this.hideLanding}></Landing>
        <form>
          {this.state.questions.map((question, i) => <Question key={i+1} question={question} changeHandler={this.changeHandler} />)}
          <button onClick={this.submitHandler}>Sort me!</button>
        </form>
      </div>
    );
  }
}

export default App;