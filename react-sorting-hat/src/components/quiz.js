import React from 'react'; 
import QuizStyle from './quizstyle.js';
const Sorting=props=>props.sortingItems.map(
    (question,index)=><sorting answerItem={props.answersortingItem} item={question} key={index} app_state={props.app_state} sorting_state={props.sorting_state} number={index}/>)

export default Sorting;