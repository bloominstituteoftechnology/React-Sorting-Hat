import React from 'react';
import './App.css';
import HomePage from './homepage.js';
import Quiz from './quiz.js';
import Results from './Results.js';
const resultsArr=[
  {
    'house': 'Gryffindor',
    'image':'https://images.pottermore.com/bxd3o8b291gf/49zkCzoZlekCmSq6OsycAm/da6278c1af372f18f8b6a71b226e0814/PM_House_Pages_400_x_400_px_FINAL_CREST2.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': "Where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart.",
    'wizards':['Harry Potter', 'Godric Gryffindor', 'Albus Dumbledore']
  },
  {
    'house': 'Ravenclaw',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/5pnnQ5puTuywEEW06w2gSg/91abff3d923b4785ed79e9abda07bd07/PM_House_Pages_400_x_400_px_FINAL_CREST.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': 'Where those of wit and learning, will always find their kind.',
    'wizards': ['Rowena Ravenclaw', 'Filius Flitwick','Garrick Ollivander']
  },
  {
    'house': 'Hufflepuff',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/2GyJvxXe40kkkG0suuqUkw/e1a64ec404cf5f19afe9053b9d375230/PM_House_Pages_400_x_400_px_FINAL_CREST3.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': 'Those patient Hufflepuffs are true, and unafraid of toil.',
    'wizards': ['Helga Hufflepuff', 'Cedric Diggory', 'Pomona Sprout']
  },
  {
    'house':'Slytherin',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/4U98maPA5aEUWcO8uOisOq/e01e17cc414b960380acbf8ace1dc1d5/PM_House_Pages_400_x_400_px_FINAL_CREST4.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': 'Those cunning folk use any means, to achieve their ends.',
    'wizards': ['Lord Voldemort', 'Salazar Slytherin', 'Severus Snape']
  }
]
const quizArr=[
{
  'question': 'Which of these traits best describes you?',
  'answer1': 'Brave',
  'answer2':'Clever',
  'answer3':'Loyal',
  'answer4': 'Cunning'
},
{
  'question': "Your friend has a problem - they're being picked on! What do you do?",
  'answer1': 'Rush in without thinking and defend them!',
  'answer2': 'Quickly formulate a brilliant plan to help them.',
  'answer3': "Run and get a teacher - they'll be able to help more than you.",
  'answer4': 'Consider carefully...what do you get out of this?'
},
{
  'question': 'Which of these would be the best pet EVER?',
  'answer1': 'A hippogriff: fierce, fast and fearless.',
  'answer2': 'An owl or a phoenix: something clever.',
  'answer3': 'A dog or cat: something loyal and kind.',
  'answer4': 'A snake or a lizard.'
},
{
  'question': 'What would your family say is your worst trait?',
  'answer1': "Reckless - you don't think before you act.",
  'answer2': "A bit of a know-it-all.",
  'answer3': "You're too nice for your own good.",
  'answer4': 'Worst trait? Really? You have no bad traits.'
},
{
  'question': 'Which of these would be your dream jobs?',
  'answer1': 'HP World: Auror...Real world: explorer or detective – something exciting!',
  'answer2': 'HP World: Hogwarts professor…Real world: university professor or doctor.',
  'answer3': "HP World: Herbology professor…Real world: a children's librarian or teacher.",
  'answer4': "HP World: someone high up in the Ministry…Real world: something high up in the government...Power is everything!"
},
{
  'question': 'If you could have any superpower, which would you have?',
  'answer1': 'Super strength or invincibility: all the better for adventuring!',
  'answer2': "The power of foresight: so you know what's coming.",
  'answer3': 'Invisibility.',
  'answer4': 'Mind control: then everyone will do exactly what you say!'
}
]
class App extends React.Component {
  constructor() {
    super();
    this.state={
      app_state:0,
      quiz_state:0,
      total: 0,
      chosenHouse:0
    }
  }
  changeAppState=()=>{
    this.setState(
      (prevState)=>{
        return {app_state:prevState.app_state+1};
      }
    );
  }
  answerItem=number=>{
    this.setState(
      (prevState)=>{
        return {quiz_state:prevState.quiz_state+1,total:prevState.total+number};
      },()=>{if (this.state.quiz_state===6) {this.setState({app_state:this.state.app_state+1});this.tallyResults()}}
    )
  }
  tallyResults=()=>{
    let chosenHouse=this.state.total/6;
    if (chosenHouse<=1.75) {
      chosenHouse=0;
    } else if (chosenHouse<=2.50) {
      chosenHouse=1;
    } else if (chosenHouse<=3.25) {
      chosenHouse=2;
    } else {
      chosenHouse=3;
    }
    this.setState({chosenHouse:chosenHouse},console.log(chosenHouse));
  }
  render() {
    return (
      <div className="App">
        <HomePage style={this.state.app_state} change_app_state={this.changeAppState}/>
        <Quiz answerQuizItem={this.answerItem} quizItems={quizArr} app_state={this.state.app_state} quiz_state={this.state.quiz_state}/>
        <Results style={this.state.app_state} result={this.state.chosenHouse} houseInfo={resultsArr}/>
      </div>
    );
  }
}

export default App;
