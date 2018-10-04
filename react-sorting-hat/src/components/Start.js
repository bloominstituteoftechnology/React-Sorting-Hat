import React from 'react';

const Start = props => {
  return (
    <div className='start-container'>
      <h1 className='start-header'>Welcome to Hogwarts</h1>
      <p>The start-of-term banquet will begin shortly, but before you take your seat in the Great Hall, you will be sorted into your house. The Sorting is a very important ceremony because, while you are here, your house will be something like your family within Hogwarts.</p>
      <button className='start-button' onClick={props.handleStart}>Start the ceremony </button>
    </div>
  )
}

export default Start;
