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
      allNoti : {}
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
    // debugger

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
    // debugger
    for (let key in this.state.allCoins){
      coins.push(this.state.allCoins[key]);
    }
    return coins.sort((a,b) => a - b).reverse();
  }

  countCoins(){
    // debugger
    let allCoins = this.getAllCoins();
    // debugger

    let result = {};
    let cents = this.state.centValue;
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
    // debugger
    this.setState({
      allNoti : result
    });
  }

  render(){
    return(
      <form className="calc" onSubmit={(e) => this.handleSubmit(e)}>
        <h1 className="title">COIN COUNTER</h1>
        <Coins allNoti={this.state.allNoti} centValue={this.state.calcValue} pressed={this.state.pressed} onChange={(e) => this.handleToggle(e)}/>
        <div className="bottom">
          <input value={this.state.centValue} onChange={(e) => this.handleInput(e)}></input>
          <button>CALCULATE</button>
        </div>
      </form>
    );
  }
}

export default Calculator;
