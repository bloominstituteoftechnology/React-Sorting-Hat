import React from "react";
import gri from "../Gryffindor_Crest.png";
import huf from "../Hufflepuff_Crest.png";
import rav from "../Ravenclaw_Crest.png";
import sly from "../Slytherin_Crest.png";
import "./Result.css";

let Result = props => {
	let source;
	switch (props.house.name) {
		case "Gryffindor":
			source = gri;
			break;
		case "Hufflepuff":
			source = huf;
			break;
		case "Ravenclaw":
			source = rav;
			break;
		case "Slytherin":
			source = sly;
			break;
		default:
			source = null;
	}
	console.log(props);
	return (
		<div className="Result">
			<h1 className="Result__title">{props.house.name}</h1>
			<img className="Result__img" src={source} alt="" />
			<p className="Result__text">{props.house.details}</p>
			<button className="Result__button" onClick={props.reset}>
				Who's Next?
			</button>
		</div>
	);
};

export default Result;
