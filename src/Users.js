import React, { Component } from 'react';
import User from './User';
// import './Users.css';

class Users extends Component {
  render() {
    return (
      <div className="users">
        { this.props.users.map(user =>
          <User name={user.name}
                key={user.id}
                assignUser={this.props.assignUser}
                unassignUser={this.props.unassignUser}
                />)}
      </div>
    );
  }
}

export default Users;
