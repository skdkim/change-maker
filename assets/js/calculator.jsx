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
      allCoins : [25,10,5,1]
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
    this.setState({
      calcValue : this.state.centValue,
      pressed : true
    });
  }

  handleToggle(e){

    // this.setState({
    //   allCoins : e
    // });
    // debugger
  }

  countCoins(){
    let allCoins = this.getAllCoins();
    let result = {};
    let amt = this.props.centValue;
    while (allCoins.length > 0){
      let currentCoin = allCoins[0];
      if (amt - currentCoin >= 0){
        if (result[currentCoin]){
          result[currentCoin] += 1;
          amt -= currentCoin;
        } else{
          result[currentCoin] = 1;
          amt -= currentCoin;
        }
      } else {
        allCoins.shift();
      }
    }
    return result;
  }

  getAllCoins(){
    let coins = [];
    for (let key in this.state){
      if (key[0] === "c"){
        coins.push(this.state[key]);
      }
    }
    return coins.sort((a,b) => a - b).reverse();
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
