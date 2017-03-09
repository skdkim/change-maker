import React from 'react';
import Coins from './coins';

require('../css/calculator.css');

class Calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      centValue : "",
      calcValue : "",
      pressed : false,
      allCoins : {
        coin1 : 25,
        coin2 : 10,
        coin3 : 5,
        coin4 : 1
      },
      allNoti : {
        noti1 : 0,
        noti2 : 0,
        noti3 : 0,
        noti4 : 0,
      }
    };
  }

  handleInput(e){
    e.preventDefault();
    this.setState({
      centValue : e.target.value,
      pressed : false
    });
  }

  handleSubmit(e){
    e.preventDefault();
    debugger

    this.setState({
      calcValue : this.state.centValue,
      pressed : true
    });

    let newNoti = this.countCoins();
  }

  handleToggle(e){
    this.setState({
      allCoins : e
    });
  }

  getAllCoins(){
    let coins = [];
    debugger
    for (let key in this.state.allCoins){
      coins.push(this.state.allCoins[key]);
    }
    return coins.sort((a,b) => a - b).reverse();
  }

  countCoins(){
    debugger
    let allCoins = this.getAllCoins();
    debugger

    let result = {};
    let cents = 18;
    // let amt = this.props.centValue;
    while (allCoins.length > 0){
      let currentCoin = allCoins[0];
      if (cents - currentCoin >= 0){
        if (result[currentCoin]){
          result[currentCoin] += 1;
          cents -= currentCoin;
        } else{
          result[currentCoin] = 1;
          cents -= currentCoin;
        }
      } else {
        allCoins.shift();
      }
    }
    debugger
    return result;
  }

  render(){
    // debugger
    return(
      <div className="calc">
        <h1 className="title">COIN COUNTER</h1>
        <Coins centValue={this.state.calcValue} pressed={this.state.pressed} onChange={(e) => this.handleToggle(e)}/>
        <div className="bottom">
          <input value={this.state.centValue} onChange={(e) => this.handleInput(e)}></input>
          <button onClick={(e) => this.handleSubmit(e)}>CALCULATE</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
