import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
/**
 * composant Navbar
 * @param {{}} props props du composant Navbar
 * @returns {React.ReactNode} rendu du composant Template
 */
const Navbar = (props) => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      Navbar Component
    </div>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
