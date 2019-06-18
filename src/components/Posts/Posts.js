import React, { Component } from 'react';
import Post from './Post';
import './posts.css';

function Posts(props) {
  const text1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="postContainer">
      <div className="postsRow">
        <Post
          title="Donasjoner"
          text={text1}
          image={require('./../../img/images/postImage.png')}
          link="/Donations"
        />
        <Post
          title="Turneringer"
          text={text1}
          image={require('./../../img/images/postImage2.png')}
          link="/Competitions"
        />
        <Post
          title="Om oss"
          text={text1}
          image={require('./../../img/images/postImage3.png')}
          link="/About"
        />
      </div>
    </div>
  );
}

export default Posts;
