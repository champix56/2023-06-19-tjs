import React from 'react'
import style from './Checkbox.module.css'
export interface ICheckboxProps {
    onChange(value: boolean): undefined
    value: boolean
    style?:object
}
const Checkbox: React.FC<ICheckboxProps> = (props) => {
    // const disabled = (props.disabled === true || props.disabled === 'disabled' ? true : false);
    return (
        <div className={style.Checkbox} style={{...style}}>
            <input type="checkbox" checked={props.value} onClick={()=>{}} />
            <label onClick={() => {
                props.onChange(!props.value)
            }} >
                <div className={style.tickMark}></div>
            </label>
        </div>
    )
}


export default Checkbox
