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
              <div>
                <a href="mailto:hello@monsrudopen.com" target="_blank"><img className="footer-image" src="http://chittagongit.com/download/96404" width="40"></img></a>
              </div>
              <div>
                <a href="www.twitter.com/monsrudopen" target="_blank"><img className="footer-image" src="https://image.flaticon.com/icons/svg/54/54300.svg" width="40"></img></a>
              </div>
              <div>
                <a href="www.instagram.com/monsrudopen" target="_blank"><img className="footer-image" src="https://ui-ex.com/images250_/instagram-transparent-circular-4.png" width="40"></img></a>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
