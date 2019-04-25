import React, { Component } from 'react';
import UserGroups from './UserGroups';
// import Groups from './Groups';
// import Users from './Users';
import Nav from './Nav';
import SaveButton from './SaveButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [ "Team1", "Team2", "Team3"
              ],
      users: [ { "id":1, "name": "Student1"},
               { "id":2, "name": "Student2"},
               { "id":3, "name": "Student3"},
               { "id":4, "name": "Student4"},
               { "id":5, "name": "Student5"},
               { "id":6, "name": "Student6"}
              ]
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <body>
          <div className="group-pane">
            <UserGroups groups={this.state.groups} users={this.state.users}/>
          </div>
          <div className="button-pane">
            <SaveButton />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
