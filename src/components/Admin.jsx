import React from 'react';
import PropTypes from 'prop-types';

import BeerList from './BeerList';

function Admin(props) {
  return(
    <div>
      <h2>Admin</h2>
      <BeerList beerList={props.beerList} onSellingPint={props.onSellingPint}/>
    </div>
  );
}

Admin.propTypes = {
  onSellingPint: PropTypes.func,
  beerList: PropTypes.object
};

export default Admin;