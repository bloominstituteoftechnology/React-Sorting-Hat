import React from 'react';
import './styles.css';

let questionBank = ['How likely are you to give a homeless person money?', 'How likely are you to tell your friend the hard truth?', 'How likely are you to put others before yourself?', 'How likely are you to follow the rules?', 'How likely are you to use magic for the greater good?', 'How likely are you to kill a villain?'];

const Question = (props) => {
    return (
        <form className="question">
            <div className={`questionContainer ${props.completed ? 'hidden' : ''}`}>
                <p>{questionBank[props.currentQuestion]}</p>
                <div onChange={props.currentAnswer} >
                    <input type="radio" id="answer1" name="answer" value="1" />
                        <label htmlFor="answer1">No way!</label>
                    <input type="radio" id="answer2" name="answer" value="2" />
                        <label htmlFor="answer2">Possible</label>
                    <input type="radio" id="answer3" name="answer" value="3" />
                        <label htmlFor="answer3">Likely</label>
                    <input type="radio" id="answer4" name="answer" value="4" />
                        <label htmlFor="answer4">Of course!</label>
                </div>
            </div>
            <div className="buttons">
                <button onClick={props.nextQuestion} type="submit" className={`${props.completed ? 'hidden' : ''}`}>Next</button>
                <button onClick={props.displayResult} type="button" className={`${!props.completed ? 'hidden' : ''} ${props.showResult ? 'hidden' : ''}`}>Results</button>
            </div>
        </form>
    )
}

export default Question;