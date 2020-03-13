import React from 'react';

const Question = ({ question, handleAnswerQuestion }) => {
    const questionKeys = Object.keys(question).slice(1,5)

    const answerQuestion = (ans) => {
        handleAnswerQuestion(question[questionKeys[ans]])
    }
    return (
        <div>
            <h2>{question.question}</h2>
            <div style={{ display: "flex", flexWrap: "wrap"  }}>
                <ul>
                    <li onClick={() => answerQuestion(0)}>{questionKeys[0]}</li>
                    <li onClick={() => answerQuestion(1)}>{questionKeys[1]}</li>
                </ul>
                <ul>
                    <li onClick={() => answerQuestion(2)}>{questionKeys[2]}</li>
                    <li onClick={() => answerQuestion(3)}>{questionKeys[3]}</li>
                </ul>
            </div>
        </div>
    )
}

export default Question;