import React from 'react';

const Start = props => {
  return (
    <div className='container'>
      <h1 className='start-header'>Hello and welcome to Hogwarts School of Witchcraft and Wizardry</h1>
      <p>The start-of-term banquet will begin shortly, but before you take your seat in the Great Hall, you will be sorted into your houses. The Sorting is a very important ceremony because, while you are here, your house will be something like your family within Hogwarts.</p>
      <button className='start-button' onClick={props.handleStart}>Start the ceremony </button>
    </div>
  )
}

export default Start;
