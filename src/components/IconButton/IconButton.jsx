import './IconButton.scss'

import {  } from "react-icons/fa6";


import React from 'react'

const IconButton = ({ text, buttonIcon, onClick, color }) => {
    const ButtonIcon = buttonIcon
  return (
    <button className='icon-btn' onClick={onClick} style={{color: color}}>
        <ButtonIcon />
        <span className='btn-text'>{text}</span>
    </button>
  )
}

export default IconButton
