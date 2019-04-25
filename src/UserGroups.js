import React, { Component } from 'react';
import Groups from './Groups';
import Users from './Users';

class UserGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.assign = this.assign.bind(this);
    this.unassign = this.unassign.bind(this);
  };

  componentDidMount() {
    this.setState(
      this.props.groups.reduce((acc, currTeam) => {
      acc[currTeam] = []
      return acc
      }, {})
    )
  }

  assign(user) {
    this.setState(prevState => ({
      Team1: [...prevState.Team1, user]
    }))
  }

  unassign(user) {
    var newState = this.state.Team1;
    var index = newState.indexOf(user);
    if (index !== -1) {
      newState.splice(index, 1);
      this.setState({newState});
    }
  }

  render() {
    return (
      <div className="user-groups">
        <Groups groups={this.props.groups}/>
        <Users users={this.props.users}
               assignUser={this.assign}
               unassignUser={this.unassign}
               />
      </div>
    );
  }
}

export default UserGroups;
