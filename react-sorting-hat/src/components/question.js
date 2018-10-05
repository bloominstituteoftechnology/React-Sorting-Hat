import React from 'react';
import Choice from './choice'

let Question = props => {
    return (
        <div className="question">
            <h2>{props.question.copy}</h2>
            <fieldset id={props.question.id}>
                {props.question.choices.map((choice, i) => <Choice key={i+1} question={props.question} choice={choice} changeHandler={props.changeHandler}/>)}
            </fieldset>
        </div>
    )
}

export default Question;