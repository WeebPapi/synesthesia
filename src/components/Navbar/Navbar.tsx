import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="synesthesia_logo" />
      </div>
      <div className={styles.links}>
        <ul></ul>
      </div>
    </nav>
  );
};

export default Navbar;
