import React, { Component } from 'react';
import Group from './Group';
// import './Groups.css';

class Groups extends Component {
  render() {
    return (
      <div className="groups">
        { this.props.groups.map(group =>
          <Group name={group} key={group}
                 selectGroup={this.props.selectGroup}
                 deselectGroup={this.props.deselectGroup}
                 selectedGroup={this.props.selectedGroup}
                 />) }
      </div>
    );
  }
}

export default Groups;
