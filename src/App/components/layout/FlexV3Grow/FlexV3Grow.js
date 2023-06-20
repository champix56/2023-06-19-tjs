import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexV3Grow.module.css";
/**
 * composant FlexV3Grow
 * @param {{children: React.ReactElement|Array<React.ReactElement|string>|string}} props props du composant FlexV3Grow
 * @returns {React.ReactNode} rendu du composant Template
 */
const FlexV3Grow = (props) => {
  return (
    <div className={styles.FlexV3Grow} data-testid="FlexV3Grow">
      {props.children}
    </div>
  );
};

FlexV3Grow.propTypes = { children: PropTypes.any.isRequired };

FlexV3Grow.defaultProps = {};

export default FlexV3Grow;
