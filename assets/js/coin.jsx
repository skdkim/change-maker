import React from 'react';
import Noti from './notification';

require('../css/coin.css');

class Coin extends React.Component{
  constructor(props){
    super();
    this.state = {
      coin : props.value
    };
  }

  handleUpClick(e){
    e.preventDefault();
    if (this.state.coin !== 1){
      this.setState({
        coin : this.state.coin += 1
      });
    }
  }

  handleDownClick(e){
    e.preventDefault();
    if (this.state.coin !== 1){
      this.setState({
        coin : this.state.coin -= 1
      });
    }
  }

  render(){

    return(
      <div className="coin">
        <div className="coinValue">{this.state.coin}</div>
        <Noti pressed={this.props.pressed}/>

        <div className="topOverlay" onClick={(e) => this.handleUpClick(e)}/>
        <div className="bottomOverlay" onClick={(e) => this.handleDownClick(e)}/>
      </div>
    );
  }
}

export default Coin;
