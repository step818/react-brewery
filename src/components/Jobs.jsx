import React from 'react';
import { Link } from 'react-router-dom';

function Jobs() {
  return(
    <div>
      <h1>Jobs</h1>
      <h4>Wanna become a Rogue? Our job openings are listed below.</h4>

      <br></br><br></br>

      <p>Accounting
        Payroll Specialist
        Portland, OR
        Production Accounting Specialist
        Newport, OR
        Marketing
        PR and Consumer Engagement Manager
        Portland, OR
        Production
        Assistant Distiller
        Newport, OR
        Brewer
        Newport, OR
        CDL Long Haul Driver
        Newport, OR
        CDL Short Haul Driver - Rogue Brewery
        Newport, OR
        Cellar Worker
        Newport, OR
        Maintenance Tech
        Newport, OR
        Packaging Technician
        Newport, OR

        Pubs
        Assistant Pub Manager - Rogue Ales Astoria Public House
        Astoria, OR
        Bartender - Rogue Eastside Pub
        Portland, OR
        Cook - Rogue Farms
        Independence, OR
        Dishwasher/Prep Cook - Rogue Pearl Public House
        Portland, OR
        Host/Busser - Rogue Ales Public House Astoria
        Astoria, OR
        Kitchen Manager - Rogue ales Bayfront Public House
        Newport, OR
        Kitchen Manager - Rogue Ales Public House Astoria
        Astoria, OR
        Line Cook - Rogue Ales Astoria Public House
        Astoria, OR
        Line Cook - Rogue Ales Bayfront Public House
        Newport, OR
        Line Cook - Rogue Ales Issaquah Brewhouse
        Issaquah, WA
        Line Cook - Rogue Brewers on the Bay
        Newport, OR
        Line Cook - Rogue Eastside Pub
        Portland, OR
        Line Cook - Rogue Hall
        Portland, OR
        Maintenance Lead
        Newport, OR
        Prep Cook/Dishwasher - Rogue Ales Public House Astoria
        Astoria, OR
        Pub General Manager - Rogue Brewers on the Bay
        Newport, OR
        Rogue Ales Newport Pubs Hiring Cooks/Servers/Hosts
        Newport, OR
        Rogue Hall - Kitchen Manager
        Portland, OR
        Server - Rogue Ales Astoria Public House
        Astoria, OR
        Server - Rogue Ales Bayfront Public House
        Newport, OR
        Newport, OR
        Server - Rogue Ales Issaquah Brewhouse
        Issaquah, WA
        Server - Rogue Brewers on the Bay
        Newport, OR
        Servers/Hosts/Bartenders - Rogue Pearl Public House
        Portland, OR
        Tour Guide - Rogue Ales Brewery
        Newport, OR
        Sales
        Market Manager - Southern Oregon
        Eugene, OR
      </p>

      <br></br><br></br>

      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact Us</Link> | 
      <Link to="/jobs">Jobs</Link> | 
      <Link to="/store">Store</Link>
      <p>© 2019 Rogue Ales & Spirits all rights reserved</p>
    </div>
  );
}

export default Jobs;