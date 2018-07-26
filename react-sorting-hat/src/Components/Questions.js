import React from 'react';
import './styles.css';
import Question from './Question';

const Questions = (props) => {
    return (
        <div className="questionsContainer">
            <Question currentQuestion={props.currentQuestion} nextQuestion={props.nextQuestion} currentAnswer={props.currentAnswer} displayResult={props.displayResult} />
        </div>
    )
}

export default Questions;