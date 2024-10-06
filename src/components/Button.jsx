import React from 'react'
import iconPlus from '../assets/icon-plus.svg'

const Button = ({ classList, btnTitle, hasIcon, handle }) => {
  return (
    <button className={classList} onClick={handle}>
      {btnTitle}
      {hasIcon ? <img src={iconPlus} alt='add new'/> : null}
    </button>
  )
}

export default Button