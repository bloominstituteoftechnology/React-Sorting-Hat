import React from 'react';
import './styles.css';

let questionBank = ['Question 1', 'Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6'];

const Question = (props) => {
    return (
        <form>
            <p>{questionBank[props.currentQuestion]}</p>
            <div onChange={props.currentAnswer} >
                <input type="radio" id="answer1" name="answer" value="1" />
                    <label htmlFor="answer1">1</label>
                <input type="radio" id="answer2" name="answer" value="2" />
                    <label htmlFor="answer2">2</label>
                <input type="radio" id="answer3" name="answer" value="3" />
                    <label htmlFor="answer3">3</label>
                <input type="radio" id="answer4" name="answer" value="4" />
                    <label htmlFor="answer4">4</label>
            </div>
            <div>
                <button onClick={props.nextQuestion} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Question;