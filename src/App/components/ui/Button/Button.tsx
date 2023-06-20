import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

export interface IButtonProps {
  onButtonClick?: Function
  children: string | React.ReactElement | Array<React.ReactElement | string>
  style?: object
  bgcolor?: 'skyblue' | 'tomato' | 'lime'
  color?: 'white' | 'black'
  type?: 'button' | 'reset' | 'submit'

}
let timeoutDescripteur:NodeJS.Timeout|undefined = undefined
const Button: React.FC<IButtonProps> = (props) => {
  // console.log(props);
  const [state, setstate] = useState({ isClicked: false, uneValeur: 'lambda' })
  useEffect(() => {
    if (state.isClicked) {
      timeoutDescripteur = setTimeout(() => {
        setstate({ ...state, isClicked: false });
      }, 350)
    }
    return ()=>{
      clearTimeout(timeoutDescripteur);
    }
  }, [state])
  useEffect(() => {
   //componentDidMount equiv
   //avec aucune valeur observer
  }, [])
  return (
    <button
      onClick={(evt) => {
        setstate({ ...state, isClicked: true })

        if (props.onButtonClick && typeof props.onButtonClick === 'function') {
          props.onButtonClick('au cas ou j\'ai ete cliqué')
        }
      }}
      style={{
        ...props.style,
        backgroundColor: props.bgcolor,
        color: props.color,
      }}
      type={props.type}
      className={`${style.Button} btn${state.isClicked ? ' ' + style.isClicked : ''}`}
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
