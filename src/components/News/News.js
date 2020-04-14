import React from 'react';
import styles from './News.module.css';
import { news } from '../../database/dataloader';

const News = () => {
  return (
    <div className={styles.NewsSiteContainer}>
      <div className={styles.NewsTitle}>
        <h2>Nyheter</h2>
      </div>
      <div className={styles.NewsContentWrapper}>
        <div className={styles.ErlendsLine}> </div>
        <div className={styles.News}>
          {news.map(n => (
            <div className={styles.TotalWrapper}>
              <div className={styles.DateWrapper}>
                <div className={styles.NewsDate}>{n.date}</div>
              </div>
              <div className={styles.NewsContainer}>
                <div className={styles.NewsHeadline}> {n.title} </div>
                <div className={styles.NewsHeadlineDate}>{n.date}</div>
                <div className={styles.NewsIndex}>{n.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
