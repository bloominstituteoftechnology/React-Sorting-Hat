import React from 'react'

let Choice = props => {
    return (
        <label htmlFor={props.question.id}>
            <input type="radio" value={props.choice} name={props.question.id} onChange={props.changeHandler}/>
            {props.choice}
        </label>
    )
}

export default Choice;