import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a
      className={styles.text}
      href="https://qr.vipps.no/28/2/05/031/-PlVzDcjp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.Boxed}>
        <b>
          <span>Doner med Vipps</span>
          {/* <span className={styles.LongerTextForBigScreens}>
            til årets formål
          </span> */}
        </b>
      </div>
    </a>
  );
}

export default Donatebutton;
