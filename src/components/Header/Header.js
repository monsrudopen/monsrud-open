import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import DonateButton from '../DonateButton/DonateButton';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className={styles.HeaderPadding}>
      <div className={styles.Header}>
        <div className={styles.HeaderContainer}>
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
                <h6 className={styles.HeaderNumberSix}>
                  Tidligere turneringer
                </h6>
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
                <h6 className={styles.HeaderNumberSix}>Om oss</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
