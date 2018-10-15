import React, { Component } from "react";

import "./landing.css";

import QuestionsContainer from "./questionsContainer";
import questionData from "../questionData";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsDataArray: questionData,
      sort: false
    };
  }

  startSort = () => {
    this.setState({
      sort: true
    });
    // window.location.reload();
  };

  reset = () => {
    window.location.reload();
  };

  render() {
    if (this.state.sort === true) {
      return (
        <div className="questionsContainer">
          <QuestionsContainer
            questionsDataArray={this.state.questionsDataArray}
          />

          <div className="reset">
            <button className="resetButton" onClick={this.reset}>
              Rest the sorting process
            </button>
          </div>
        </div>
      );
    } else
      return (
        <div className="intro">
          <h1 className="introduction">
            Welcome first years, to Hogwarts school of witchcraft and wizardry.
            <br />
            Please click on the button below to get sorted in to houses.
          </h1>
          <button className="sort" onClick={this.startSort}>
            Start the sorting process
          </button>
          <br />
          <img
            alt="emb"
            className="emblem"
            src="https://media.proprofs.com/images/QM/user_images/1804324/qm1429456415.png"
          />
        </div>
      );
  }
}

export default Landing;
