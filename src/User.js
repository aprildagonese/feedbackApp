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
    this.props.assignUser(this.props.name);
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
      <span>
        {
          this.state.assigned
          ? <button onClick={this.unassignUser} className="user">
              {this.props.name} is assigned.
            </button>
          : <button onClick={this.assignUser} className="user">
              {this.props.name} is not assigned.
            </button>
         }
       </span>
    )
  }
}

export default User;
