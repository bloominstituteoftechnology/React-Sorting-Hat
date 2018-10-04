import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <Fragment>
    <p>
      “A thousand years or more ago, When I was newly sewn, There lived four wizards of renown,
      Whose name are still well-known: Bold Gryffindor from wild moor, Fair Ravlenclaw from glen,
      Sweet Hufflepuff from valley broad, Shrewd Slytherin from fen. They share a wish, a hope, a
      dream, They hatched a daring plan, To educate young sorcerers, Thus Hogwarts school began. Now
      each of these four founders Formed their own house, for each Did value different virtues, In
      the ones they had to teach. By Gryffindor, the bravest were Prized far beyond the rest; For
      Ravenclaw, the cleverest Would always be the best; For Hufflepuff, hardworkers were Most
      worthy of admission; And power-hungry Slytherin Loved those of great ambition. While still
      alive they did divide Their favourates from the throng, Yet how to pick the worthy ones When
      they were dead and gone? 'Twas Gryffindor who found the way, He whipped me off his head The
      founders put some brains in me So I could choose instead! Now slip me snug around your ears,
      I've never yet been wrong, I'll have alook inside your mind And tell where you belong!”
    </p>
    <Link to="/page5">Put on the Sorting hat!</Link>
  </Fragment>
);

export default Index;
