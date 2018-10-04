import React, { Component } from 'react'

// import styles
import './reset.css'
import './index.css'

// import components
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    )
  }
}

export default App
