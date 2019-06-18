import React, { Component } from 'react';

import './posts.css';

function Post(props) {
  return (
    <div className="post">
      <img className="postImage" src={props.image} />
      <div className="postTitle">
        <a href={props.link}>{props.title}</a>
      </div>
      <div className="postTexter">{props.text}</div>
    </div>
  );
}

export default Post;
