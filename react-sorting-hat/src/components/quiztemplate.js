import React from 'react';

const QuizTemplate=props=>
        <div className='quiz-item' style={(props.app_state!==1 || props.quiz_state!==props.number)?{display:'none'}:{}}>
            <h3 className='text-flow'>{props.item.question}</h3>
            <div className='btn' onClick={()=>props.answerItem(1)}><p className='text-flow'>{props.item.answer1}</p></div>
            <div className='btn' onClick={()=>props.answerItem(2)}><p className='text-flow'>{props.item.answer2}</p></div>
            <div className='btn' onClick={()=>props.answerItem(3)}><p className='text-flow'>{props.item.answer3}</p></div>
            <div className='btn' onClick={()=>props.answerItem(4)}><p className='text-flow'>{props.item.answer4}</p></div>
        </div>

export default QuizTemplate;