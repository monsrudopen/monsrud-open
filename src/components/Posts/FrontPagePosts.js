import React from 'react';
import PostRow from './Post';
//import styles from './FrontPagePosts.module.css';

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

  return <PostRow postItems={postItems}></PostRow>;
};

export default FrontPagePosts;
