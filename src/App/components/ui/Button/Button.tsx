import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

export interface IButtonProps {
  onButtonClick?: Function,
  children: string | React.ReactElement | Array<React.ReactElement | string>,
  style?: { width: string, height: string },
  bgcolor?: 'skyblue' | 'tomato' | 'lime',
  color?: 'white' | 'black',
  type?: 'button' | 'reset' | 'submit',

}
const Button: React.FC<IButtonProps> = (props) => {
  console.log(props);
  return (
    <button
      onClick={(evt) => {
        if(props.onButtonClick && typeof  props.onButtonClick==='function') { 
          props.onButtonClick('au cas ou j\'ai ete cliqué') 
        }
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
