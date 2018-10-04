import React from 'react';
import Answer from './Answer';


class Question extends React.Component {
  constructor (props) {
    super(props);
      this.state = {
        selectedAnswer: '',
      };
  }


  handleAnswerChange = answer => {
    this.setState({
      selectedAnswer: answer,
    });
    this.props.handleQuestion();
  };

  handleAnswer = event => {
    event.preventDefault();
    this.props.handleAnswer(this.state.selectedAnswer);
    console.log(this.state.selectedAnswer); 
    this.setState({selectedAnswer: ''})
  };

  render() {
    return (
      <div className='container'>
        <h1>{this.props.currentQuestion.question}</h1>
        <div className='container answers'>
  {Object.entries(this.props.currentQuestion.answers).map(
              ([house, answer]) => (
                <Answer
                  value={house}
                  handleAnswerChange ={this.handleAnswerChange}
                  text={answer}
                />
              )
            )}
        </div>
        {this.state.selectedAnswer &&
        <button
        onClick={this.handleAnswer}
        type='submit'>{this.props.lastQuestion ? 'Get Sorted' : 'Next Question'}</button>}
      </div>
    )
  }
}

export default Question;
