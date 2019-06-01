import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const nav = document.querySelector('nav');
    const header = document.querySelector('#header');
    this.setState({
      navHeight: nav.offsetHeight,
      headerHeight: header.offsetHeight
    });
    window.addEventListener('scroll', this.handleScroll);
    console.log(nav.offsetHeight);
    console.log(header.offsetHeight);
  }

  render() {
    return (
      <div id="header" className="header">
        <nav
          className={
            this.state.scroll > this.state.headerHeight - this.state.navHeight
              ? 'fixed-nav'
              : ''
          }
        >
          <ul>
            <li>
              <Link to="/" rel="noopener noreferrer">
                Monsrud Open
              </Link>
            </li>
            <li>
              <Link to="/Rank" rel="noopener noreferrer">
                Ranking
              </Link>
            </li>
            <li>
              <Link to="/Donations" rel="noopener noreferrer">
                Tidligere donasjoner
              </Link>
            </li>
            <li>
              <Link to="/About" rel="noopener noreferrer">
                Om oss
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
