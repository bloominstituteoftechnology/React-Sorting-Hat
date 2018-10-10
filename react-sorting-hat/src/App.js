import React, { Component } from "react";
import Landing from "./components/landing";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hogwarts</h1>
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
