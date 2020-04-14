import React, { Component } from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterTitle">Monsrud Open</div>
        <div className="FooterContent">
          <div className="LeftWrapper">
            <div className="LinkWrapper">
              <div className="FooterContentTitle">Snarveier</div>
              <div className="FooterLink">
                <Link to="/" rel="noopener noreferrer">
                  <div className="LinkText">Forside</div>
                </Link>
              </div>
              <div className="FooterLink">
                <Link to="/Competitions" rel="noopener noreferrer">
                  <div className="LinkText">Turneringer</div>
                </Link>
              </div>
              <div className="FooterLink">
                <Link to="/About" rel="noopener noreferrer">
                  <div className="LinkText">Om Oss</div>
                </Link>
              </div>
            </div>
            <div className="LinkWrapper">
              <div className="FooterContentTitle">Sosialt</div>
              <div className="socialMediaContent">
                <div className="FooterLink">
                  <a
                    href="https://www.instagram.com/monsrudopen"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </div>
                <div className="FooterLink">
                  <a
                    href="https://www.twitter.com/monsrudopen"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="FooterLogo">
            <img
              width="70"
              height="70"
              alt="Monsrud Open Logo"
              src={require('./../../img/icons/MonsrudLogo.png')}
            />{' '}
          </div>

          <div className="OrgInfo">
            <div className="FooterContentTitle">Kontakt</div>
            <div className="OrgInfoContainer">
              <div className="OrgInfoContent">
                <div className="listTitle">Vipps nr:</div>
                <div className="FooterLink">109417</div>
              </div>
              <div className="OrgInfoContent">
                <div className="listTitle">Org.nr </div>
                <div className="FooterLink"> 918 707 611</div>
              </div>

              <div className="OrgInfoContent">
                <div className="listTitle">Mail:</div>
                <div className="FooterLink">
                  <a
                    href="mailto:hello@monsrudopen.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    hello@monsrudopen.com
                  </a>
                </div>
              </div>
              <div className="OrgInfoContent address">
                <div className="listTitle">Adresse: </div>
                <div className="FooterLink address">
                  <a
                    href="https://goo.gl/maps/udc6qp4q9tMbrJYB7"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ruglandveien 107, 1359 Eiksmarka
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tradeMark">
          <p>Monsrud Open &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    );
  }
}
export default Footer;
