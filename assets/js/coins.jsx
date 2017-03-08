import React from 'react';
import Coin from './coin';

require('../css/coins.css');

class Coins extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <div className = "coinTray">
        <Coin />
        <Coin />
        <Coin />
        <Coin />
      </div>
    );
  }
}

export default Coins;
