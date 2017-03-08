import React from 'react';
import Coin from './coin';
import Overlay from './overlay';

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

  handleChange(e){
    const coin = e.id;
    this.setState({
      coin : this.state[coin] += 1
    });
    console.log("changed!");
  }

  render(){
    return(
      <div className="coinTray">
        <Coin idx={'coin1'} value={this.state.coin1} pressed={this.props.pressed} allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin2'} value={this.state.coin2} pressed={this.props.pressed} allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin3'} value={this.state.coin3} pressed={this.props.pressed} allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin4'} value={this.state.coin4} pressed={this.props.pressed} allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

      </div>
    );
  }
}

export default Coins;
