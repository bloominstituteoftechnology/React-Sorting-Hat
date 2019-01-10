import React from 'react';
import gryffindor from '../img/gryffindor.png';
import ravenclaw from '../img/ravenclaw.png';
import slytherin from '../img/slytherin.png';
import hufflepuff from '../img/hufflepuff.png';

const Results = (props) => {
    return (
        <div className="results">{props.choices}
            {checker(props.choices)}
        </div>
    )
}

const checker = (string) => {
    if (string === "Gryffindor") {
        return <img src={gryffindor} />
    } else if (string === "Ravenclaw") {
        return <img src={ravenclaw} />
    } else if (string === "Hufflepuff") {
        return <img src={hufflepuff} />
    } else if (string === "Slytherin") {
        return <img src={slytherin} />
    }
}
export default Results;