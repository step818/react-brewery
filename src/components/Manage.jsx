import React from 'react';

function Manage() {
  return(
    <div>
      <form>
        <label>Beer Name</label>
        <input
          type='text'
          id='name' />
        <label>Price per pint</label>
        <input
          type='text'
          id='price' />
        <label>Amount in keg</label>
        <input
          type='text'
          id='amount'
          placeholder='124' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Manage;