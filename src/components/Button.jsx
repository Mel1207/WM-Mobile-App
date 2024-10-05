import React from 'react'
import iconPlus from '../assets/icon-plus.svg'

const Button = ({ classList, btnTitle, hasIcon }) => {
  return (
    <button className={classList}>
      {btnTitle}
      {hasIcon ? <img src={iconPlus} alt='add new'/> : null}
    </button>
  )
}

export default Button