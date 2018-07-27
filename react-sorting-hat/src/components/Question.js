import React from "react";
import Option from "./Option";

export default class Question extends React.Component {
  state = {
    selectedOption: "",
  };

  handleOptionChange = option => {
    this.setState({
      selectedOption: option,
    });
    this.props.handleQuestionCheck();
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.selectedOption);
    this.setState({ selectedOption : ''})
  };

  render() {
    console.log(this.props.isLastQuestion)

    return (
      <div className="wrapper">
        <h1>{this.props.currentQuestion.question}</h1>
        <form className="wrapper">
          <div className="options">
            {Object.entries(this.props.currentQuestion.answers).map(
              ([house, answer]) => (
                <Option
                  value={house}
                  handleOptionChange ={this.handleOptionChange}
                  text={answer}
                />
              )
            )}
          </div>
          {this.state.selectedOption && 
            <button 
            onClick={this.handleSubmit} 
            type="submit"
            >{this.props.isLastQuestion ? 'See Results!' : 'Next Question'}</button>}
        </form>
      </div>
    );
  }
}
