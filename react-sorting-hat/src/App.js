import React, { Component } from "react";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			stage: 1,

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

			house: ""
		};
	}

	handleWelcome = () => {
		this.setState({ stage: 2 });
		console.log("hello");
	};

	handleReset = () => {
		this.setState({ stage: 1 });
		console.log("hello");
	};

	handleSubmit = event => {
		event.preventDefault();
		let answerEval = parseInt(
			this.state.questionArray.map(e => (e.answer ? "1" : "0")).join(""),
			2
		);
		console.log(answerEval);

		switch (true) {
			case answerEval <= 15:
				this.setState({ house: "Griffindor", stage: 3 });
				break;
			case answerEval <= 31:
				this.setState({ house: "Slytherin", stage: 3 });
				break;
			case answerEval <= 47:
				this.setState({ house: "Hufflepuff", stage: 3 });
				break;
			default:
				this.setState({ house: "Ravenclaw", stage: 3 });
		}
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

	handleStage = () => {
		switch (this.state.stage) {
			case 1:
				return <Welcome onWelcomeClick={this.handleWelcome} />;
			case 2:
				return (
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
				);
			case 3:
				return (
					<Result reset={this.handleReset} house={this.state.house} />
				);
		}
	};
	render() {
		return <div className="AppWrapper">{this.handleStage()}</div>;
	}
}

export default App;
