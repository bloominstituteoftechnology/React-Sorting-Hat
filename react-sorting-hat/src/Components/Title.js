import React from 'react';
import './styles.css';

const Title = (props) => {
    return(
    <div className="title">
        <h1> Welcome, {props.name} </h1>
        <h3> Which house will you belong to? </h3>
        <button onClick={props.startQuiz}> Sort </button>
    </div>
    )
}

export default Title;