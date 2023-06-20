import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
/**
 * composant MemeForm
 * @param {{}} props props du composant MemeForm
 * @returns {React.ReactNode} rendu du composant Template
 */
const MemeForm = (props) => {
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
