import React from 'react';

const Quiz = (props) => {
    return (
        <div className='quiz'>
            <p className="init">You approach, and take the Sorting Hat in your hands. As you pull the fabric over your head, the Sorting Hat beckons you with questions...</p>
            {questions(props.question, props.next, props.results)}
        </div>
    )
}

const Question1 = (props) => {
    return (
        <div className="question"><p>Someone you highly respect at work loses their temper with you and insults you, then storms off. What goes through your mind?</p>
            <button onClick={props.next} id="4">Not surprising--humans are flawed. One of the privileges of being highly respected is that people overlook your behavior.</button>
            <button onClick={props.next} id="3">People make mistakes, and you won't let your opinion be changed yet by just one instance of bad behavior. Let it slide.</button>
            <button onClick={props.next} id="1">You plan to talk to them later after they've cooled down so that you can clear the air.</button>
            <button onClick={props.next} id="2">There were probably multiple compounding reasons for them to lose their temper today, and you could find out if you spoke to them or their peers.</button>
        </div>
    )
}
const Question2 = (props) => {
    return (
        <div className="question"><p>What kind of power appeals to you the most?</p>
            <button onClick={props.next} id="3">Harnessing the power of nature.</button>
            <button onClick={props.next} id="4">Power over other people.</button>
            <button onClick={props.next} id="2">A superhuman memory and intellect.</button>
            <button onClick={props.next} id="1">The strength to always do the right thing.</button>
        </div>
    )
}
const Question3 = (props) => {
    return (
        <div className="question"><p>There is someone hunting you, who has been sent to assassinate you. What is closest to what you would do?</p>
            <button onClick={props.next} id="1">Hunt them down first.</button>
            <button onClick={props.next} id="2">Find their employer and get the contract revoked.</button>
            <button onClick={props.next} id="3">Hole up in your house with a gun and booby traps.</button>
            <button onClick={props.next} id="4">Find their family, hold them hostage, and wait for them there.</button>
        </div>
    )
}
const Question4 = (props) => {
    return (
        <div className="question"><p>What is the most important cardinal virtue?</p>
            <button onClick={props.next} id="3">Fortitude: the ability to be patient, endure, and delay gratification is extremely important for self-discipline. </button>
            <button onClick={props.next} id="2">Prudence: governing yourself by means of reason is the best way to adapt to the world.</button>
            <button onClick={props.next} id="1">Justice: without the will to protect the innocent and deliver just retribution, society would fall apart.</button>
            <button onClick={props.next} id="4">None of them: life can be cruel and arbitrary, and it comes down to you doing the best you can for yourself while you live.</button>
        </div>
    )
}
const Question5 = (props) => {
    return (
        <div className="question"><p>Of these four, which is the most difficult thing for you to bear?</p>
            <button onClick={props.next} id="3">There is something extremely vital you have to do, and doing it will grievously betray the trust of one of your teachers.</button>
            <button onClick={props.next} id="2">A magic spell will save a dear friend, but in return it will dull your cognition for ten years.</button>
            <button onClick={props.next} id="4">In order to complete a vital task, you must humiliate yourself in front of many of your enemies.</button>
            <button onClick={props.next} id="1">A horrific battle is ongoing, but to have a shot at turning the tide, you need to run away from it and leave your fellow warriors behind.</button>
        </div>
    )
}
const Question6 = (props) => {
    return (
        <div className="question"><p>Your ideal romantic partner should exemplify the following the most:</p>
            <button onClick={props.next} id="1">Assertiveness, and the willingness to be bold and brave when needed.</button>
            <button onClick={props.next} id="3">Unending loyalty to you as his or her partner and awareness of joint responsibilities.</button>
            <button onClick={props.next} id="4">The prudence to do what is best for the two of you as a couple, even if it may hurt others.</button>
            <button onClick={props.next} id="2">Your intellectual equal or even superior, so that you can rely on them and have good conversation with them.</button>
        </div>
    )
}

const ShowResult = (props) => {
    return (
        <div>
            <p>It seems that the Sorting Hat has decided...</p>
            <button onClick={props.showMe}>What is my house?</button>
        </div>
    )
}

const questions = (integer, questionFunction, resultsFunction) => {
    const question_array = [<Question1 next={questionFunction}/>,<Question2 next={questionFunction}/>,<Question3 next={questionFunction}/>,<Question4 next={questionFunction}/>,<Question5 next={questionFunction}/>,<Question6 next={questionFunction}/>,<ShowResult showMe={resultsFunction}/>]
    return question_array[integer]
}


export default Quiz;