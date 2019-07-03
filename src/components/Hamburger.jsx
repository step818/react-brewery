import React from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
  return(
    <div>
      <h3>
        <Link to="/find">FIND ROGUE</Link> 
        <Link to="/stories">OUR STORIES</Link> 
        <Link to="/join">JOIN US</Link> 
        <Link to="/beer">BEERS</Link>
        <Link to="/pubs">ROGUE PUBS</Link>
        <Link to="/store">ESTORE</Link>
        <Link to="/events">EVENTS</Link>
        <Link to="/contact">CONTACT US</Link>
      </h3>
    </div>
  );
}

export default Hamburger;