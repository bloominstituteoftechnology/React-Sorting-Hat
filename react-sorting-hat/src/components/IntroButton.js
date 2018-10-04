import React from 'react'

const IntroButton = ({ startQuestions }) => (
  <button type="submit" onClick={startQuestions} className="intro-button">
    Click here to start the sorting process
  </button>
)

export default IntroButton
