import React from "react";
import styles from "./Header.css";
import Authentication from "./Auth.jsx";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}></div>
      <Authentication></Authentication>
    </div>
  );
}
export default Header;
