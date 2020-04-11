import React, { Component } from 'react';
import Clock from '../components/Clock/Clock';
import FrontPagePosts from '../components/Posts/FrontPagePosts';
import MO2020promov2 from '../img/vid/MO2020promov2.mp4';

import './homePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="fronPageBannerContainer">
            <h4>15. august 2020</h4>
            <Clock
              timeTillDate="15 07 2020, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            />
            <div className="videobox">
              <video width="75%" height="auto" controls>
                <source src={MO2020promov2} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>
        <div className="componentElements">
          <FrontPagePosts />
        </div>
      </div>
    );
  }
}

export default HomePage;
