import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionStepper from "../components/QuestionStepper";
import House from '../components/House'

export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      house: "",
      sorting: true,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  sort = () => {
    console.log("test");
    console.log(this.state.answers);
    let arr = this.state.answers;
    let count = {};
    let frequency = 0;
    let mostFrequent;
    let nextFrequent;
    let tempArr = [];
    let chosenHouse;
    let lastWord;
    let finalArr = [];
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i]; // set the word to current in array
      console.log(word);
      console.log(mostFrequent);
      for (let j = -1; j < arr.length; j++) {
        let lastWord = arr[j];
        // if the count.{currentWord} is undefined
        if (count[word] === undefined) {
          count[word] = 1; // let count.{currentWord} : 1
          // if the count.{currentWord} exists
        } else {
          count[word] = count[word] + 1; //  let count.{currentWord} = count.{currentWord} + 1
        }
        // if count.{currentWord} > frequency
        if (count[word] > frequency) {
          // set frequency = count.{currentWord}
          frequency = count[word];
          // set mostFrequent word to the currentWord
          mostFrequent = arr[i];
          // console.log("most: ", mostFrequent, "last: ", lastWord);

          // then if the freqArr does not include mostFrequent word
          if (!tempArr.includes(mostFrequent)) {
            // add the mostFrequent word to the array
            tempArr.push(mostFrequent);
            // console.log("top !temp:", tempArr);
          }

          // if the last word is less frequent than the most frequent word
          if (lastWord && count[lastWord] < count[mostFrequent]) {
            console.log("before temp:", tempArr);
            console.log("before final:", finalArr);
            // filter the last word out of the array for final array
            finalArr = tempArr.filter((word) => {
              return word !== lastWord;
            });
            console.log("after temp:", tempArr);
            console.log("after final:", finalArr);
            tempArr = [];
          }
        }
      }
      // if the current word is tied with most frequent
      if (count[word] === count[mostFrequent] && !finalArr.includes(word)) {
        console.log("Test fA:", finalArr);
        console.log("test w, f: ", word, mostFrequent);
        finalArr.push(word);
      }
    }
    // if the most frequent answer is a tie randomize the house
    chosenHouse = finalArr[Math.floor(Math.random() * finalArr.length)];
    
    this.setState({
      ...this.state,
      house: chosenHouse,
      sorting: !this.state.sorting,
    });
  };

  handleAnswers = (userAnswers) => {
    // setting state working sort not working from in this function yet
    this.setState({
      ...this.state,
      answers: userAnswers,
    });
  };

  componentDidUpdate(prevState) {
    if (this.state.house === "") {
      this.sort();
    }
  }

  render() {
    return (
      <>
        {this.state.sorting && (
          <>
            <Route
              path="/sort"
              render={(props) => (
                <QuestionStepper
                  {...props}
                  sort={this.sort}
                  handleAnswers={this.handleAnswers}
                  forlogs={this.state.answers}
                  isSorting={this.state.isSorting}
                />
              )}
            />
          </>
        )}

        {!this.state.sorting && (
          <>
            {" "}
            <House house={this.state.house}/>
          </>
        )}
      </>
    );
  }
}
