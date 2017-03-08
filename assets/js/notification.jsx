import React from 'react';

require('../css/notification.css');

class Noti extends React.Component{
  constructor(props){
    super();
    this.state = {
      value : 1
    };
  }

  render() {
    return (
      <div className={"noti " + ((this.props.pressed && this.state.value !== 0) ? "" : "dpn")}>
        <span>{this.state.value}</span>
      </div>
    );
  }
}

export default Noti;
