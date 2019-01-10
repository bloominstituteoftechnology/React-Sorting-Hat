import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz.jsx';
import Results from './components/Results.jsx';
import greathall from './img/greathall.jpg';


function mode(array){
    if(array.length === 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

const answer_key = {
  0: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  1: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  2: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  3: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  4: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
  5: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
  },
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      curr_question: 0,
      quiz_responses: [],
      show_quiz: false,
      quiz_result: null,
      show_result: false,
    }
  }

  quizStart = () => {
    this.setState({'show_quiz' : true});
  }

  gotoNextandStoreResult = (e) => {
    console.log(e.target.id);
    this.setState({quiz_responses:[...this.state.quiz_responses, e.target.id]});
    this.setState({curr_question : this.state.curr_question + 1});
  }

  calculateResults = () => {
    let result = []
    console.log(this.state.quiz_responses[0])
    for (let i=0; i<this.state.quiz_responses.length; i++) {
      console.log(answer_key[i]);
      result.push(answer_key[i][this.state.quiz_responses[i]]);
    }
    this.setState({show_result: true});
    const house = {
      1: "Gryffindor",
      2: "Ravenclaw", 
      3: "Hufflepuff",
      4: "Slytherin",
    }
    this.setState({quiz_result: house[mode(result)]});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <header>
          <img className="banner" src={greathall}></img>
        </header>
        <div>
          <div className="blurb">
          <h1>Welcome to Hogwarts!</h1>
          <p>You find yourself standing amidst a great hall. The candles twinkle in the distance, and a thick silence
            lays over the atmosphere like a woolen blanket smothering the air.</p>
            </div>
          { this.state.show_quiz ? <div/> : 
          <button id="approach" onClick={this.quizStart}>Approach the Sorting Hat</button>
          }
          {
              this.state.show_quiz ?

              <Quiz question={this.state.curr_question} next={this.gotoNextandStoreResult} results={this.calculateResults}/>

              :

              <div></div>
            }
            {
              this.state.show_result ? <Results choices={this.state.quiz_result}/> : <div></div>

            }
        </div>
        </div>
      </div>
    );
  }
}

export default App;
