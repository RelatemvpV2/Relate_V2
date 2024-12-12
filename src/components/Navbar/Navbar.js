import React from "react";
import { useTranslation } from 'react-i18next';


import './navbar.css'

const Navbar = () => {

  const { t, i18n } = useTranslation();
  return (
    <nav style={styles.navbar} className="navbar">
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            {t('NAV_ABOUT')}
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#services" style={styles.navLink}>
            {t('NAV_SERVICES')}
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#therapists" style={styles.navLink}>
          {t('NAV_THERAPISTS')}
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>
          {t('NAV_CONTACT')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {

  navList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: "inline-block",
    margin: "0 10px",
  },
  navLink: {
    color: "#F9EEE1",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: "0.36px",
    textDecoration: "none",
  },
};

export default Navbar;
