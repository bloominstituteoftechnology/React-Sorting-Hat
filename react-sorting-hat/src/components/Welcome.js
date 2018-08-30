import React from 'react'

const Welcome = props => (
  <div className="wrapper">
    <h1 className="welcome__header">Welcome to Hogwarts School of Witchcraft and Wizardry!</h1>
    <p className="welcome__text"> Your training to become a witch or wizard will begin soon.<br/>
    To get you sorted into the correct house, you must first answer a few questions.</p>
    <button className="welcome__button" onClick={props.handleWelcome}> Begin your adventure </button>
  </div>
)

export default Welcome;