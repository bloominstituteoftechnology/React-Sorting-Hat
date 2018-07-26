import React, { Component } from 'react';
import './App.css';
import StartPage from './components/startpage';
import QuestionPage from './components/questionpage';
import AnswerPage from './components/answerpage';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'StartPage',
      answer0:0,
      answer1:0,
      answer2:0,
      answer3:0,

    };
    this.questions = { 
      question1 :{
        questionText : "You have 2 buckets o' slop, and you need to get down hill as fast as can. What do you do?",
        answerText1:"Ask why you have slop",
        answerText2:"Ask why only 2 buckets",
        answerText3:"Ask why you aren't already down the hill",
        answerText4:"Ask what's a hill"
      },
      question2 :{
        questionText : "Harry Potter's lawyers come after you for running a discount knock off school of witchcraft and wizardy. What should I... you, do?",
        answerText1:"Counter sue to show the aliens the old whatfor",
        answerText2:"Flee the country",
        answerText3:"Deny it all. Law doesn't excist if you don't believe in it",
        answerText4:"What's this about a hill again?"
      },
      question3 :{
        questionText : "What's your favorite type of magic?",
        answerText1:"Ham",
        answerText2:"Bacon",
        answerText3:"Pork",
        answerText4:"No seriously, you mentioned a hill but I don't see it"
      },
      question4 :{
        questionText : "How do you feel about your fellow students?",
        answerText1:"Dunces, the lot of them",
        answerText2:"Tops Blooby",
        answerText3:"You're cool, you're cool, I don't know you",
        answerText4:"Are they on top of this hill too?"
      },
      question5 :{
        questionText : "What house do you think you should be in?",
        answerText1:"Ravenclaw",
        answerText2:"Gryffindor",
        answerText3:"Slytherin",
        answerText4:"Did you name this school after your pig? And your name is Wart?"
      }
    }
  }
  changer = () =>{
    if(this.state.page === 'StartPage'){
      return <StartPage methods={this.cycle}/>
    }
    else if(this.state.page ==='Question1'){
      return <QuestionPage methods={this.choicePicker} textForPage={this.questions.question1} />
    }   
    else if(this.state.page ==='Question2'){
      return <QuestionPage methods={this.choicePicker} textForPage={this.questions.question2} />
    }
    else if(this.state.page ==='Question3'){
      return <QuestionPage methods={this.choicePicker} textForPage={this.questions.question3} />
    }  
    else if(this.state.page ==='Question4'){
      return <QuestionPage methods={this.choicePicker} textForPage={this.questions.question4} />
    }  
    else if(this.state.page ==='Question5'){
      return <QuestionPage methods={this.choicePicker} textForPage={this.questions.question5} />
    }    
    else if(this.state.page ==='AnswerPage'){
      return <AnswerPage  methods={[this.pickWinner,this.reset]}  />
    }  
    else{
      return <div> THE MAGIC'S BROKEN, TRY LATER </div>
    }
  }
  cycle= () =>{
    switch (this.state.page) {
      case "StartPage":
        this.setState({page : 'Question1' });
      break;
      case "Question1":
        this.setState({page : 'Question2' });
      break;
      case "Question2":
        this.setState({page : 'Question3' });
      break;
      case "Question3":
        this.setState({page : 'Question4' });
      break;
      case "Question4":
        this.setState({page : 'Question5' });
      break;
      case "Question5":
        this.setState({page : 'AnswerPage' });
      break;
      case "AnswerPage":
        this.setState({page : 'StartPage' });
      break;
      default:
        this.setState({page : 'StartPage' });
      break;
    }
  }
  choicePicker = (e) =>{
      let toMod = this.state['answer' + e.target.value]; 
      toMod ++;
      this.cycle();
      this.setState({['answer' + e.target.value]: toMod });
      
      
  }
  pickWinner = () =>{
    let bracket0, bracket1 ='';
    
    if(this.state.answer0 > this.state.answer1 ){
      bracket0 ='answer0';
    }
    else if(this.state.answer0 < this.state.answer1 ){
      bracket0 ='answer1';
    }
    else{

      bracket0 ='answer'+ Math.floor((Math.random() * 2));;
  
    }
    if(this.state.answer2 > this.state.answer3 ){
      bracket1 ='answer2';
    }
    else if(this.state.answer2 < this.state.answer3 ){
      bracket1 ='answer3';
    }
    else{
      bracket1 ='answer'+ Math.floor((Math.random() * 2) +2);;
    }
    if(this.state[bracket0] > this.state[bracket1] ){
      return(bracket0);
    }
    else if(this.state[bracket0] < this.state[bracket1]  ){
      return(bracket1);

    }
   
  }
  reset = () =>{
    this.setState({answer0:0, answer1: 0,answer2:0, answer3: 0});
    this.cycle();
  }
  render() {
    return (
      

     <div>
     {this.changer()}
     </div>

    );
  }
}

export default App;
