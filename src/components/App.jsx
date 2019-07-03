import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Hamburger from './Hamburger';

function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hamburger' component={Hamburger}/>
      </Switch>
    </div>
  );
}

export default App;