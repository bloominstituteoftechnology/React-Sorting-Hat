import React, { Component } from 'react';
import {Route } from 'react-router-dom'
import Home from './components/Home';
import OpinionPoll from './components/Questions';
import Navigation from './components/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Route exact path='/questions' component={OpinionPoll}/>
        <Route exact path='/' component={Home}/>
      </div>
    );
  }
}

export default App;
