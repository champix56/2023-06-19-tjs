import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      {props.children}
    </div>
  );
};

TemplateName.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};

TemplateName.defaultProps = {};

export default TemplateName;
