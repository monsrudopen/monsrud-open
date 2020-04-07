import React from 'react';
import styles from './Posts.module.css';

function Post(props) {
  return (
    <a className={styles.Post} href={props.link}>
      <img alt={props.title} className={styles.PostImage} src={props.image} />
      <div className={styles.PostTitle}>{props.title}</div>
      <div className={styles.PostTexter}>{props.text}</div>
    </a>
  );
}

export default Post;
