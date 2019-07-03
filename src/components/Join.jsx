import React from 'react';
import { Link } from 'react-router-dom';

function Join() {
  return(
    <div>
      <h1>ROGUE NATION</h1>
      <h3>JOIN THE REVOLUTION</h3><br></br>

      <p>Rogues believe in doing things their own way and living outside of the lines. The Rogue Nation was created on that principle by a handful of like-minded Rogues looking for a little Revolution in Newport, Ore. Today, the Nation has grown to over 270,000 Citizens worldwide, from Tokyo to London, Oregon to Florida. Our Citizens are rare individuals with unique talents located across the globe. That's why we recognize a Rogue Nation Citizen of the Month.</p><br></br>

      <p>Show us where you are in the Rogue Nation & why you have what it takes to be a Rogue Nation Citizen of the Month: Click here to find out how to enter. (Read the official rules here.)</p><br></br>

      <p>Become a Citizen of the Rogue Nation to receive regular correspondence from Rogue Nation President Big Al Jorgensen, updates about Rogue exclusive news, giveaways, events and releases, and other benefits from Nation outposts and embassies.</p><br></br>

      <p>Join us.</p><br></br>

      <form>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'/>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'/>
        <input
          type='text'
          id='email'
          placeholder='Email'/>
        <input
          type='text'
          id='birthday'
          placeholder='Birthday'/>
        <input
          type='text'
          id='postalCode'
          placeholder='Postal Code'/>
        <button
          type='submit'>Submit Application</button>
      </form>

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

export default Join;