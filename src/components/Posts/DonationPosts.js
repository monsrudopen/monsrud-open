import React, { Component } from 'react';
import Post from './Post';
import './posts.css';

function DonationPosts(props) {
  const text1 =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  return (
    <div className="postContainer">
      <div className="postsRow">
        <Post
          title="Røde Kors"
          text={text1}
          image={require('./../../img/images/postImage.png')}
        />
        <Post
          title="Redd Barna"
          text={text1}
          image={require('./../../img/images/postImage2.png')}
        />
        <Post
          title="Flyktninghjelpen"
          text={text1}
          image={require('./../../img/images/postImage3.png')}
        />
      </div>
    </div>
  );
}

export default DonationPosts;
