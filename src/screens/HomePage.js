import React, { Component } from 'react';
import Clock from '../components/Clock/Clock';
import MonsrudInfo from '../components/MonsrudInfo/MonsrudInfo';

import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="fronPageBannerContainer">
            <h1 className="mainTitle">Monsrud Open</h1>
            <Clock
              timeTillDate="03 07 2019, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            />
          </div>
        </div>
        <MonsrudInfo />
      </div>
    );
  }
}

export default HomePage;
