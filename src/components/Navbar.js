import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#therapists" style={styles.navLink}>
            Therapists
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    textAlign: "center",
    marginTop: "46px",
  },
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
