import React from 'react';
import style from './Slider.module.css'
interface ISliderProps {
  onChange(value: boolean): undefined
  value: boolean
}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
     return <div className={style.Slider} >
    <input type="checkbox" checked={props.value} onChange={() => {
    props.onChange(!props.value);
  }} />
  </div>;
};

export default Slider;
