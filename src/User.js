import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
                  assigned: false,
                  group: ""
                  };
  }

  assignUser = () => {
    this.props.assignUser(this.props.name, this.props.selectedGroup);
    this.setState(prevState => ({
              assigned: !prevState.assigned
            }));
  }

  unassignUser = () => {
    this.props.unassignUser(this.props.name);
    this.setState(prevState => ({
              assigned: !prevState.assigned
            }));
  }

  render() {
    return (
      <span className="grouping-span">
        {
          this.state.assigned
          ? <button
              onClick={this.unassignUser}
              className="user grouping-button">
                Unassign {this.props.name}
            </button>
          : <button
              onClick={this.assignUser}
              className="user grouping-button"
              disabled={this.props.selectedGroup === null}>
                {this.props.name} is not assigned.
            </button>
         }
       </span>
    )
  }
}

export default User;
