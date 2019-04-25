import React, { Component } from 'react';
import Groups from './Groups';
// import Group from './Group';
import Users from './Users';
// import User from './User';

class UserGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.setState(
      this.props.groups.reduce((acc, currTeam) => {
      acc[currTeam] = []
      return acc
      }, {})
    )
  }

  handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
    }

  render() {
    return (
      <div className="user-groups">
        <Groups groups={this.props.groups}/>
        <Users users={this.props.users}/>
      </div>
    );
  }
}

export default UserGroups;