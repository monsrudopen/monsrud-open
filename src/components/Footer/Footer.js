import React, { Component } from 'react';
import './Footer.css';
import InstaBW from '../../img/icons/InstaBW.png';
import InstaC from '../../img/icons/InstaC.png';
import MailBW from '../../img/icons/MailBW.png';
import MailC from '../../img/icons/MailC.png';
import TwitterBW from '../../img/icons/TwitterBW.png';
import TwitterC from '../../img/icons/TwitterC.png';
import HoverImage from 'react-hover-image';

class Footer extends Component {
  render() {
    return (
      <div>
        <p>Monsrud Open &copy; {new Date().getFullYear()}</p>
        <div className="box">
          <div>
            <a href="mailto:hello@monsrudopen.com" target="_blank">
            <HoverImage src={MailBW} hoverSrc={MailC} style={{width: 40}}>
            </HoverImage>
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com/monsrudopen" target="_blank">
            <HoverImage src={TwitterBW} hoverSrc={TwitterC} style={{width: 40}}>
            </HoverImage>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/monsrudopen" target="_blank">
              <HoverImage className="image" src={InstaBW} hoverSrc={InstaC} style={{width: 40}}>
              </HoverImage>
            </a>
          </div>
          </div>
            <a href="https://goo.gl/maps/udc6qp4q9tMbrJYB7" target="_blank"><p>Ruglandveien 107, 1359 Eiksmarka</p></a>
            <p>Org.nr.: 918 707 611</p>
            <p>Vipps: 109417</p>
        </div>
    );
  }
}
export default Footer;
