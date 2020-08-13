import React, { Component } from 'react';
import Clock from '../components/Clock/Clock';
import FrontPagePosts from '../components/Posts/FrontPagePosts';
import MO2020promo169 from '../img/vid/MO2020promo169.mp4';
import { Link } from 'react-router-dom';

import './homePage.css';
import { news } from '../database/dataloader';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromId: 0,
      toId: 3
    };
    // This binding is necessary to make `this` work in the callback
    this.HandleLeft = this.HandleLeft.bind(this);
    this.HandleRight = this.HandleRight.bind(this);
  }

  HandleRight() {
    if (this.state.toId <= news.length) {
      this.setState(state => ({
        fromId: this.state.fromId + 1,
        toId: this.state.toId + 1
      }));
    }
  }
  HandleLeft() {
    if (this.state.fromId > 0) {
      this.setState(state => ({
        fromId: this.state.fromId - 1,
        toId: this.state.toId - 1
      }));
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="main">
          <div className="frontPageBannerContainer">
            <h4>15. august 2020</h4>
            <Clock
              timeTillDate="15 8 2020, 13:00"
              timeFormat="DD MM YYYY, HH:mm"
            />
            <div className="HomePageBox">
              <div className="videobox">
                <video className="video" controls>
                  <source src={MO2020promo169} type="video/mp4"></source>
                </video>
              </div>
              <div className="News">
                <div className="NewsTitle">Nyheter</div>
                <div className="NewsWrapper">
                  <button
                    style={{
                      visibility: this.state.fromId !== 0 ? 'visible' : 'hidden'
                    }}
                    className="ButtonSlider"
                    onClick={this.HandleLeft}
                  >
                    <i className="ArrowLeft"></i>
                  </button>

                  {news.slice(this.state.fromId, this.state.toId).map(n => (
                    <div className="NewsContainer">
                      <div className="NewsHeadline"> {n.title} </div>
                      <div className="NewsHeadlineDate">{n.date}</div>
                      <div className="NewsIndex">{n.text}</div>
                    </div>
                  ))}
                  <button
                    style={{
                      visibility:
                        this.state.toId !== news.length ? 'visible' : 'hidden'
                    }}
                    className="ButtonSlider"
                    onClick={this.HandleRight}
                  >
                    <i className="ArrowRight"></i>
                  </button>
                </div>

                <Link className="more-news-link" to="/News">
                  Se alle oppdateringer
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="componentElements">
          <div className="NavigationTitle">Snarveier</div>
          <FrontPagePosts />
        </div>
      </div>
    );
  }
}

export default HomePage;
