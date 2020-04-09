import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a
      className={styles.text}
      href="http://www.vg.no"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.Boxed}>
        <b>Doner til årets formål</b>
      </div>
    </a>
  );
}

export default Donatebutton;
