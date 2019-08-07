import React, { Component } from 'react';
import './App.css';
import QuestionForm from './components/QuestionForm'

class App extends Component {
  constructor()
  {
    super()
    this.state = 
    {
      
    }
  }


  render() {
    return (
      <div className="App">
        <QuestionForm />
      </div>
    );
  }
}

export default App;
