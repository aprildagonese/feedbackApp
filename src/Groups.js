import React, { Component } from 'react';
import GroupCard from './GroupCard';
// import './Groups.css';

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        { this.props.groups.map(group => <GroupCard key={group.id}/>) }
      </div>
    );
  }
}

export default Groups;
