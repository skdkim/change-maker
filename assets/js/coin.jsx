import React from 'react';
import Noti from './notification';

class Coin extends React.Component{
  constructor(props){
    super();
  }

  render(){
    return(
      <div>
        <div>Coin!</div>
        <Noti />
      </div>
    );
  }
}

export default Coin;
