import React from 'react';
import { Link } from 'react-router-dom';

const Page3 = () => (
  <div>
    <p>
      “You might belong in Hufflepuff, Where they are just and loyal, Those patient Hufflepuffs are
      true, And unafraid of toil.”
    </p>
    <Link to="/page7">Actually no! I'm acutally pretty disloyal - ya feel me?</Link>
    <Link to="/hufflepuff">Yes Please!</Link>
  </div>
);

export default Page3;
