import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {
  render() {
    return (
      <div className="header">
      <Link to="/Rank" rel="noopener noreferrer">Rank</Link>
      <Link to="/About" rel="noopener noreferrer">About</Link>

      </div>
    );
  }
}

export default Header;
