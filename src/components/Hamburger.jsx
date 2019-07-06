import React from 'react';
import { Link } from 'react-router-dom';

function Hamburger() {
  return(
    <div>
      <style global jsx>{`
      body{
        display:grid;
      }
      `}</style>
      <style jsx>{`
        .sideNav{
          margin-left: 35%;
          display: grid;
          place-items: center;
          height: 450px;
          width: 250px;
          border: 1px solid black;
        }
      
      `}</style>
      <div className="sideNav">
        <h3>
          <Link to="/find">FIND ROGUE</Link><br></br>
          <Link to="/about">ABOUT US</Link><br></br> 
          <Link to="/join">JOIN US</Link><br></br> 
          <Link to="/beer">BEERS</Link><br></br>
          <Link to="/pubs">ROGUE PUBS</Link><br></br>
          <Link to="/store">ESTORE</Link><br></br>
          <Link to="/events">EVENTS</Link><br></br>
          <Link to="/contact">CONTACT US</Link>
        </h3>
      </div>
    </div>
  );
}

export default Hamburger;