import React from 'react';
import { Link } from 'react-router-dom';

function Pubs() {
  return(
    <div>
      <h1>ROGUE PUBS</h1>
      <h2>NEWPORT, ORE.</h2>
      <p>Rogue Brewer's on the Bay
      Rogue Ales Bayfront Public House
      Rogue House of Spirits</p><br></br>

      <h2>PORTLAND, ORE.</h2>
      <p>Rogue Pearl Public House
      Rogue Eastside Pub & Pilot Brewery
      Rogue Hall</p><br></br>

      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Jobs</Link> | 
      <Link to="/stories">Rogue Foundation</Link> | 
      <Link to="/store">Store</Link>
      <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
    </div>
  );
}

export default Pubs;