import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div>
      <Link to="/beer">Beer</Link> | 
      <Link to="/pubs">Pubs</Link> | 
      <Link to="/find">Find</Link> | 
      <Link to="/store">Store</Link> | 
      <Link to="/join">Join</Link>
      <p>ROGUE ALES & SPIRITS
      2320 OSU DRIVE
      NEWPORT OR 97365</p>
    </div>
  );
}

export default Home;