import React from 'react';

require('../css/notification.css');

class Noti extends React.Component{
  constructor(props){
    super();
    this.state = {
      value : 3
    };
  }

  render() {
    return (
      <div className={"noti " + ((this.props.pressed && this.state.value !== 0) ? "" : "dpn")}>
        <span>{this.props.value || 0}</span>
      </div>
    );
  }
}

export default Noti;
