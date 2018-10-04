import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Index from './components/Index';
import Gryffindor from './pages/gryffindor';
import Hufflepuff from './pages/hufflepuff';
import Ravenclaw from './pages/ravenclaw';
import Slytherin from './pages/slytherin';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page9 from './pages/page9';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/gryffindor" component={Gryffindor} />
            <Route exact path="/hufflepuff" component={Hufflepuff} />
            <Route exact path="/ravenclaw" component={Ravenclaw} />
            <Route exact path="/slytherin" component={Slytherin} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Page3} />
            <Route exact path="/page5" component={Page5} />
            <Route exact path="/page6" component={Page6} />
            <Route exact path="/page7" component={Page7} />
            <Route exact path="/page8" component={Page8} />
            <Route exact path="/page9" component={Page9} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
