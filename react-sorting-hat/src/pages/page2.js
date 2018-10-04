import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => (
	<div>
		<p>Not Slytherin, eh? Are you sure? You could be great, you know. It's all here in your head. And Slytherin can help you on your way to greatness, there's no doubt about that. No?</p>
		<Link to="/gryffindor">Anything but Slytherin, anything but Slytherin...</Link>
		<Link to="/page3">Newt Scammander is my hero though...</Link>
	</div>
);

export default Page2;