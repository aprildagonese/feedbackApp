import React, { Component } from 'react';
import Groups from './Groups';
import Users from './Users';
import Nav from './Nav';
import SaveButton from './SaveButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [ { "id":1, "name": "Team1", "members": ["#{user1.id}", "#{user2.id}"] },
                { "id":2, "name": "Team2", "members": ["#{user3.id}", "#{user4.id}"] }
              ],
      users: [ { "id":1, "name": "Student1"},
               { "id":2, "name": "Student2"},
               { "id":3, "name": "Student3"},
               { "id":4, "name": "Student4"},
               { "id":5, "name": "Student5"},
               { "id":6, "name": "Student6"},
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
            <Groups groups={this.state.groups}/>
            <Users users={this.state.users}/>
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
