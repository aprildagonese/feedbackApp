import React, { Component } from 'react';
// import './Groups.css';

class Group extends Component {
  selectGroup = () => {
    this.props.selectGroup(this.props.name);
  }

  deselectGroup = () => {
    this.props.deselectGroup();
  }

  render() {
    return (
      <span className="grouping-span">
        {
          this.props.selectedGroup === this.props.name
          ? <button
              onClick={this.deselectGroup}
              className="group selected-group grouping-button">
                {this.props.name}
            </button>
          : <button
              onClick={this.selectGroup}
              className="group grouping-button">
                {this.props.name}
            </button>
        }
      </span>
    );
  }
}

export default Group;
