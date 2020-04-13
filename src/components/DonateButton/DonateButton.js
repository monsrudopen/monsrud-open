import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a
      className={styles.text}
      href=""
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.Boxed}>
        <b>{window.innerWidth < 768 ? 'Doner' : 'Doner til Årets Formål'}</b>
      </div>
    </a>
  );
}

export default Donatebutton;
