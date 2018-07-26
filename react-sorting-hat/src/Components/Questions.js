import React from 'react';
import './styles.css';
import Question from './Question';

const Questions = (props) => {
    return (
        <div className={`questionsContainer ${props.started ? 'visible' : ''} ${props.showResult ? 'hidden' : '' }`}>
            <Question currentQuestion={props.currentQuestion} nextQuestion={props.nextQuestion} currentAnswer={props.currentAnswer} displayResult={props.displayResult} completed={props.completed} showResult={props.showResult} />
        </div>
    )
}

export default Questions;