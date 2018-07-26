import React from 'react'

const Welcome = props => (
  <div>
    <h1>Welcome to Hogwarts School of Witchcraft and Wizardry!</h1>
    <p> Your training to become a witch or wizard will begin soon.</p>
    <p>To get you sorted into the correct house, you must first answer a few questions.</p>
    <button onClick={props.handleWelcome}> Ready? </button>
  </div>
)

export default Welcome;