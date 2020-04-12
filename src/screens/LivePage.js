import React, { Component } from 'react';
import './LivePage.css';
import Challonge from '../components/Challonge/Challonge';
import Twitter from '../components/Twitter/Twitter';

class LivePage extends Component {
  render() {
    return (
      <div className="LiveContainer">
        <div className="InfoHeader">
          <div className="TitleText">Monsrud Open 2020</div>
          <div className="SubTitle">LIVE FEED</div>
          <div className="Line" />
          <div className="DonateButton">Doner til Lånekassen</div>
          <Challonge />
        </div>
        <div className="SocialMediaContainer">
          <div className="TwitterContainer">
            <Twitter />
          </div>
          <div className="InstagramContainer" />
        </div>
      </div>
    );
  }
}

export default LivePage;
