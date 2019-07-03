import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Hamburger from './Hamburger';
import Beer from './Beer';
import Pubs from './Pubs';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hamburger' component={Hamburger}/>
        <Route path='/beer' component={Beer}/>
        <Route path='/pubs' component={Pubs}/>
      </Switch>
    </div>
  );
}

export default App;