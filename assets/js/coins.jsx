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
        <Coin value={this.state.coin1} pressed={this.props.pressed}/>
        <Coin value={this.state.coin2} pressed={this.props.pressed}/>
        <Coin value={this.state.coin3} pressed={this.props.pressed}/>
        <Coin value={this.state.coin4} pressed={this.props.pressed}/>
      </div>
    );
  }
}

export default Coins;
