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

    /*
      IMPROVEMENT:
      Record in the memo the length of the change array.
      Every future attempt to create an amount of coins will continue to
      the point where it is equal to the last cents

      ie [25,10,7,1]

      @ first loop before the 7 is not considered
      memo = {
        bestLength: 5,
        10 : [10,1,1,1,1],
      }

      @ the moment the 7 is considered the memo updates
      memo = {
        bestLength: 2,
        10 : [10,1,1,1,1],
        7 : [7,7]
      }

      We the loop is not done yet because it needs to go through the 1's
      aka it needs to give us {1 : [1,1,1,,1...]} x14

      memo = {
        bestLength: 2,
        10 : [10,1,1,1,1],
        7 : [7,7]
      }

      during the run of the 1's once the coins array becomes larger than 1
      we will kill the execution

      We wouldn't be able to know how long a change array is because we don't
      know that length until it bubbles up, but we can count the recursive calls

      We are not basing this improvement on assumptions that one coins
      is better than 2 and one is the best we can do because that idea
      is not scaleable. This improvement is based on the last best amount
      of coins which can now be used in all cases.
    */
    // return coins.sort((a,b) => a - b).reverse();
    return coins;

  }

  countCoins(memo = {}, allCoins = this.getAllCoins(), cents = this.state.centValue){
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
      let newArr = allCoins.slice(i);
      let id = newArr[0] + "-" + remainder;
      let bestRemainder;

      if (memo[id]){
        bestRemainder = memo[id];
      } else {
        bestRemainder = this.countCoins(memo, newArr, remainder);
        memo[id] = bestRemainder;
      }

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
