import React from 'react';
import styled from 'styled-components';

function Welcome(props){
    return (
        <WelcomeBox>
            <Title>Welcome to Hogwarts</Title>
            <Message>Don't look so nervous... </Message>
            <form >
                <StyInput type="text" name="studentName" 
                    placeholder="what's your name?" 
                    value={props.studentName}
                    onChange={props.welcomeFormOnChange}
                ></StyInput>
                <StyButton onClick={props.welcomeFormSubmit}>Continue</StyButton>
            </form>
        </WelcomeBox>
    );
}

const WelcomeBox = styled.div`
    background: darkgray;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 2rem;
`;

const Message = styled.p`
    font-size: 1.6rem;
    margin-bottom: 2rem;
`;

const StyInput = styled.input`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px;
    border: none;
    height: 2rem;

`;

const StyButton = styled.button`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0 1rem;
    border: none;
    height: 2rem;
`;

export default Welcome;