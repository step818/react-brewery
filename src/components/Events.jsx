import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return(
    <div>
      <h1>Events</h1>

      <br></br><br></br>

      <h2>Upcoming Events</h2>

      <br></br><br></br>

      <h2>7/27/19</h2>
      <h3>A Toast to Rogue Brewmaster John Maier</h3>

      <br></br><br></br>

      <h2>Past Events</h2>

      <br></br><br></br>

      <h2>5/18/19</h2>
      <h3>John Maier's 30th Anniversary Celebratory Brew Fest</h3>
      <br></br>
      <h2>5/1/19</h2>
      <h3>Rogue Pint Night at Growl</h3>

      <br></br><br></br>

      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Jobs</Link> |  
      <Link to="/store">Store</Link>
      <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
    </div>
  );
}

export default Events;