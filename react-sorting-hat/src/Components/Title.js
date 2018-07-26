import React from 'react';
import './styles.css';

const Title = (props) => {
    return(
    <div className="title">
        <h1> Welcome, {props.name} </h1>
        <h3 className={`${props.showResult ? 'hidden' : ''}`}> Which house will you belong to? </h3>
        <h3 className={`${!props.showResult ? 'hidden' : ''}`}> You belong to: </h3>
        <button onClick={props.startQuiz} className={`${props.started ? 'hidden' : ''}`}> Get Sorted! </button>
    </div>
    )
}

export default Title;