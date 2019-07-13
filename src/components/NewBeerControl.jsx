import React from 'react';
import PropTypes from 'prop-types';

import ConfirmationQuestions from './ConfirmationQuestions';
import Manage from './Manage';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false
    };
    this.handleClickYes = this.handleClickYes.bind(this);
  }

  handleClickYes(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <Manage beerList={this.state.masterBeerList} onNewBeerCreation={this.props.onNewBeerCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onClickYes={this.handleClickYes} />;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerControl.propTypes = {
  beerList: PropTypes.object,
  onNewBeerCreation: PropTypes.func
};

export default NewBeerControl;