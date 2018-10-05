import React from 'react';

let Landing = props => {
    return (
        <div className="landing">
            <h1>Congratulations on your matriculation to Hogwarts!</h1>
            <p>Like many witches and wizards before you, you will be sorted into one of our four Houses.</p>
            <button onClick={props.hideLanding}>Sort Me!</button>
        </div>
    )
}

export default Landing;