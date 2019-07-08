import React from 'react';

function Manage() {
  let _name=null;
  let _price=null;
  let _pints=null;

  function handleNewBeerFormSubmission(e){
    e.preventDefault();
    console.log(_name.value);
    console.log(_price.value);
    console.log(_pints.value);
    _names.value = '';
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
        <label>Amount in keg</label>
        <input
          type='text'
          id='pints'
          placeholder='124'
          ref={(input) => {_pints = input;}} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Manage;