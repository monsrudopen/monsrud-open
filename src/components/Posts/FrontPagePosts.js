import React from 'react';
import PostRow from './Post';
import styles from './FrontPagePosts.module.css';

const FrontPagePosts = () => {
  const postItems = [
    {
      title: 'Live',
      text: 'Kommer snart',
      image: require('./../../img/images/postImage.png'),
      link: '/Live'
    },
    {
      title: 'Turneringer',
      text: 'Les om de ulike årene',
      image: require('./../../img/images/postImage2.png'),
      link: '/Competitions'
    },
    {
      title: 'Om oss',
      text: 'Les om Monsrud Open',
      image: require('./../../img/images/postImage3.png'),
      link: '/About'
    }
  ];

  return (
    <div className={styles.LinkContainer}>
      {postItems.map((value, index) => (
        <div key={index} className={styles.LinkWrapper}>
          <a href={value.link}>
            <div className={styles.ImageContainer}>
              <div className={styles.LinkText}>{value.text}</div>
              <div className={styles.LinkTitle}>{value.title}</div>
              <img
                alt={value.title}
                className={styles.PostImage}
                src={value.image}
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FrontPagePosts;
