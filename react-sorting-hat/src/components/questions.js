import React from "react";

import "./questions.css";

const Questions = props => {
  const quotes = props.questionsDataArray.map(quotes => quotes.quote);

  const questions = props.questionsDataArray.map(
    questions => questions.question
  );

  const responses = props.questionsDataArray.map(
    responses => responses.response
  );

  if (props.questionNumber >= 0 && props.questionNumber <= 5) {
    return (
      <div>
        <h2 className="quote">{quotes[props.questionNumber]}</h2>
        <div className="questions">{questions[props.questionNumber]}</div>
        <form>
          {responses[props.questionNumber].map(response => (
            <div className="input">
              <input
                onClick={props.onRadio}
                type="radio"
                name={`${props.questionNumber}`}
                value={response.point}
                required
              />
              {response.answer}
            </div>
          ))}
        </form>

        <button onClick={props.questionDecrement}>previous</button>
        <button onClick={props.questionIncrement}>next</button>
      </div>
    );
  }
  return null;
};

export default Questions;
