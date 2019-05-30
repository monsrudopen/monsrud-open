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
    this.setState({scroll: window.scrollY});
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({navHeight: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="header">
          <nav className={this.state.scroll > this.state.navHeight ? "fixed-nav" : ""}>
            <ul>
              <li>
                <Link to="/" rel="noopener noreferrer">Monsrud Open</Link>
              </li>
              <li>
                <Link to="/Rank" rel="noopener noreferrer">Rank</Link>
              </li>
              <li>
                <Link to="/About" rel="noopener noreferrer">About</Link>
              </li>
              <li>
                <Link to="/Donations" rel="noopener noreferrer">Donations</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
}

export default Header;
