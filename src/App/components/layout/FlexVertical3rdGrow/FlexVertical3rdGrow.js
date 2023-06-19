import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexVertical3rdGrow.module.css";

const FlexVertical3rdGrow = (props) => {
  return (
    <div className={styles.FlexVertical3rdGrow} data-testid="FlexVertical3rdGrow">
      {props.children}
    </div>
  );
};

FlexVertical3rdGrow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};

FlexVertical3rdGrow.defaultProps = {};

export default FlexVertical3rdGrow;
