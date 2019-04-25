import React, { Component } from 'react';

class User extends Component {
  constructor() {
    super();
    this.state = {
                  assigned: false,
                  group: ""
                  };
  }

  toggleAssigned = () => {
    this.setState({assigned: !this.state.assigned})
  }

  render() {
    return (
      <span>
        {
          this.state.assigned
          ? <button onClick={this.toggleAssigned} className="user">
              {this.props.name} is assigned.
            </button>
          : <button onClick={this.toggleAssigned} className="user">
              {this.props.name} is not assigned.
            </button>
         }
       </span>
    )
  }
}

export default User;
