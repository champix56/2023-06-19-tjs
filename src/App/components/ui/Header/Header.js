import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    Meme<span className={styles.dot}>.</span>
    <span className={styles.react}>react</span>
  </div>
);
export default Header;
