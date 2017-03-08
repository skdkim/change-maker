import React from 'react';
import Noti from './notification';

require('../css/coin.css');

class Coin extends React.Component{
  constructor(props){
    super();

  }

  render(){

    return(
      <div className = "coin">
        <div className={"coinValue" + (this.props.value >= 10 ? "" : " sv")}>{this.props.value}</div>
        <Noti pressed={this.props.pressed}/>
      </div>
    );
  }
}

export default Coin;
