import React from 'react'

const Button = ({ classList, btnTitle }) => {
  return (
    <button className={classList}>{btnTitle}</button>
  )
}

export default Button