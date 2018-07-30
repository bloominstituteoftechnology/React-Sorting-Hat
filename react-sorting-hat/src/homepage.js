import React from 'react';

const HomePage=props=>
<div style={props.style!==0?{display:'none'}:{}}>
    <h1 className='text-flow'>Let The Sorting Now Begin.</h1>
    <img src='https://gd.image-gmkt.com/li/358/283/743283358.g_400-w-st_g.jpg' alt='Harry Potter house crests'/>
    <div className="btn" onClick={props.change_app_state}><p className='text-flow'>Destiny Awaits</p></div>
    
</div>
export default HomePage