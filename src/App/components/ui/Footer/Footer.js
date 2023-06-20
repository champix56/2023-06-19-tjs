import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
/**
 * composant Footer
 * @param {{}} props props du composant Footer
 * @returns {React.ReactNode} rendu du composant Template
 */
const Footer = (props) => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      Footer Component
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
