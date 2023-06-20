import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexH1Grow.module.css";
/**
 * composant FlexH1Grow
 * @param {{children: React.ReactElement|Array<React.ReactElement|string>|string}} props props du composant FlexH1Grow
 * @returns {React.ReactNode} rendu du composant Template
 */
const FlexH1Grow = (props) => {
  return (
    <div className={styles.FlexH1Grow} data-testid="FlexH1Grow">
      {props.children}
    </div>
  );
};

FlexH1Grow.propTypes = { children: PropTypes.any.isRequired };

FlexH1Grow.defaultProps = {};

export default FlexH1Grow;
