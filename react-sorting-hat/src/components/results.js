import React from 'react';

const Results=props=>
<div className='result text-flow' style={props.style!==2?{display:'none'}:{}}>
    <h1>You are a {props.houseInfo[props.result].house}</h1>
    <p>{props.houseInfo[props.result].quote}</p>
    <p>{props.houseInfo[props.result].qualities}</p>
    <img src={props.houseInfo[props.result].image} alt='House crest'/>
</div>
export default Results;