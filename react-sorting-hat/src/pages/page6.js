import React from 'react';
import { Link } from 'react-router-dom';

const Page6 = () => (
  <div>
    <p>
      “Or yet in wise old Ravenclaw, if you've a ready mind, Where those of wit and learning, Will
      always find their kind.”{' '}
    </p>
    <Link to="/ravenclaw">I'm good at Quidditch too!</Link>
    <Link to="/page8">You're a fool old sorting hat!</Link>
  </div>
);

export default Page6;
