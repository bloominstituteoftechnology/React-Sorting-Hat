import React from 'react';
import './Sorting.css';
import arrow from '../../img/right-arrow.png';
import dict from '../../google-10000-english';

class Sorting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      index: 0,
      gryffindor: 0,
      ravenclaw: 0,
      hufflepuff: 0,
      slytherin: 0,
      sorting: true,
      result: '',
    };
    this.dialogue = [
      <p>You hear a voice inside your head...</p>,
      <p>"Curious...very curious.  You've quite the mind...</p>,
      <p>Perhaps you wouldn't mind answering a few questions?</p>,
      <p>What is your earliest memory?</p>,
      <p>What is your greatest fear?  Why?</p>,
      <p>What is your biggest regret?</p>,
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
    })
  }
  submit = () => {
    if(!this.state.input){
      alert('Please answer the question');
      return;
    }
    const searchDict = () => { 
      return dict.split('\n').some((x) => {
        return this.state.input.split(' ').map(x => x.toLowerCase()).indexOf(x) >= 0;
      });
    }
    if (!searchDict()){
      alert('Please respond in English');
      return;
    }
      const proxyUrl = 'https://cors-escape.herokuapp.com/';
      const targetUrl = 'https://api.aylien.com/api/v1/sentiment';
      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${proxyUrl}${targetUrl}?text=${this.state.input}`, true);
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-Key', '7f38f29ca46bcbf3036220c3553abba1');
      xhr.setRequestHeader('X-AYLIEN-TextAPI-Application-ID', '67147080');
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4){ // If readyState == DONE
          if (xhr.status === 200){ // If successful
            // console.log('SUCCESS!');
            const response = JSON.parse(xhr.responseText);
            this.handleTally(response);
          } else { // If failed
            console.log('HTTP REQUEST FAILED', xhr.status);
          }
        } else { // If state changed but is not yet done
          // console.log('xhr processing');
        }
      }
      // console.log('request sent successfully'); // Informs you request was sent
      this.setState((prevState) => {
        return {
          input: '',
          index: prevState.index + 1,
        };
      });
  }
  handleChange = e => {
    this.setState({
      input: e.target.value,
    })
  }
  handleTally = (response) => { // Completely arbitrary way of determining house
    this.wordList(response.text);
    if (response.polarity === 'positive'){
      this.setState((prevState) => ({ gryffindor: prevState.gryffindor + 1 }));
    }
    else if (response.polarity === 'negative'){
      this.setState((prevState) => ({ slytherin: prevState.slytherin + 1 }));
    } else {
      if (response.subjectivity === 'objective'){
        this.setState((prevState) => ({ ravenclaw: prevState.ravenclaw + 1 }));
      } 
      else if (response.subjectivity === 'subjective'){
        this.setState((prevState) => ({ hufflepuff: prevState.hufflepuff + 1 }));
      } else {
        const random = Math.floor(Math.random() * 4);
        if (!random){
          this.setState((prevState) => ({ gryffindor: prevState.gryffindor + 1 }));
        }
        else if (random === 1){
          this.setState((prevState) => ({ ravenclaw: prevState.ravenclaw + 1 }));
        }
        else if (random === 2){
          this.setState((prevState) => ({ hufflepuff: prevState.hufflepuff + 1 }));
        } else {
          this.setState((prevState) => ({ slytherin: prevState.slytherin + 1 }));
        }
      }
    }
  }
  wordList = (str) => {
    const houses = [
      {
        name: 'gryffindor',
        words: ['gryffindor', 'protect', 'brave', 'love', 'fight', 'sacrifice'],
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
    houses.forEach(x => {
      x.words.forEach(y => {
        if (new RegExp(y, 'gi').test(str)){
          this.setState((prevState) => {
            return {
              [x.name]: prevState[x.name] + 1.5
            };
          }, () => {
            if (this.state.index > 8) this.handleTotal()
          });
        }
      })
    })
  }
  handleTotal = () => {
    let count = -1;
    let result = '';
    const tie = [];
    for (let key in this.state){
      if (key !== 'index'){
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
      sorting: false,
      result: result,
    }, () => console.log(this.state));
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
              <button 
              style={this.state.index < 3 || this.state.index > 8 ? {visibility: 'hidden'} : {}} 
              onClick={this.submit}>
                Submit
              </button>
              <img src={arrow} 
              style={this.state.index >= 3 && this.state.index <= 8 ? {visibility: 'hidden'} : {}}
              onClick={this.nextPage} 
              alt="next-arrow" />
            </div>
         </div>
       </div>
     );
    } else {
      return (
        <div className="result">
          <h1>{this.state.result.charAt(0).toUpperCase() + this.state.result.slice(1)}</h1>
        </div>
      );
    }
  }
}

export default Sorting;