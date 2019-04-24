import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {assigned: false};
  }

  handleChange = () => {
    if (this.state.assigned) {
      this.setState({assigned:false})
    } else {
      this.setState({assigned:true})
    };
  }

  render() {
    if (this.state.assigned) {
      return (
        <button onClick={this.handleChange} className="user">
          User is assigned.
        </button>
      )
    } else {
      return (
        <button onClick={this.handleChange} className="user">
          User is not assigned.
        </button>
      )
    }
  }
}

export default User;
