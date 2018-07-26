import React from "react";

let Result = props => {
    console.log(props);
	return (
		<div>
			<h1>{props.house}</h1>
			<p>lorem ipsum</p>
            <button onClick={ props.reset }>Reset!</button>
		</div>
	);
};

export default Result;
