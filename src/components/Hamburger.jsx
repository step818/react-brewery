import React from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
  return(
    <div>
      <h3>
        <Link to="/find">FIND ROGUE</Link><br></br>
        <Link to="/stories">OUR STORIES</Link><br></br> 
        <Link to="/join">JOIN US</Link><br></br> 
        <Link to="/beer">BEERS</Link><br></br>
        <Link to="/pubs">ROGUE PUBS</Link><br></br>
        <Link to="/store">ESTORE</Link><br></br>
        <Link to="/events">EVENTS</Link><br></br>
        <Link to="/contact">CONTACT US</Link>
      </h3>
    </div>
  );
}

export default Hamburger;