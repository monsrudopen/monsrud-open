import React from 'react';

import './posts.css';

function Post(props) {
  return (
    <a className="post" href={props.link}>
      <img alt={props.title} className="postImage" src={props.image} />
      <div className="postTitle">{props.title}</div>
      <div className="postTexter">{props.text}</div>
    </a>
  );
}

export default Post;
