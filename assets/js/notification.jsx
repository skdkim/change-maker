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
      <div className={"noti " + ((this.props.pressed && this.props.value) ? "" : "dpn")}>
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Noti;
