import React from 'react';
import { Link } from 'react-router-dom';
import BeerFormat from './BeerFormat';


var masterBeerList = [
  {
    name: 'OUTTA LINE IPA',
    price: '5.5',
    pints: 124
  },
  {
    name: 'BASQUATCH',
    price: '4.5',
    pints: 124
  },
  {
    name: 'DEAD GUY ALE',
    price: '5',
    pints: 124
  }
];

function Beer() {
  return(
    <div>
      <h1>BEERS</h1>
      <p>Rogue brews a variety of ales and lagers at their World Headquarters in Newport, Oregon. Brewmaster John Maier has been crafting Rogue beer since 1989 and is still actively brewing up innovative beers and overseeing production on our 100 barrel brewing system. We bottle and can our ales and distribute them in all 50 states and 54 countries. Use the Rogue Finder to hunt down Rogue ales and lagers near you.</p>

      <hr/>
      {masterBeerList.map((beer,index) => 
        <BeerFormat name={beer.name} 
          price={beer.price}
          pints={beer.pints} 
          key= {index}/>
      )}

      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Jobs</Link> |  
      <Link to="/store">Store</Link> | 
      <Link to="/manage">Manage</Link>
      <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
    </div>
  );
}

export default Beer;