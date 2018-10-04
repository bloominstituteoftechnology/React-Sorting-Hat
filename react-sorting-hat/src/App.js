import React, { Component } from 'react'

// import styles
import './reset.css'
import './index.css'

// import components
import Header from './components/Header'
import IntroButton from './components/IntroButton'
import Questions from './components/Questions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      started: false
    }
  }

  startQuestions = () => {
    this.setState({ started: true })
  }

  render() {
    const { started } = this.state
    const { startQuestions } = this

    return (
      <div className="container">
        <Header />
        <IntroButton startQuestions={startQuestions} />
        {started && <Questions />}
      </div>
    )
  }
}

export default App
