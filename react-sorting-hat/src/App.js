import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Questions from './Components/Questions';
import Results from './Components/Results';

class App extends Component {
	constructor() {
		super();
		this.state = { name: 'Wizard', started: false, completed: false, currentQuestion: 0, currentAnswer: 1, result: 0, showResult: false };
		// add , result: 0
	}

	startQuiz = () => {
		this.setState((prevState) => {
			return {started: !prevState.started};
		});
	}

	currentAnswer = (event) => {
		this.setState({currentAnswer: event.target.value})
	}

	nextQuestion = (event) => {
		event.preventDefault();
		if (this.state.currentQuestion < 5){
			this.setState((prevState) => {
				return {currentQuestion: prevState.currentQuestion + 1, result: Number(prevState.result) + Number(prevState.currentAnswer) };
			});
		} else if (this.state.currentQuestion === 5) {
			this.setState((prevState) => {
				return {completed: true, result: Number(prevState.result) + Number(prevState.currentAnswer), currentQuestion: 100};
			})
		}
	}

	displayResult = () => {
		if (this.state.completed){
			this.setState({showResult: true});
		} else {
			alert('You must finish the 6 questions.');
		}
	}

	render() {
		return (
			<div className="container">
				<Title name={this.state.name} startQuiz={this.startQuiz} started={this.state.started} showResult={this.state.showResult} />
				<Questions started={this.state.started} currentQuestion={this.state.currentQuestion} nextQuestion={this.nextQuestion} currentAnswer={this.currentAnswer} displayResult={this.displayResult} completed={this.state.completed} showResult={this.state.showResult} />
				<Results canShow={this.state.showResult} result={this.state.result} />
			</div>
		);
	}
}

export default App;
