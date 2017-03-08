import React from 'react';

require('../css/notification.css');

class Noti extends React.Component{
  constructor(props){
    super();
  }

  render() {
    return (
      <div className = {"noti " + (this.props.pressed ? "" : "dpn")}>
        <span>1</span>
      </div>
    );
  }
}

export default Noti;
