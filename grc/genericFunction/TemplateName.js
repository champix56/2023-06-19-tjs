import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";
/**
 * composant TemplateName
 * @param {{}} props props du composant TemplateName
 * @returns {React.ReactNode} rendu du composant Template
 */
const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
