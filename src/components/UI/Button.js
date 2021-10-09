import React from 'react'
import './button.css'
const Button = (props) => {

    return (
        <button className='react_btn' type={props.type} style={props.style} onClick={props.onClick}>{props.name}</button>
    )
}

export default Button
