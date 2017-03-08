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
    // debugger
    this.props.onChange(e.target);
  }

  handleDownClick(e){
    e.preventDefault();
    this.setState({
      coin : this.state.coin -= 1
    });
  }

  render(){
    if(this.props.pressed){
      console.log("pressed!");
    }

    return(
      <div className="coin">
        <div className="coinValue">{this.props.value}</div>
        <Noti pressed={this.props.pressed}/>

        <div className="topOverlay" id={this.props.idx} onClick={(e) => this.handleUpClick(e)}/>
        <div className="bottomOverlay" onClick={(e) => this.handleDownClick(e)}/>
      </div>
    );
  }
}

export default Coin;
