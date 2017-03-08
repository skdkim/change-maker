import React from 'react';
import Coin from './coin';

require('../css/coins.css');

class Coins extends React.Component {
  constructor(props){
    super();
    this.state = {
      coin1 : 25,
      coin2 : 10,
      coin3 : 5,
      coin4 : 1
    };
  }
  render(){
    return(
      <div className = "coinTray">
        <Coin value={this.state.coin1}/>
        <Coin value={this.state.coin2}/>
        <Coin value={this.state.coin3}/>
        <Coin value={this.state.coin4}/>
      </div>
    );
  }
}

export default Coins;
