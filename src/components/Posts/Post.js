import React, { Component } from 'react';

import './posts.css';

function Post(props) {
  return (
    <a className="post" href={props.link}>
      <img className="postImage" src={props.image} />
      <div className="postTitle">{props.title}</div>
      <div className="postTexter">{props.text}</div>
    </a>
  );
}

export default Post;
