import React, { Component } from 'react';
import Group from './Group';
// import './Groups.css';

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        { this.props.groups.map(group => <Group name={group} key={group}/>) }
      </div>
    );
  }
}

export default Groups;
