import React from 'react'
import classes from './Button.module.css'
const Button=props=>{
    return(
        <div className={`${props.className}`}>{props.children}</div>
    )
}

export default Button;