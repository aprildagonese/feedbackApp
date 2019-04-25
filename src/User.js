import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
                  assigned: false,
                  group: ""
                  };
  }

  handleChange = () => {
    this.props.assignUser(this.props.name)
  }

  render() {
    return (
      <span>
        {
          this.props.assigned
          ? <button onClick={this.handleChange} className="user">
              {this.props.name} is assigned.
            </button>
          : <button onClick={this.handleChange} className="user">
              {this.props.name} is not assigned.
            </button>
         }
       </span>
    )
  }
}

export default User;
