import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <style global jsx>{`
        .authenticate{
          background-color: black;
          color: beige;
        }
      `}</style>
      <div className="authenticate">
        <p>Only an authorized brewmate can update the beer list. <br/><br/> Are you authorized?</p>
        <button onClick={props.onClickYes}>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}

ConfirmationQuestions.propTypes={
  onClickYes: PropTypes.func
};

export default ConfirmationQuestions;