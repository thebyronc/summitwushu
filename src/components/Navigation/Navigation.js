import React, { Component } from 'react';
import './Navigation.css';
import logo from '../../assets/images/summit_banner.png';

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation container">
      <img src={logo} className="nav-logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">Coaches</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Media</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
