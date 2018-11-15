import React from 'react';

const Results=props=>
<div className='result text-flow' style={props.style!==2?{display:'none'}:{}}>
    <h1>You are a {props.houseInfo[props.result].house}</h1>
    <p>{props.houseInfo[props.result].quote}</p>
    <p>{props.houseInfo[props.result].qualities}</p>
    <img src={props.houseInfo[props.result].image} alt='House crest'/>
    <p>Famous {props.houseInfo[props.result].house} wizards:</p>
    <ul>
        <li>{props.houseInfo[props.result].wizards[0]}</li>
        <li>{props.houseInfo[props.result].wizards[1]}</li>
        <li>{props.houseInfo[props.result].wizards[2]}</li>
    </ul>
</div>
export default Results;