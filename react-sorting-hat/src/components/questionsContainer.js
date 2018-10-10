import React, { Component } from "react";
import Questions from "./questions";

class QuestionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      point: ""
    };
    console.log(props, "questionscontainer");
  }
  questionIncrement = () => {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
  };
  questionDecrement = () => {
    this.setState({
      questionNumber: this.state.questionNumber - 1
    });
  };

  onRadio = e => {
    console.log(e.target.value, "event");
    // this.setState({
    //   point: e
    // });
  };
  render() {
    // console.log(this.props.questionsDataArray);
    return (
      <div>
        <Questions
          questionDecrement={this.questionDecrement}
          questionIncrement={this.questionIncrement}
          questionsDataArray={this.props.questionsDataArray}
          questionNumber={this.state.questionNumber}
          onRadio={this.onRadio}
        />
        {/* {this.props.questionsDataArray.map(questionsData => (
          <Questions
            questionsData={questionsData}
            questionIncrement={this.questionIncrement}
            questionDecrement={this.questionDecrement}
          />
        ))} */}
      </div>
    );
  }
}

export default QuestionsContainer;

// const QuestionsContainer = props => {
//   console.log(props.questionsDataArray);
//   return (
//     <div>
//       {props.questionsDataArray.map(questionsData => {
//         return <div>{questionsData.question}</div>;
//       })}
//     </div>
//   );
// };

// export default QuestionsContainer;
