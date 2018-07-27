import React, { Component } from "react";
import TweenMax from "gsap/TweenMax";
import "./Question.css";

class Question extends Component {
	constructor(props) {
		super(props);

		this.DOMElement = React.createRef();
	}

	componentDidUpdate() {
		TweenMax.fromTo(this.DOMElement, 1, { opacity: 0 }, { opacity: 1 });
	}

	render() {
		return (
			<div className="Question">
				<div ref={node => (this.DOMElement = node)}>
					<img
						className="Welcome__image img-small"
						src="https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5.png"
						alt=""
					/>
					<p>{this.props.questionObj.question}</p>
					<input
						className="Question__button"
						onClick={() =>
							this.props.onAnswerClick(
								this.props.questionObj.id,
								true
							)
						}
						name={this.props.questionObj.id}
						type="button"
						value={this.props.questionObj.option1}
					/>

					<input
						className="Question__button"
						onClick={() =>
							this.props.onAnswerClick(
								this.props.questionObj.id,
								false
							)
						}
						name={this.props.questionObj.id}
						type="button"
						value={this.props.questionObj.option2}
					/>
				</div>
			</div>
		);
	}
}

export default Question;
