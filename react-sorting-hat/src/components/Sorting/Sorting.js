import React from 'react';
import './Sorting.css';
import arrow from '../../img/right-arrow.png';
import dict from '../../google-10000-english';
import Result from '../Result/Result';

class Sorting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      index: 0,
      entered: 0,
      sorting: true,
      gryffindor: 0,
      ravenclaw: 0,
      hufflepuff: 0,
      slytherin: 0,
      result: '',
    };
    this.dialogue = [
      <p>You hear a voice inside your head...</p>,
      <p>"Curious...very curious.  You've quite the mind...</p>,
      <p>Perhaps you wouldn't mind answering a few questions?</p>,
      <p>What is your earliest memory?</p>,
      <p>What is your greatest fear?  Why?</p>,
      <p>What is the greatest challenge you have overcome?</p>,
      <p>What does it mean to be "great"?</p>,
      <p>What do you yearn for?</p>,
      <p>What house do you belong in?</p>
    ];
  }
  nextPage = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index + 1,
      };
    });
  }
  handleEnter = () => {
    if(!this.state.input){
      alert('Please answer the question');
      return;
    }
    const searchDict = () => { // Searching dictionary of English words to try and help ensure valid answers.
      return dict.split('\n').some((x) => {
        return this.state.input.split(/\W/).map(x => x.toLowerCase()).indexOf(x) >= 0;
      });
    }
    if (!searchDict()){
      alert('Please respond in English');
      return;
    }
    this.setState((prevState) => {
      return {
        entered: prevState.entered + 1,
      }
    }, this.submit)
  }
  submit = () => {
    const proxyUrl = 'https://cors-escape.herokuapp.com/';
    const targetUrl = 'https://api.aylien.com/api/v1/sentiment';

    const sortingPromise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${proxyUrl}${targetUrl}?text=${this.state.input}`, true);
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-Key', '7f38f29ca46bcbf3036220c3553abba1');
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-ID', '67147080');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){
          xhr.status === 200 ? 
          resolve(JSON.parse(xhr.responseText)) : 
          reject('Failed! ' + xhr.status);
        }// else console.log('xhr processing');
      }
    });
    sortingPromise.then((message) => {
      this.handleTally(message);
      if (this.state.entered === 6){
        this.setState((prevState) => {
          return {
            input: '',
            index: prevState.index + 1,
          };
        });
      }
    }, (reason) => console.log(reason));

    if (this.state.entered < 6){
      this.setState((prevState) => {
        return {
          input: '',
          index: prevState.index + 1,
        };
      });
    }
  }
  handleChange = e => {
    this.setState({
      input: e.target.value,
    })
  }
  handleTally = (response) => { // Completely arbitrary way of determining house
    this.setState((prevState) => {
      if (response.polarity === 'positive'){
        return { gryffindor: prevState.gryffindor + 1 };
      }
      else if (response.polarity === 'negative'){
        return { slytherin: prevState.slytherin + 1 };
      } else {
        if (response.subjectivity === 'objective'){
          return { ravenclaw: prevState.ravenclaw + 1 };
        } 
        else if (response.subjectivity === 'subjective'){
          return { hufflepuff: prevState.hufflepuff + 1 };
        } else {
          const random = Math.floor(Math.random() * 4);
          if (!random){
            return { gryffindor: prevState.gryffindor + 1 };
          }
          else if (random === 1){
            return { ravenclaw: prevState.ravenclaw + 1 };
          }
          else if (random === 2){
            return { hufflepuff: prevState.hufflepuff + 1 };
          } else {
            return { slytherin: prevState.slytherin + 1 };
          }
        }
      }
      }, () => {
        this.wordList(response.text);
      });
    }

  wordList = (str) => {
    const houses = [
      {
        name: 'gryffindor',
        words: ['gryffindor', 'protect', 'brave', 'love', 'fight', 'courage'],
      },
      {
        name: 'ravenclaw',
        words: ['ravenclaw', 'study', 'smart', 'think', 'logic', 'book'],
      },
      {
        name: 'hufflepuff',
        words: ['hufflepuff', 'care', 'friends', 'work', 'loyalty', 'patience'],
      },
      {
        name: 'slytherin',
        words: ['slytherin', 'destiny', 'snake', 'pure', 'Voldemort', 'ambitious'],
      }
    ];
    houses.forEach((a, b) => {
      a.words.forEach((x, y) => {
        if (new RegExp(x, 'gi').test(str)){
          this.setState((prevState) => {
            return {
              [a.name]: prevState[a.name] + 1.5
            };
          });
        }
      });
    });
    if (this.state.entered === 6){
      this.handleTotal();
    }
  }
  handleTotal = () => {
    let count = -1;
    let result = '';
    let tie = [];
    for (let key in this.state){
      if (key !== 'index' && key !== 'entered'){
        if (this.state[key] > count){
          count = this.state[key];
          result = key;
        } 
        else if (this.state[key] === count){
          tie.includes(result) ? tie.push(key) : tie.push([result, key]);
        }
      }
    }
    if (tie.length){
      result = tie[Math.floor(Math.random() * tie.length)];
    }
    this.setState({
      result: result,
    }, () => this.setState( { sorting: false } ));
  }
  render(){
    if (this.state.sorting){
     return (
       <div>
         <div className="questions">
          {this.dialogue[this.state.index]}
         </div>
         <div className="entry">
          <textarea type="text" 
            style={this.state.index < 3 || this.state.index > 8 ? {visibility: 'hidden'} : {}} 
            placeholder="Write answer here" 
            value={this.state.input} 
            onChange={this.handleChange}
            maxLength={700}></textarea>
            <div>
              {this.state.index >= 3 ? 
              <button 
              style={this.state.index > 8 ? {visibility: 'hidden'} : {}} 
              onClick={this.handleEnter}>
                Submit
              </button> :
              <img src={arrow} 
              onClick={this.nextPage} 
              alt="next-arrow" />
            }
            </div>
         </div>
       </div>
     );
    } else {
      return <Result house={this.state.result} />
    }
  }
}

export default Sorting;