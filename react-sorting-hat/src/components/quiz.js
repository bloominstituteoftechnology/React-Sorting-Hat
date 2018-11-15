import React from 'react'; 
import QuizTemplate from './quiztemplate.js';
const Quiz=props=>props.quizItems.map(
    (question,index)=><QuizTemplate answerItem={props.answerQuizItem} item={question} key={index} app_state={props.app_state} quiz_state={props.quiz_state} number={index}/>)

export default Quiz;