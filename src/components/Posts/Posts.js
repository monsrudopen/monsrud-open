import React, { Component } from 'react';

import './posts.css';

class Posts extends Component {
  render() {
    return (
      <div className="postContainer">
        <div className="postsRow">
          <div className="post">
            <img
              className="postImage"
              src={require('./../../img/images/postImage.png')}
            />
            <div className="postTitle">Title</div>
            <div className="postTexter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </div>
          </div>
          <div className="post">
            <img
              className="postImage"
              src={require('./../../img/images/postImage2.png')}
            />
            <div className="postTitle">Title</div>
            <div className="postTexter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </div>
          </div>
          <div className="post">
            <img
              className="postImage"
              src={require('./../../img/images/postImage3.png')}
            />
            <div className="postTitle">Title</div>
            <div className="postTexter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
