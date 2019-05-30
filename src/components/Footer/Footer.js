import React, { Component } from 'react';
import './Footer.css';
import instaBW from '../src/img/icons/instaBW.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <p>Monsrud Open &copy; {new Date().getFullYear()}</p>
        <div className="box">
          <div>
              <a href="mailto:hello@monsrudopen.com" target="_blank"><img className="footer-image" src="https://cdn4.iconfinder.com/data/icons/basic-ui-elements/700/08_mail-512.png" width="40"></img></a>
          </div>
          <div>
                <a href="www.twitter.com/monsrudopen" target="_blank"><img className="footer-image" src="https://image.flaticon.com/icons/svg/54/54300.svg" width="40"></img></a>
          </div>
          <div>
              <a href="www.instagram.com/monsrudopen" target="_blank"><img className="footer-image" src="https://ui-ex.com/images250_/instagram-transparent-circular-4.png" width="40"></img></a>
          </div>
          <div>
          <img className="footer-image" alt="InstaBW" src="instaBW" width="40"></img>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
