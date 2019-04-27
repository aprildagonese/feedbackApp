import React, { Component } from 'react';
// import './Groups.css';

class Button extends Component {
  render() {
    return (
      <button className={this.props.type}
              onClick={this.props.onClick}>
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
