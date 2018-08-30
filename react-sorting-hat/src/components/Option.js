import React from "react";

const Option = props => {
  const clicked = (e) => {
    e.preventDefault();
    props.handleOptionChange(props.value)
  }
  return (
    <div className="button">
        <button 
          className="option-button"
          value={props.value}
          onClick={clicked}
        >
        {props.text}
      </button>
    </div>
  );
}


export default Option;