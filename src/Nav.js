import React, { Component } from 'react';
import './Nav.css';
import logo from './feedback-icon.png';

class Nav extends Component {
  constructor() {
    super();
    // this.navMenu = React.createRef();
    this.state = {active: false}
  }

  navBarToggle = () => {
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <nav className="navbar">
        <span className="main-nav">
          <span className="logo-block">
            <img className="logo-image" src={logo}/>
            <span className="logo turing">turing</span>
            <span className="logo feedback">feedback</span>
          </span>
          <span className="navbar-toggle"
                id="js-navbar-toggle"
                onClick={this.navBarToggle}>
              <i className="fas fa-bars"></i>
          </span>
        </span>
        <ul className={"links " + (this.state.active ? "nav-show" : "nav-hidden")}>
          <li>
            <a href="#" className="nav-links">Home</a>
          </li>
          <li>
            <a href="#" className="nav-links">About</a>
          </li>
          <li>
            <a href="#" className="nav-links">Profile</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
