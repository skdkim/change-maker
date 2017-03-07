import React from 'react';
import Coin from './coin';

class Coins extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <div>
        <Coin />
        <Coin />
        <Coin />
        <Coin />
      </div>
    );
  }
}

export default Coins;
