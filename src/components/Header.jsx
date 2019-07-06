import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/images/hamenu.png';

function Header() {
  var makeGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 9fr',
    gridTemplateRows: '1fr',
  };
  return(
    <div style={makeGrid}>
      <style jsx>{`
      .header {text-align: center;
              font-size: xx-large;
              font-family: Courier New;
              display: grid;
              padding-right: 15%;
      }

      img{width:50px;
          height: 50px;
          float: left;
          left:20%;
          display: grid;
          justify-self: center;
          margin-top: 50%;
          margin-left: 50%;

      }
      `}</style>
      <div className="menu"><Link to="/hamburger"><img src={menuIcon} /></Link></div>
      <div className="header"><Link to="/"><h1>ROGUE</h1></Link></div>
      
    </div>
  ); 
} 

export default Header;