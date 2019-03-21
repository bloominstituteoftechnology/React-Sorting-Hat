import React, { Component } from 'react';
import './App.css';

import Welcome from './components/welcome/welcome.js';
import Sorting from './components/sorting/sorting.js';


class App extends Component {
  constructor(){
    super();

    this.state = {
      studentName: "Garry Otter",
      answers: [],
      view: 2
    }
  }

  formSubmit = event => {
    event.preventDefault();
  }

  welcomeFormOnChange = event => {
    event.preventDefault();
    this.setState({studentName: event.target.value});
  }

  advanceView = event => {
    event.preventDefault();
    console.log("Advancing View");
    this.setState({view: this.state.view + 1});
  }

  handleView(){
    let newView = "";
    switch(this.state.view){
      case 1:
        newView =  (
        <Welcome 
          studentName={this.state.studentName} 
          welcomeFormSubmit={this.advanceView}
          welcomeFormOnChange={this.welcomeFormOnChange}
        />
        );
        break;
      case 2:
        newView = (
          <Sorting 
            studentName={this.state.studentName}
          />
        );
        break;
      default:
        return <h1>You broke it</h1>
    }

    return newView;
  }

  render() {
    return (this.handleView());
  }
}

export default App;
