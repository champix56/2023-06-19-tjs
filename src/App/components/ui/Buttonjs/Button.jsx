import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
const Button = (props) => {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        props.onButtonClick('au cas ou j\'ai ete cliqué')
      }}
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
      className={style.Button + " btn"}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  bgcolor: PropTypes.oneOf(["tomato", "skyblue", "lime"]),
  color: PropTypes.oneOf(["white", "black"]),
  children: PropTypes.any.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  onButtonClick: PropTypes.func,
};
export default Button;
