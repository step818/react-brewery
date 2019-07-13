import React from 'react';
import PropTypes from 'prop-types';


function Manage(props) {
  let _name=null;
  let _price=null;
  let _pints=null;

  function handleNewBeerFormSubmission(e){
    e.preventDefault();
    props.onNewBeerCreation({name: _name.value, price: _price.value, pints: _pints.value});
    _name.value = '';
    _price.value = '';
    _pints.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <label>Beer Name</label>
        <input
          type='text'
          id='name'
          ref={(input) => {_name = input;}} />
        <label>Price per pint</label>
        <input
          type='text'
          id='price'
          ref={(input) => {_price = input;}} />
        <label>Amount of pints in keg (standard size keg is 124 pints)</label>
        <input
          type='text'
          id='pints'
          ref={(input) => {_pints = input;}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

Manage.propTypes = {
  beerList: PropTypes.object,
  onNewBeerCreation: PropTypes.func
};

export default Manage;