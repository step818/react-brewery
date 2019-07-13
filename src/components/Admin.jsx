import React from 'react';
import PropTypes from 'prop-types';

import BeerList from './BeerList';

function Admin(props) {
  return(
    <div>
      <h2>Admin</h2>
      <BeerList beerList={props.beerList}/>
    </div>
  );
}

Admin.propTypes = {
  beerList: PropTypes.object
};

export default Admin;