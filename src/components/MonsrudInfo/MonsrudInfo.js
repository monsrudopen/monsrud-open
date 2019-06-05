import React, { Component } from 'react';
import './monsrudInfo.css';

class MonsrudInfo extends Component {
  render() {
    return (
      <div className="infoMain">
        <div className="infoContainer">
          <div className="infoImgContainer">
            <img
              className="image"
              src={require('./../../img/images/erlend_posing.jpg')}
            />
          </div>
          <div className="infoTextContainer">
            <div className="textAlignBox">
              <div className="infoTitle">
                <h2>Vår historie</h2>
              </div>
              <div className="infoTextBlock">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MonsrudInfo;
