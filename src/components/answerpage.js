import React from 'react';
import './components.css';

 const AnswerPage = (props) =>{
    let results = props.methods[0]();
    switch (results) {
        case 'answer0':
        return(
            <div className="container">
            <h2>YOU'RE IN WHIFFLEBALL </h2><br/>
            <button onClick={props.methods[1]}> Reset </button> 

           </div>
               
        )
        case 'answer1':
        return(
            <div className="container">
            <h2>YOU'RE IN A CONFUSED STATE</h2><br/>
            <button onClick={props.methods[1]}> Reset </button> 
           </div>)
        case 'answer2':
        return(
            <div className="container">
            <h2>YOU'RE IN THE HOUSE OF THE DEAD</h2><br/>
            <button onClick={props.methods[1]}> Reset </button> 
           </div>)
        case 'answer3':
        return(
            <div className="container">
            <h2>YOU'RE LOST ON MELANCHOLY HILL</h2><br/>
            <button onClick={props.methods[1]}> Reset </button> 
           </div>)
        default:

        break;
    }
  
}


export default AnswerPage;