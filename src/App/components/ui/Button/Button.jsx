import React from 'react'
import style from './Button.module.css'
const Button=(props)=>{
    console.log(props)
    return <button type={props.type} className={style.Button+' btn'}>{props.children}</button>
}
export default Button;