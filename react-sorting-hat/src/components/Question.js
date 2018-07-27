import React from "react";
import "./Question.css";

let Question = props => {
	return (
		<div className="Question">
		<img
				className="Welcome__image"
				src="https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5.png"
				alt=""
			/>
			<p>{props.questionObj.question}</p>
			<input
				className="Question__button"
				onClick={() => props.onAnswerClick(props.questionObj.id, true)}
				name={props.questionObj.id}
				type="button"
				value="Yes"
			/>

			<input
				className="Question__button"
				onClick={() => props.onAnswerClick(props.questionObj.id, false)}
				name={props.questionObj.id}
				type="button"
				value="No"
			/>
		</div>
	);
};

export default Question;
