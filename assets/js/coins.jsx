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
    const direction = e.className[0] === "t" ? "add" : "subtract";
    
    // to-do

    // Either throw and error message when calculate is clicked or put in
    // that logic in here right now
    // there needs to be a 1 and there can't be duplicate coins

    // calculating coin algorithm should be in here
    // it should decide how much of each coin is needed and send that down
    // into props into coin and from coin to notification

    if (direction === "add"){
      this.setState({
        coin : this.state[coin] += 1
      });
    } else {
      this.setState({
        coin : this.state[coin] -= 1
      });
    }
  }

  render(){
    return(
      <div className="coinTray">
        <Coin idx={'coin1'} value={this.state.coin1} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin2'} value={this.state.coin2} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin3'} value={this.state.coin3} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}/>

        <Coin idx={'coin4'} value={this.state.coin4} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}/>
      </div>
    );
  }
}

export default Coins;
