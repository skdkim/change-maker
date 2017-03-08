import React from 'react';
import Coins from './coins';

require('../css/calculator.css');

class Calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      centValue : "",
      calcValue : "",
      pressed : false
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

  render(){
    return(
      <div className="calc">
        <h1 className="title">COIN COUNTER</h1>
        <Coins centValue={this.state.calcValue} pressed={this.state.pressed}/>
        <div className="bottom">
          <input value={this.state.centValue} onChange={(e) => this.handleInput(e)}></input>
          <button onClick={(e) => this.handleSubmit(e)}>CALCULATE</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
