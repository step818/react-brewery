import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return(
    <div>
      <h1>ROGUE FOUNDATION</h1>
      
      <br></br><br></br>

      <p>In February 1989, Rogue founder Jack Joyce was passing through Newport, Oregon, in search of the perfect place for a new Rogue pub. An unusual snowstorm stranded Jack along Newport’s Historic Bay Front. Seeking shelter, he wandered into Mo’s Chowder where he met the founder, Mohava Niemi. Extending her signature hospitality, Mo welcomed him to the city with her famous clam chowder. Over a bowl, she shared her dream of living above a bar and described the perfect spot for the next Rogue Ales Brew Pub. Mo offered her large vacant space and garage to Jack at a very generous price under two stipulations:</p>

      <br></br>

      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Jobs</Link> | 
      <Link to="/stories">Rogue Foundation</Link> | 
      <Link to="/store">Store</Link>
      <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
    </div>
  );
}

export default About;