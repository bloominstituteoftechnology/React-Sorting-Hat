import React, { Component } from 'react'
import { Questions } from '../sortingQuestions'

export class QuestionForm extends Component {
    constructor() {
        super();
        this.state = {
            question: Questions.filter(el => el.id === 0)[0]
        }
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.state.question.questionText}</h1>
            </div>
        )
    }
}


