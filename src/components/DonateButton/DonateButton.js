import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a href="http://www.vg.no" target="_blank" rel="noopener noreferrer">
      <div className={styles.Boxed}>
        Doner Her!
        <div
          className={styles.overlay}
          img
          src="http://www.monsrudopen.com/static/media/MonsrudLogo.4312c2be.png"
        />
      </div>
    </a>
  );
}

export default Donatebutton;
