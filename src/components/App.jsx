import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

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
import NewBeerControl from './NewBeerControl';
import Admin from './Admin';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: {},
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }
  //New decrement function neeeds fixing
  handleDecrement(pint) {
    const pints = [...this.state.pints];
    const index = pints.indexOf(pint);
    pints[index] = { pint };
    pints[index].value--;
    this.setState({ pints });
  }

  handleAddingNewBeerToList(newBeer) {
    var newBeerId = v4();
    var newMasterBeerList = Object.assign({}, this.state.masterBeerList, {[newBeerId]: newBeer
    });
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/hamburger' component={Hamburger}/>
          <Route path='/beer' render={() => <Beer beerList={this.state.masterBeerList}/>}/>
          <Route path='/pubs' component={Pubs}/>
          <Route path='/find' component={Find}/>
          <Route path='/store' component={Store}/>
          <Route path='/join' component={Join}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/jobs' component={Jobs}/>
          <Route path='/about' component={About}/>
          <Route path='/events' component={Events}/>
          <Route path='/manage' render={() => <NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList}/>}/>
          <Route path='/admin' render={()=><Admin beerList={this.state.masterBeerList} onDecrement={this.handleDecrement}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;