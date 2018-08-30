import React, { Component } from "react";
import ReactHowler from "react-howler";
import Question from "./components/Question";
import Welcome from "./components/Welcome";
import Result from "./components/Result";
import logo from "./logo.svg";
import sound from "./bgm.mp3";
import ambient from "./ambientwind.ogg";
import video from "./video.mp4";
import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			stage: 1,
			questionStage: 0,
			questionArray: [
				{
					question:
						"It is my ambition to say in ten sentences what others say in a whole book.",
					id: 0,
					answer: true,
					option1:
						"Exactly. True greatness transcends what came before.",
					option2: "No, the past has much to teach us."
				},
				{
					question:
						"The mind is not a vessel to be filled, but a fire to be kindled.",
					id: 1,
					answer: true,
					option1:
						"Yes.  Understand something and you become its master.",
					option2: "Wisdom is serenity. Don't fight it, surrender."
				},
				{
					question: "Genius is patience.",
					id: 2,
					answer: true,
					option1:
						"Only when I have read every last word will I set down the book of nature.",
					option2:
						"Knowledge comes from experience.  To learn you must act."
				},
				{
					question: "It's opener, out there, in the wide, open air.",
					id: 3,
					answer: true,
					option1:"What?"
						,
					option2: "And it's turtles all the way down!  And I love Turtles!"
				},
				{
					question: "Until death it is all life.",
					id: 4,
					answer: true,
					option1: "Death and life are inseprable.",
					option2: "I cherish every minute.",
				},
				{
					question:
						"We must find our duty in what comes to us, not in what we imagine might have been.",
					id: 5,
					answer: true,
					option1:
					"No matter what you must find a way to defend yourself.",
					option2:
					"No sacrifice is too costly to defend the innocent.",
				}
			],
			house: 0,
			houseData: [
				{
					name: "Gryffindor",
					details:
						"You have a lion's heart, but what is a lion without its pride? Since you have the strength to protect the helpless you have a duty to do so."
				},
				{
					name: "Hufflepuff",
					details:
						"Life is an adventure and you have the courage to undertake it.  A little chaos is always preferable to boredom."
				},
				{
					name: "Ravenclaw",
					details:
						"You are a seeker, movitvated by a yearning for an ever deeper understanding of everything around you.  Knowledge is power."
				},
				{
					name: "Slytherin",
					details:
						"You are audacious.  You understand that rules are guidlines to keep the weaker among us safe and you are not weak."
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
									className="Welcome__button"
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
				<div className="Question__video-wrapper">
					<video className="Question__video" autoPlay muted loop>
						<source src={video} type="video/mp4" />
						Your browser does not support video
					</video>
				</div>
				<ReactHowler src={sound} playing={true} loop={true} />
				<ReactHowler src={ambient} playing={true} loop={true} />
				{/* <audio autoPlay={true} loop={true}>
					<source src={sound} type="audio/mpeg" /> Your browser does
					not support the audio element.
				</audio> */}
				{this.handleStage()}
			</div>
		);
	}
}

export default App;
