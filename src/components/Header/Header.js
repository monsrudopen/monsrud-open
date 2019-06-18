import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleMenu() {}

  render() {
    return (
      <div id="header" className="header">
        <div className="headerContainer">
          <div className="monsrudLogo">
            <img
              width="60"
              height="60"
              src={require('./../../img/icons/MonsrudLogo.png')}
            />{' '}
          </div>
          <button className="hamburgerBar" onClick={this.toggleMenu}>
            Menu
          </button>
          <div className="menuList">
            <div className="menuLink">
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/"
                rel="noopener noreferrer"
              >
                <h6>Monsrud Open</h6>
              </Link>
            </div>
            <div className="menuLink">
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/Rank"
                rel="noopener noreferrer"
              >
                <h6>Ranking</h6>
              </Link>
            </div>
            <div className="menuLink">
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/Donations"
                rel="noopener noreferrer"
              >
                <h6>Tidligere donasjoner</h6>
              </Link>
            </div>
            <div className="menuLink">
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/About"
                rel="noopener noreferrer"
              >
                <h6>Om oss</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
