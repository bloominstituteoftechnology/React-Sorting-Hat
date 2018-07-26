import React from 'react';

let Welcome = props => {
    console.log(props);
    return(
        <div>
            <h1>Welcome To Hogwarts</h1>
            <button onClick={ props.onWelcomeClick }>Reach into The Sorting Hat</button>
        </div>
    );
};

export default Welcome
