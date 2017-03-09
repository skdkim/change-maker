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
    // deleted all noti1-4
  }

  handleChange(e){
    let coin = e.id;
    let smallState = {};
    
    const direction = e.className[0] === "t" ? "add" : "subtract";

    if (direction === "add"){
      smallState[coin] = this.state[coin] + 1;
      this.setState(smallState);
      // this.state[coin]++;
    } else {
      smallState[coin] = this.state[coin] - 1;

      this.setState(smallState);
      // this.state[coin]--;
    }
    let coins = this.getAllCoins();
    // debugger
    this.props.onChange(this.state);
  }

  getAllCoins(){
    let coins = [];
    for (let key in this.state){
      coins.push(this.state[key]);
    }
    return coins.sort((a,b) => a - b).reverse();
  }

  // countCoins(){
  //   let allCoins = this.getAllCoins();
  //   let result = {};
  //   let amt = this.props.centValue;
  //   while (allCoins.length > 0){
  //     let currentCoin = allCoins[0];
  //     if (amt - currentCoin >= 0){
  //       if (result[currentCoin]){
  //         result[currentCoin] += 1;
  //         amt -= currentCoin;
  //       } else{
  //         result[currentCoin] = 1;
  //         amt -= currentCoin;
  //       }
  //     } else {
  //       allCoins.shift();
  //     }
  //   }
  //   return result;
  // }

  // handleCoins(coins){
  //   this.setState({
  //     noti1 : coins[this.state.coin1] || 0,
  //     noti2 : coins[this.state.coin1] || 0,
  //     noti3 : coins[this.state.coin1] || 0,
  //     noti4 : coins[this.state.coin1] || 0
  //   });
  // }

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
