import React from 'react';
import { Link } from 'react-router-dom';
import mainPagePicture from '../assets/images/homepagebackground.jpg';

function Home() {
  return(
    <div>
      <style jsx>{`
        .topLinks {
          text-align: center;
          word-spacing: 1em;
          font-size: x-large;
        }
      `}</style>
      <div className="topLinks">
        <Link to="/beer">Beer</Link> | 
        <Link to="/pubs"> Pubs</Link> | 
        <Link to="/find"> Find</Link> | 
        <Link to="/store"> Store</Link> | 
        <Link to="/join"> Join</Link>
      </div>
      <img src={mainPagePicture}/>
      <p>ROGUE ALES & SPIRITS
      2320 OSU DRIVE
      NEWPORT OR 97365</p>
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Work at Rogue</Link> | 
      <Link to="/find">Find Rogue</Link> | 
      <Link to="/about">About Us</Link>
    </div>
  );
}

export default Home;