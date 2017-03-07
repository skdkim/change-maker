import React from 'react';

require('../css/calculator.css');

class Calculator extends React.Component {
  render(){
    return(
      <div className="calc">
        <h1 className="title">COIN COUNTER</h1>
        <div className="coin">coins go here as a component!</div>
        <div className="bottom">
          <input placeholder=""></input>
          <button>CALCULATE</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
