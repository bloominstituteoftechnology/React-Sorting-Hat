import React from 'react';

const HomePage=props=>
<div style={props.style!==0?{display:'none'}:{}}>
    <h1 className='text-flow'>The Sorting Begins.</h1>
    <div className="btn" onClick={props.change_app_state}><p className='text-flow'>Your Destiny Begins Here</p></div>
    
</div>
export default HomePage