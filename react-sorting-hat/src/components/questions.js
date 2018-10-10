import React from "react";

const Questions = props => {
  console.log(props, "questions");
  console.log(props.questionsDataArray, "questions data array");
  console.log(props.questionNumber, "question number");
  const questions = props.questionsDataArray.map(
    questions => questions.question
  );
  const responses = props.questionsDataArray.map(
    responses => responses.response
  );
  let answer = responses[props.questionNumber].map(answers => answers.answer);
  console.log(questions);
  console.log(responses, "responses");
  console.log(answer, "answer");
  return (
    <div>
      <div>{questions[props.questionNumber]}</div>
      <form>
        {responses[props.questionNumber].map(response => (
          <div>
            <input
              onClick={props.onRadio}
              type="radio"
              name={`${props.questionNumber}`}
              value={response.point}
            />
            <label name={`${props.questionNumber}`} />
            {response.answer}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <button onClick={props.questionDecrement}>previous</button>
      <button onClick={props.questionIncrement}>next</button>
    </div>
  );
};

export default Questions;
