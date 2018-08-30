import React from "react";
import "./Welcome.css";

let Welcome = props => {
	console.log(props);
	return (
		<div className="Welcome">
			<h1 className="Welcome__title">Welcome To Hogwarts</h1>
			<img
				className="Welcome__image"
				src="https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5.png"
				alt=""
			/>
			<button className="Welcome__button" onClick={props.onWelcomeClick}>
				Put on the sorting hat to find your house!
			</button>
		</div>
	);
};

export default Welcome;
