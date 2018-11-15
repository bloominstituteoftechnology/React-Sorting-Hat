import React from 'react';

const LandingPage=props=>
<div style={props.style!==0?{display:'none'}:{}}>
    <h1 className='text-flow'>Let The Sorting Begin!</h1>
    <p>There's nothing hidden in your head
    The Sorting Hat can't see,
    So try me on and I will tell you
    Where you ought to be.</p>
    <div className="btn" onClick={props.change_app_state}><p className='text-flow'>Begin</p></div>
    
</div>
export default LandingPage