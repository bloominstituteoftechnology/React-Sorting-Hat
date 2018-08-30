import React from 'react'

const Results = props => {
  const { name } = props.chosenHouse;
  return (
  <div className="results">
    <p> Your house is...</p>
    <h1 className="results__house">{name}!</h1>
  </div>
)}

export default Results;