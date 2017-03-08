import React from 'react';
import Noti from './notification';

require('../css/coin.css');

class Coin extends React.Component{
  constructor(props){
    super();

  }

  handleChange(e){
    e.preventDefault();
    console.log('hello');
  }

  render(){

    return(
      <div className = "coin">
        <div onClick={(e) => this.handleChange(e)} className="coinValue">{this.props.value}</div>
        <Noti pressed={this.props.pressed}/>
      </div>
    );
  }
}

export default Coin;
