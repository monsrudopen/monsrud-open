import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a href="http://www.vg.no" target="_blank" rel="noopener noreferrer">
      <div className={styles.Boxed}>Doner Her!</div>
    </a>
  );
}

export default Donatebutton;
