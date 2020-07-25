import React from 'react';
import styles from './Posts.module.css';
import gsap from 'gsap';

const Post = props => {
  let year = null;
  let organization = null;
  let text = null;
  let linkBox = null;

  function mouseEnter(evt) {
    if (window.innerWidth >= 1080 && year) {
      gsap.to(linkBox, 0.5, { scale: 1.1 });
      gsap.to(year, 0.5, { top: '20%', scale: 0.6, color: '#c6a76a' });
      gsap.to(organization, 0.5, { top: '35%' });
      gsap.to(text, 1, { opacity: 1 });
    }
  }

  function mouseLeave(evt) {
    if (window.innerWidth >= 1080 && year) {
      gsap.to(linkBox, 0.5, { scale: 1 });
      gsap.to(year, 0.5, { top: '40%', scale: 1, color: 'white' });
      gsap.to(organization, 0.5, { top: '65%', color: 'white' });
      gsap.to(text, 0.5, { opacity: 0 });
    }
  }

  return (
    <a onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={props.link}>
      <div ref={div => (linkBox = div)} className={styles.ImageContainer}>
        {props.year ? (
          <div ref={div => (year = div)} className={styles.yearTitle}>
            {props.year}
          </div>
        ) : (
          <div className={styles.LinkTitle}>{props.title}</div>
        )}
        {props.organization && (
          <div
            ref={div => (organization = div)}
            className={styles.Organization}
          >
            {props.organization}
          </div>
        )}
        <div ref={div => (text = div)} className={styles.LinkText}>
          {props.text}
        </div>
        <img alt={props.title} className={styles.PostImage} src={props.image} />
      </div>
    </a>
  );
};

const PostRow = ({ postItems }) => {
  return (
    <div className={styles.LinkContainer}>
      {postItems.map((value, index) => (
        <div key={index} className={styles.LinkWrapper}>
          <Post
            image={value.image}
            title={value.title}
            text={value.text}
            link={value.link}
            organization={value.organization}
            year={value.year}
          ></Post>
        </div>
      ))}
    </div>
  );
};

export default PostRow;
