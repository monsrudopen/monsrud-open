import React, { Component } from 'react';
import Clock from '../components/Clock/Clock';
import Posts from '../components/Posts/Posts';
import DonateButton from '../components/DonateButton/DonateButton';

import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="fronPageBannerContainer">
            <h1 className="mainTitle">Monsrud Open</h1>
            <h4>Monsrud Open 2020 skjer 15. august 2020</h4>
            <Clock
              timeTillDate="15 07 2020, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            />
            <DonateButton />
          </div>
        </div>
        <div className="componentElements">
          <Posts />
        </div>
      </div>
    );
  }
}

export default HomePage;
