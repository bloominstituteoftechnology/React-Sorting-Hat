import React, { Component } from 'react';
import './App.css';
import HomePage from './components/homepage.js';
import Quiz from './components/quiz.js';
import Results from './components/results.js';



const resultsArr=[
  {
    'house': 'Gryffindor',
    'image':'https://images.pottermore.com/bxd3o8b291gf/49zkCzoZlekCmSq6OsycAm/da6278c1af372f18f8b6a71b226e0814/PM_House_Pages_400_x_400_px_FINAL_CREST2.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': '"Where dwell the brave at heart, their daring, nerve and chivalry set Gryffindors apart."',
    'qualities': 'Gryffindors are well known for courage, bravery, daring, nerve, and chivalry.',
  },
  {
    'house': 'Ravenclaw',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/5pnnQ5puTuywEEW06w2gSg/91abff3d923b4785ed79e9abda07bd07/PM_House_Pages_400_x_400_px_FINAL_CREST.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': '"Where those of wit and learning, will always find their kind."',
    'qualities': 'Ravenclaws value intelligence, wit, cleverness, creativity, and wisdom.',
  },
  {
    'house': 'Hufflepuff',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/2GyJvxXe40kkkG0suuqUkw/e1a64ec404cf5f19afe9053b9d375230/PM_House_Pages_400_x_400_px_FINAL_CREST3.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': '"You might belong in Hufflepuff, where they are just and loyal. Those patient Hufflepuffs are true and unafraid of toil."',
    'qualities':'Hufflepuffs are well known for loyalty, patience, hard work, fair-play, honesty, and tolerance.',
  },
  {
    'house':'Slytherin',
    'image': 'https://images.pottermore.com/bxd3o8b291gf/4U98maPA5aEUWcO8uOisOq/e01e17cc414b960380acbf8ace1dc1d5/PM_House_Pages_400_x_400_px_FINAL_CREST4.png?w=550&h=550&fit=thumb&f=center&q=85',
    'quote': '"Perhaps in Slytherin, You\'ll make your real friends.Those cunning folk use any means to achieve their ends."',
    'qualities': 'Slytherins value ambition, leadership, cunning, determination, and resourcefulness.',
  }
]
const quizArr=[
{
  'question': 'Which of these traits best describes you?',
  'answer1': 'Chivalrous',
  'answer2':'Witty',
  'answer3':'Honest',
  'answer4': 'Ambitious'
},
{
  'question': "Your classmate's life is in danger. What will you do to help them?",
  'answer1': 'To the rescue I go! There is no time for thought!',
  'answer2': 'Let us not be brash. We shall think it through and formulate a plan.',
  'answer3': "I must tell a professor straight away! They will know what to do.",
  'answer4': 'Wait. What\'s in it for me?'
},
{
  'question': 'It\'s report card time. What areas can you improve in?',
  'answer1': 'I could be less reckless and think before I act.',
  'answer2': 'I should probably admit that I don\'t actually know it all.',
  'answer3': 'I could learn to say no once in awhile.',
  'answer4': 'Improve? Surely you jest. I\'m perfect as I am.'
},
{
  'question': 'Choose the animal with which you most closely identify.',
  'answer1': "A lion.",
  'answer2': "A badger.",
  'answer3': "An eagle.",
  'answer4': 'A serpent.'
},
{
  'question': 'Which job is most appealing to you?',
  'answer1': 'Something courageous like firefighting.',
  'answer2': 'A doctor or perhaps a professor.',
  'answer3': 'I like people. Wherever I can be of service, that\'s where I want to be!',
  'answer4': 'A position of leadership and power, obviously.'
},
{
  'question': 'Choose your power.',
  'answer1': 'Invincibility!',
  'answer2': 'Clarivoyance',
  'answer3': 'Invisibility.',
  'answer4': 'Power over all things.'
}
]
class App extends Component {
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
    this.setState({chosenHouse:chosenHouse});
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
