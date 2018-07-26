import React from "react";

let Question = props => {
	return (
		<div>
			<p>{props.questionObj.question}</p>
			<input
				onChange={() => props.onAnswerClick(props.questionObj.id, true)}
				checked={props.questionObj.answer}
				name={props.questionObj.id}
				type="radio"
			/>
			<label>Yes </label>

			<input
				onChange={() => props.onAnswerClick(props.questionObj.id, false)}
				checked={!props.questionObj.answer}
				name={props.questionObj.id}
				type="radio"
			/>
			<label>No</label>
		</div>
	);
};

export default Question;
