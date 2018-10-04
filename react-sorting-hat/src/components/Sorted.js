import React from 'react';

const Sorted = props => {

  const { name } = props.sortedHouse;
    let classes = 'sorted-house '
    classes += props.sortedHouse.name.toLowerCase(); 
  return (
    <div className='sorted'>
      <p>You have been sorted into</p>
      <h1 className={classes}>{name}</h1>
    </div>
  )
}

export default Sorted;
