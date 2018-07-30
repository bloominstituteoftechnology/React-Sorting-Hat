import React from 'react';

const Results=props=>
<div className='result text-flow' style={props.style!==2?{display:'none'}:{}}>
    <h1>Result:</h1>
    <h2>{props.houseInfo[props.result].house}</h2>
    <p>{props.houseInfo[props.result].quote}</p>
    <img src={props.houseInfo[props.result].image} alt='House crest'/>
    <p className>Famous {props.houseInfo[props.result].house} wizards:
    <ul>
        <li>{props.houseInfo[props.result].wizards[0]}</li>
        <li>{props.houseInfo[props.result].wizards[1]}</li>
        <li>{props.houseInfo[props.result].wizards[2]}</li>
    </ul>
    </p>
</div>
export default Results;