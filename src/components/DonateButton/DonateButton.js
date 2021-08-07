import React, { Component } from 'react';

import styles from './DonateButton.module.css';

function Donatebutton(props) {
  return (
    <a
      className={styles.text}
      href="https://minaksjon.unicef.no/team/monsrud-open-2021"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.Boxed}>
        <b>
          <span>Doner </span>
          <span className={styles.LongerTextForBigScreens}>
            til årets formål
          </span>
        </b>
      </div>
    </a>
  );
}

export default Donatebutton;
