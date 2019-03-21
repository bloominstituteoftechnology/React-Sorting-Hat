import React from 'react';
import styled from 'styled-components';

const questions = {
    1: {a: "answer1", b: "answer2", c: "answer3", d: "answer4"}
}

class Sorting extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            answers: [],
        };
    }

    render(){
        return (
            <SortingBox>
                <h1>Welcome to Sorting {this.props.studentName}</h1>
            </SortingBox>
        )
    }
}

const SortingBox = styled.div`
    background: darkgray;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Sorting;