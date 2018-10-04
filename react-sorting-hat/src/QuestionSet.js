import React from 'react';

const QuestionSet = props => {
    return (
        <div>
            {props.questions.map(q => {
                return (
                    <div>
                        <h2>{q.title}</h2>
                        <fieldset id={q.num}>
                        {q.options.map((o, ind) => {
                            return (
                                <label>
                                {o}
                                <input
                                onChange={() => props.handleChange(q.num, ind)}
                                type="radio"
                                value={ind} 
                                name={q.num}/>
                                </label>
                            )
                        })}
                        </fieldset>
                    </div>
                )
            })}
            <input onSubmit={(event) => props.handleSumbit(event)} type='text' name='name'/>
        </div>
    );
}

export default QuestionSet;