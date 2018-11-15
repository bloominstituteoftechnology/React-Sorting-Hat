import React from 'react';

const Outcome=props=>
<div className='outcome text-flow' style={props.style!==2?{display:'none'}:{}}>
    <h1>You belong in {props.houseInfo[props.outcome].house}</h1>
    <p>{props.houseInfo[props.outcome].quote}</p>
    <p>{props.houseInfo[props.outcome].qualities}</p>
    <img src={props.houseInfo[props.outcome].image} alt='House crest'/>
    <p>Famous {props.houseInfo[props.outcome].house} wizards:</p>
    <ul>
        <li>{props.houseInfo[props.outcome].wizards[0]}</li>
        <li>{props.houseInfo[props.outcome].wizards[1]}</li>
        <li>{props.houseInfo[props.outcome].wizards[2]}</li>
    </ul>
</div>
export default Outcome;