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

  handleChange(e){
    let coin = e.id;
    let smallState = {};

    const direction = e.className[0] === "t" ? "add" : "subtract";

    if (direction === "add"){
      this.state[coin]++;
      smallState[coin] = this.state[coin];
      this.setState(smallState);
    } else {
      this.state[coin]--;
      smallState[coin] = this.state[coin];

      this.setState(smallState);
    }
    this.props.onChange(this.state);
  }

  render(){
    return(
      <div className="coinTray">
        <Coin idx={'coin1'}  value={this.state.coin1} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}
          notiValue={this.props.allNoti[this.state.coin1]}/>

        <Coin idx={'coin2'} value={this.state.coin2} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}
          notiValue={this.props.allNoti[this.state.coin2]}/>

        <Coin idx={'coin3'} value={this.state.coin3} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}
          notiValue={this.props.allNoti[this.state.coin3]}/>

        <Coin idx={'coin4'} value={this.state.coin4} pressed={this.props.pressed}
          allCoins={this.state} onChange={(e) => this.handleChange(e)}
          notiValue={this.props.allNoti[this.state.coin4]}/>
      </div>
    );
  }
}

export default Coins;
