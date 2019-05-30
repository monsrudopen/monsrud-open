import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="box">
          <div className="footer-left">
            <p>Monsrud Open &copy; {new Date().getFullYear()}</p>
            <p>Ruglandveien 107, 1359 Eiksmarka</p>
            <p>Org.nr. 918 707 611</p>
            <p>vipps: 109417</p>
          </div>
          <div className="footer-right">
            <a href="mailto:hello@monsrudopen.com">Kontakt oss</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
