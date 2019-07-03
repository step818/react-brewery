import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <h1>Rogue</h1>
      <Link to="/beer">Beer</Link> | 
      <Link to="/pubs">Pubs</Link> | 
      <Link to="/find">Find</Link> | 
      <Link to="/store">Store</Link> | 
      <Link to="/join">Join</Link>
    </div>
  ); 
} 

export default Header;