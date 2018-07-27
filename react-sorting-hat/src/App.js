import React, { Component } from "react";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import logo from "./logo.svg";
import sound from "./bgm.mp3";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			stage: 1,
			questionStage: 1,

			questionArray: [
				{
					question: "Are you self-reliant?",
					id: 0,
					answer: true
				},
				{
					question: "Do you keep secrets?",
					id: 1,
					answer: true
				},
				{
					question: "Do you think outside the box?",
					id: 2,
					answer: true
				},
				{
					question: "Are you inquisitive?",
					id: 3,
					answer: true
				},
				{
					question: "Do you demand justice for the innocent?",
					id: 4,
					answer: true
				},
				{
					question: "Would you sacrifice your life for the weak?",
					id: 5,
					answer: true
				}
			],

			house: 0,

			houseData: [
				{
					name: "Gryffindor",
					details: "Lorem Ipsum"
				},
				{
					name: "Hufflepuff",
					details: "Something else"
				},
				{
					name: "Ravenclaw",
					details: "Yet another thing"
				},
				{
					name: "Slytherin",
					details: "And one last thing"
				}
			]
		};
	}

	handleWelcome = () => {
		this.setState({ stage: 2 });
		console.log("hello");
	};

	handleReset = () => {
		this.setState({ stage: 1, questionStage: 0 });
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
				this.setState({ house: 0, stage: 3 });
				break;
			case answerEval <= 31:
				this.setState({ house: 1, stage: 3 });
				break;
			case answerEval <= 47:
				this.setState({ house: 2, stage: 3 });
				break;
			default:
				this.setState({ house: 3, stage: 3 });
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

		this.setState(prevState => ({
			questionArray: idArray,
			questionStage: prevState.questionStage + 1
		}));
	};

	handleStage = () => {
		switch (this.state.stage) {
			case 1:
				return <Welcome onWelcomeClick={this.handleWelcome} />;
			case 2:
				return (
					<form>
						{this.state.questionStage === 6 ? (
							<div className="form__container">
								<img
									className="Welcome__image"
									src="https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5.png"
									alt=""
								/>
								<button
									className="Welcome__button form__button"
									onClick={this.handleSubmit}
								>
									What is your house?
								</button>
							</div>
						) : (
							<Question
								onAnswerClick={this.handleAnswers}
								questionObj={
									this.state.questionArray[
										this.state.questionStage
									]
								}
							/>
						)}
					</form>
				);
			case 3:
				return (
					<Result
						reset={this.handleReset}
						house={this.state.houseData[this.state.house]}
					/>
				);
		}
	};
	render() {
		return (
			<div className="AppWrapper">
				<audio autoPlay={true} loop={true}>
					<source src={sound} type="audio/mpeg" /> Your browser does
					not support the audio element.
				</audio>
				{this.handleStage()}
			</div>
		);
	}
}

export default App;
