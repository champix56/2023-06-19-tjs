import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";
/**
 * composant TemplateName
 * @param {{children: React.ReactElement|Array<React.ReactElement|string>|string}} props props du composant TemplateName
 * @returns {React.ReactNode} rendu du composant Template
 */
const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

TemplateName.propTypes = { children: PropTypes.any.isRequired };

TemplateName.defaultProps = {};

export default TemplateName;
