import React from 'react';
import './styles.css';
import Question from './Question';

const Questions = (props) => {
    return (
        <div className={`questionsContainer ${props.started ? 'visible' : '' }`}>
            <Question currentQuestion={props.currentQuestion} nextQuestion={props.nextQuestion} currentAnswer={props.currentAnswer} displayResult={props.displayResult} completed={props.completed} />
        </div>
    )
}

export default Questions;