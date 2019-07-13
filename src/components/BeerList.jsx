import React from 'react';
import PropTypes from 'prop-types';

import BeerFormat from './BeerFormat';

function BeerList(props){
  return(
    <div>
      <hr/>
      {Object.keys(props.beerList).map(function(beerId){
        var beer = props.beerList[beerId];
        return <BeerFormat name={beer.name}
          price={beer.price}
          pints={beer.pints}
          key={beerId}
          beerId={beerId} />;
      })}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.object
};

export default BeerList;