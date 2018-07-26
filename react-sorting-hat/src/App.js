import React, { Component } from 'react';
import Welcome from './components/Welcome'
import Questions from './components/Questions'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      welcomed : false
    }
  }

  handleWelcome = () => {
    this.setState({ welcomed: true })
  }
  render() {
    
    return (
      <div className="App">
        <div className="app-container">
        {!this.state.welcomed ? 
        <Welcome 
          handleWelcome={this.handleWelcome} 
        />
        :<Questions />} 
        </div>
      </div>
    );
  }
}

export default App;
