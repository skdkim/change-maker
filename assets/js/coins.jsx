import React from 'react';

class Coins extends React.Component {
  constructor(props){
    super();
  }
  render(){
    return(
      <div>
        <h1>{this.props.centValue}</h1>
        <h1>{this.props.centValue}</h1>
        <h1>{this.props.centValue}</h1>
        <h1>{this.props.centValue}</h1>
      </div>
    );
  }
}

export default Coins;
