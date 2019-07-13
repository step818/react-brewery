import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bg from '../assets/images/beers-page-crop.jpg';

import BeerList from './BeerList';

function Beer(props) {

  var body = {
    backgroundImage: `url(${bg})`,
    height: '400px',
  };

  return(
    <div>
      <style jsx>{`
        .beerbody {
          background-color: darkslategray;
          color: #E4E4E4;
        }
      `}</style>
      <div className="beerbody">
        <div style={body}>
        </div>
        <h1>BEERS</h1>
        <p>Rogue brews a variety of ales and lagers at their World Headquarters in Newport, Oregon. Brewmaster John Maier has been crafting Rogue beer since 1989 and is still actively brewing up innovative beers and overseeing production on our 100 barrel brewing system. We bottle and can our ales and distribute them in all 50 states and 54 countries. Use the Rogue Finder to hunt down Rogue ales and lagers near you.</p>

        <BeerList beerList={props.beerList} onDecrement={this.props.onDecrement}/>
        
        <Link style={{color: 'yellow'}} to="/about">About</Link> | 
        <Link style={{color: 'yellow'}} to="/contact">Contact Us</Link> | 
        <Link style={{color: 'yellow'}} to="/jobs">Jobs</Link> |  
        <Link style={{color: 'yellow'}} to="/store">Store</Link> | 
        <Link style={{color: 'hotpink'}} to="/manage">Manage</Link>
        <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
      </div>
    </div>
  );
}

Beer.propTypes = {
  beerList: PropTypes.object
};

export default Beer;