import React, { Component } from 'react';
// import UserGroups from './UserGroups';
import Groups from './Groups';
import Users from './Users';
import Nav from './Nav';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGroup: null,
      groupNames: [ "Team1", "Team2", "Team3"
              ],
      users: [ { "id":1, "name": "Student1"},
               { "id":2, "name": "Student2"},
               { "id":3, "name": "Student3"},
               { "id":4, "name": "Student4"},
               { "id":5, "name": "Student5"},
               { "id":6, "name": "Student6"}
              ]
    }
    this.assign = this.assign.bind(this);
    this.unassign = this.unassign.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
    this.deselectGroup = this.deselectGroup.bind(this);
  }

  // componentDidMount() {
  //   let teams =
  //     this.state.groupNames.reduce((acc, currTeam) => {
  //       acc[currTeam] = []
  //       return acc
  //     }, {})
  //   this.setState({groups: teams})
  // }
  //
  componentDidMount() {
    this.setState(
      this.state.groupNames.reduce((acc, currTeam) => {
      acc[currTeam] = []
      return acc
      }, {})
    )
  }

  assign(user, team) {
    let newState = {};
    const prevState = this.state[team];
    newState[team] = [...prevState, user];
    this.setState(newState);
  }
  // assign(user, team) {
  //   let newTeamState = {};
  //   let prevGroupsState = this.state.groups;
  //   const prevTeamState = this.state.groups[team];
  //   newTeamState[team] = [...prevTeamState, user];
  //   let newGroupsState = [...prevGroupsState, newTeamState]
  //   this.setState(newGroupsState);
  // }
  //
  // unassign(user) {
  //   var newState = this.state.Team1;
  //   var index = newState.indexOf(user);
  //   if (index !== -1) {
  //     newState.splice(index, 1);
  //     this.setState({newState});
  //   }
  // }

  unassign(user) {
    this.state.groupNames.forEach(group => {
      if (this.state[group].includes(user)) {
        var newState = this.state[group];
        var index = newState.indexOf(user);
        if (index !== -1) {
          newState.splice(index, 1);
          this.setState({newState});
        }
      }
    })
  }

  selectGroup(group) {
    this.setState({ selectedGroup: group });
  }

  deselectGroup() {
    this.setState({ selectedGroup: null });
  }

  saveAssignments() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <body>
          <div className="grouping-pane">
            <Groups groups={this.state.groupNames}
                    selectGroup={this.selectGroup}
                    deselectGroup={this.deselectGroup}
                    selectedGroup={this.state.selectedGroup}
                    />
            <Users users={this.state.users}
                   assignUser={this.assign}
                   unassignUser={this.unassign}
                   selectedGroup={this.state.selectedGroup}
                   />

          </div>
          <fragment className="button-pane">
            <Button type="save reusable-button"
                    onClick={this.saveAssignments}
                    buttonText="Save Assignments"/>
            <Button type="next reusable-button"
                    buttonText="Write Survey Questions"/>
          </fragment>
          { this.state.selectedGroup === null &&
            <span className="notice">Please select a group in order to assign users</span>
          }
        </body>
      </div>
    );
  }
}

export default App;
