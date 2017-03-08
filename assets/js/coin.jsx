import React from 'react';
import Noti from './notification';

require('../css/coin.css');

class Coin extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <div className = "coin">
        <div className = "coinValue">25</div>
        <Noti />
      </div>
    );
  }
}

export default Coin;
