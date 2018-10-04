import React, { Component } from 'react';
import QuestionSet from './QuestionSet';

class Question extends Component {
    constructor() {
        super();
        this.state = {
            answers: {}
        };
    }

    handleChange = (question, answer) => {
        const newAnswer = {}
        newAnswer[question] = answer
        this.setState(prevState => ({
            answers: Object.assign(prevState.answers, newAnswer)
        }));
    }

    handleSumbit = event => {
        event.preventDefault();
        let results = Object.values(this.state.answers)
        console.log(results);
        // let resultCount = results.reduce((all, cur) => {
        //     cur in all ? all[cur]++ : all[cur] = 1;
        //     return all;
        // })
    }

    render() {
        return (
            <form>
                <QuestionSet 
                    handleChange={this.handleChange}
                    handleSumbit={this.handleSumbit}
                    questions={[
                        {num: 1, title: 'what\'s your favorite color?', options: ['blue', 'green', 'red', 'pink']},
                        {num: 2, title: 'what\'s your favorite food?', options: ['tofu', 'yam', 'egg', 'mango']},
                        {num: 3, title: 'what\'s your favorite holiday?', options: ['valentine\'s day', 'halloween', 'thanksgiving', 'new years']},
                        {num: 4, title: 'what\'s your favorite number?', options: ['5', '23', '600', '0.2']},
                        {num: 5, title: 'what\'s your favorite season?', options: ['winter', 'spring', 'summer', 'fall']},
                        {num: 6, title: 'what\'s your favorite plant?', options: ['succulent', 'lotus', 'pine tree', 'venus fly trap']},
                    ]}
                />
                {/* <input onSubmit={this.handleSumbit} type='submit' value='Submit' /> */}
            </form>
        );
    }
}

export default Question