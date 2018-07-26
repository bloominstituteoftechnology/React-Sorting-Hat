import React from 'react';
import './styles.css';

let houses = [
    {name: 'Gryf'},
    {name: 'Slyth'},
    {name: 'Huff'},
    {name: 'Raven'}
]

const Results = (props) => {
    let result = props.result;
    let house = 0;
    if (result < 10){
        house = 0;
    } else if (result < 15){
        house = 1;
    } else if (result < 20){
        house = 2;
    } else if (result <= 24){
        house = 3;
    }
    return(
        <div className={`results ${props.canShow ? 'visible' : ''}`}>
            <p>{houses[house].name}</p>
        </div>
    )
}

export default Results;