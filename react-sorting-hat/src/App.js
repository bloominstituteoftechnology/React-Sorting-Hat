import React, { Component } from 'react';
import Speech from './components/Speech/Speech';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='logo'></div>
        <Speech />
        <div className='signature'></div>
      </div>
    );
  }
}

export default App;
