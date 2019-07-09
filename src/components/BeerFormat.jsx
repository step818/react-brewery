import React from 'react';
import PropTypes from 'prop-types';

function BeerFormat(props) {
  return(
    <div>
      <h3>{props.name} - - - {props.price}</h3>
      <h4>Amount left in keg - - - {props.pints} pints</h4>
      <button>Minus 1 pint</button>
      <hr/>
    </div>
  );
}

BeerFormat.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  pints: PropTypes.number
};

export default BeerFormat;