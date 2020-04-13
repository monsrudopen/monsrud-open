import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import DonateButton from '../DonateButton/DonateButton';
import { competitions } from './../../database/dataloader';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={styles.HeaderPadding}>
      <div className={styles.Header}>
        <div className={styles.HeaderContainer}>
          <div className={styles.HeaderContainerLeft}>
            <div className={styles.MonsrudLogo}>
              <a href="/">
                <img
                  width="65"
                  height="65"
                  alt="Monsrud Open Logo"
                  src={require('./../../img/icons/MonsrudLogo2.png')}
                />{' '}
              </a>
            </div>
            <div className={styles.HeaderDonateButton}>
              <DonateButton />
            </div>
          </div>
          <div className={styles.ReturnButtonSticky}>
            <Link to="/Competitions">
              <div className={styles.ReturnButton}>Tilbake</div>
            </Link>
            {competitions.map(c => (
              <Link to={'/Competitions/' + c.year}>
                <div className={styles.YearButton}>{c.year}</div>
              </Link>
            ))}
          </div>
          <button
            className={styles.HamburgerBar}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <div
              className={
                menuVisible ? styles.HamburgerMenuOpen : styles.HamburgerMenu
              }
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className={styles.MenuList}>
            <div
              className={menuVisible ? styles.MenuLinkMobile : styles.MenuLink}
            >
              <Link
                onClick={() => setMenuVisible(false)}
                style={{ color: 'white', textDecoration: 'none' }}
                to="/Competitions"
                rel="noopener noreferrer"
              >
                <div className={styles.HeaderNumberSix}>
                  Tidligere turneringer
                </div>
              </Link>
            </div>
            <div
              className={menuVisible ? styles.MenuLinkMobile : styles.MenuLink}
            >
              <Link
                onClick={() => setMenuVisible(false)}
                style={{ color: 'white', textDecoration: 'none' }}
                to="/About"
                rel="noopener noreferrer"
              >
                <div className={styles.HeaderNumberSix}>Om oss</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
