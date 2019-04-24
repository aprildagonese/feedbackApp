import React, { Component } from 'react';
// import './Users.css';

// class User extends Component {
//   render() {
//     return (
//       <div className="user">
//         User
//       </div>
//     );
//   }
// }
//

class User extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {assigned: false};
  }

  handleChange(e) {
    this.setState({assigned: true});
  }

  render() {
    const assignment = this.state.assigned;
    const name = this.state.name;
    if (assignment) {
      return (
        <div className="user">
          User is assigned.
        </div>
      )
    }
    return (
      <div className="user">
        User is not assigned.
      </div>
    )
  }
}

export default User;
