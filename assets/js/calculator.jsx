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
      allNoti : {},
      errors : []
    };
  }

  handleInput(e){
    e.preventDefault();
    this.setState({
      centValue : e.target.value,
      pressed : false,
      errors : []
    });
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({
      calcValue : this.state.centValue,
      pressed : true,
      errors : []
    });

    let changeArr = this.countCoins();

    this.convertChange(changeArr);
  }

  handleToggle(e){
    this.setState({
      allCoins : e,
      errors : [],
      allNoti : {}
    });
  }

  getAllCoins(){
    let coins = [];
    let dupArray = [];

    for (let key in this.state.allCoins){
      if (this.state.allCoins[key] < 1){
        this.setState({
          errors : [].concat(["Values must be greater than 1"]),
          allNoti : {}
        });
        return;
      }
      if (dupArray[this.state.allCoins[key]]){
        this.setState({
          errors : [].concat(["No duplicate values"]),
          allNoti : {}
        });
        return;
      }
      dupArray[this.state.allCoins[key]] = true;
      coins.push(this.state.allCoins[key]);
    }
    if (coins.indexOf(1) === -1){
      this.setState({
        errors : [].concat(["Coin of value 1 must be present"]),
        allNoti : {}
      });
      return;
    }

    return coins.sort((a,b) => a - b).reverse();
  }

  countCoins(allCoins = this.getAllCoins(), cents = this.state.centValue){
    if (this.state.errors.length > 0){
      return;
    }

    let result = [];
    let bestChange;

    if (allCoins.length === 0 || cents === 0){
      return result;
    }

    for (let i = 0; i < allCoins.length; i++){
      let coin = allCoins[i];

      if (coin > cents){
        continue;
      }

      let remainder =  cents - coin;
      let bestRemainder = this.countCoins(allCoins.slice(i), remainder);

      if (!bestRemainder){
        continue;
      }

      let change = [coin].concat(bestRemainder);

      if (!bestChange || change.length < bestChange.length){
        bestChange = change;
      }
    }

    return bestChange;
  }

  convertChange(change) {
    let coinObj = {};
    for (let j = 0; j < change.length; j++){
      if (coinObj[change[j]]){
        coinObj[change[j]] += 1;
      } else {
        coinObj[change[j]] = 1;
      }
    }
    
    this.setState({
      allNoti : coinObj
    });
  }

  render(){
    return(
      <form className="calc" onSubmit={(e) => this.handleSubmit(e)}>
        <h1 className="title">COIN COUNTER</h1>
        <Coins allNoti={this.state.allNoti} centValue={this.state.calcValue} pressed={this.state.pressed} onChange={(e) => this.handleToggle(e)}/>
        <ul className="errors">
          {this.state.errors.map((error, idx) => (
              <li key={idx}>
                {error}
              </li>
            ))
          }
        </ul>
        <div className="bottom">
          <input value={this.state.centValue} onChange={(e) => this.handleInput(e)}></input>
          <button>CALCULATE</button>
        </div>
      </form>
    );
  }
}

export default Calculator;
