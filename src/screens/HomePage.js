import React, { Component } from 'react';
// import Clock from '../components/Clock/Clock';
import Posts from '../components/Posts/Posts';

import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="fronPageBannerContainer">
            <h1 className="mainTitle">Monsrud Open</h1>
            <h4>Monsrud Open 2020 er under planlegging</h4>
            <p>(Denne siden er under utvikling)</p>
            {/* <Clock
              timeTillDate="03 07 2019, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            /> */}
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
