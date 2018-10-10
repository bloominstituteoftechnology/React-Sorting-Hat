import React, { Component } from "react";
import QuestionsContainer from "./questionsContainer";
import questionData from "../questionData";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDataArray: questionData,
      points: []
    };
  }
  render() {
    return (
      <div>
        <h1>
          Welcome first years, to Hogwarts school of witchcraft and wizardry.
          <br />
          Please click on the button below to get sorted in to houses.
        </h1>
        <button>Start the sorting process</button>
        <QuestionsContainer
          questionsDataArray={this.state.questionsDataArray}
        />
      </div>
    );
  }
}

export default Landing;
