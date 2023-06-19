import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexHorizontal1RdGrow.module.css";

const FlexHorizontal1RdGrow = (props) => {
  return (
    <div className={styles.FlexHorizontal1RdGrow} data-testid="FlexHorizontal1RdGrow">
      {props.children}
    </div>
  );
};

FlexHorizontal1RdGrow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
};

FlexHorizontal1RdGrow.defaultProps = {};

export default FlexHorizontal1RdGrow;
