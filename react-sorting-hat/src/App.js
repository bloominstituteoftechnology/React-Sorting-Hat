import React, { Component } from "react";
import Question from "./components/Question";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			questionArray: [
				{
					question: "question 1",
					id: 0,
					answer: true
				},
				{
					question: "question 1",
					id: 1,
					answer: true
				},
				{
					question: "question 1",
					id: 2,
					answer: true
				},
				{
					question: "question 1",
					id: 3,
					answer: true
				},
				{
					question: "question 1",
					id: 4,
					answer: true
				},
				{
					question: "question 1",
					id: 5,
					answer: true
				}
			],
			houseArray: [
				{
					house: "Griffindor",
					val: 15
				},
				{
					house: "Slytherin",
					val: 31
				},
				{
					house: "Hufflepuff",
					val: 47
				},
				{
					house: "Ravenclaw",
					val: 63
				}
			],
			evaluation: null
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		let answerEval = parseInt(
			this.state.questionArray.map(e => (e.answer ? "1" : "0")).join(""),
			2
		);
		console.log(answerEval);

		this.setState({ evaluation: answerEval });
	};

	handleAnswers = (ident, bool) => {
		const idArray = this.state.questionArray.slice().map(e => {
			if (ident === e.id) {
				let newObject = {
					...e
				};
				newObject.answer = bool;
				return newObject;
			}
			return e;
		});

		this.setState({ questionArray: idArray });
	};

	render() {
		return (
			<div className="AppWrapper">
				<form>
					{this.state.questionArray.map(e => {
						return (
							<Question
								key={e.id}
								onAnswerClick={this.handleAnswers}
								questionObj={e}
							/>
						);
					})}
					<button onClick={this.handleSubmit}>
						Submit Your Answers
					</button>
				</form>
			</div>
		);
	}
}

export default App;
