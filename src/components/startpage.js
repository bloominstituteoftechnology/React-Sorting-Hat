import React from 'react';
import './components.css';

 const StartPage = (props) =>{
   return(
  <div className="container">
  <h2>OI, WELCOME TO WART'S HOG MAGIC ACADEMY </h2>
  <p>Let's get ya sorted now </p>
  <button onClick={props.methods}> ONWARD </button> 
 </div>)
}


export default StartPage;