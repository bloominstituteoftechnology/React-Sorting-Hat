'use strict'

/**
 * Dependencies
 */

const React = require('react')
const logo = require('./logo.svg')

/**
 * Constants
 */

const Component = React.Component

/**
 * Import styles
 */

require('./App.scss')

/**
 * Define component
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

/**
 * Export component
 */

module.exports = App
