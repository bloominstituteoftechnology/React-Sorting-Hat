import React from 'react';
import './components.css';

 const QuestionPage = (props) =>{
   return(
       
  <div className="container">
  <h2>{props.textForPage.questionText} </h2>
  <div className="buttonContainer">
    <div className="row1">
    <button onClick={props.methods} value='0'>{props.textForPage.answerText1}</button>
    <button onClick={props.methods} value='1'>{props.textForPage.answerText2}</button>
    </div>

    <div className="row2">
    <button onClick={props.methods} value='2'>{props.textForPage.answerText3}</button>
    <button onClick={props.methods} value='3'>{props.textForPage.answerText4}</button>
    </div>
  </div>
 </div>)
}


export default QuestionPage;