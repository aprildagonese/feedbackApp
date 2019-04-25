import React, { Component } from 'react';
// import './Groups.css';

class Group extends Component {
  render() {
    return (
      <div className="group-card">
        {this.props.name}
      </div>
    );
  }
}

export default Group;
