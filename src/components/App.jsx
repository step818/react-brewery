import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Hamburger from './Hamburger';
import Beer from './Beer';
import Pubs from './Pubs';
import Find from './Find';
import Store from './Store';
import Join from './Join';
import Contact from './Contact';
import Jobs from './Jobs';
import About from './About';
import Events from './Events';
import Manage from './Manage';


function App() {
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/hamburger' component={Hamburger}/>
        <Route path='/beer' component={Beer}/>
        <Route path='/pubs' component={Pubs}/>
        <Route path='/find' component={Find}/>
        <Route path='/store' component={Store}/>
        <Route path='/join' component={Join}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/jobs' component={Jobs}/>
        <Route path='/about' component={About}/>
        <Route path='/events' component={Events}/>
        <Route path='/manage' component={Manage}/>
      </Switch>
    </div>
  );
}

export default App;