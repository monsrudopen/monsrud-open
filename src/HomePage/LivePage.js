import React, { Component } from 'react';
import './LivePage.css';

import Challonge from '../components/Challonge/Challonge';
import Twitter from '../components/Twitter/Twitter';
import Vipps from '../components/Vipps/Vipps';

const LivePage = () => {
  return (
    <div className="LiveContainer">
      <Vipps />
      <div className="InfoHeader">
        <div className="TitleText">Monsrud Open 2022</div>
        <div className="LiveTitleWrapper">
          <div className="SubTitle">LIVE FEED</div>
          <div className="LiveCircle"></div>
        </div>
        <div className="Line" />
        {/*<div className="DonateButton">Doner </div>*/}
        <div className="LiveInfoWrapper">
          <div className="ChallongeWrapper">
            <Challonge />
          </div>
          <div className="TwitterContainer">
            <div className="logoContainer">
              <div className="donationTitle">Årets Mottaker</div>
              <div className="legerUtenGrenserContainer">
                <img
                  width="300"
                  alt="Redd Barna logo"
                  src={require('./../img/icons/ReddBarnaLogo.png')}
                />{' '}
              </div>
              {/* <div className="donationTitle">Årets Sponsor</div>
              <div className="kiwiContainer">
                <img
                  width="200"
                  alt="Kiwi logo"
                  src={require('./../img/icons/KIWILogo.png')}
                />{' '}
              </div> */}
            </div>
            <div className="mainTwitterContainer">
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivePage;
