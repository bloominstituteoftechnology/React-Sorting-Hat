import React from 'react';

const Sorted = props => {

  const { name } = props.sortedHouse;
  const { description } = props.sortedHouse;
  const { famousMembers } = props.sortedHouse;
  const { founder } = props.sortedHouse;
  const { houseGhost } = props.sortedHouse;
    let classes = 'sorted-house '
    classes += props.sortedHouse.name.toLowerCase();
  return (
    <div className={classes}>
      <p>Your new home at Hogwarts is</p>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Your house was founded by {founder}</p>
      <p>Famous members of your house include: {famousMembers}</p>
      <p>Please don't be spooked by {houseGhost}, that's just your house's ghost!</p>
    </div>
  )
}

export default Sorted;
