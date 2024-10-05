import React from 'react'
import { mobileLinks } from '../../constants'
import { NavLink, useLocation } from 'react-router-dom'

const MobileNav = () => {
  const location = useLocation()

  return (
    <div className='fixed bottom-0 h-20 border-t w-full flex items-center px-[30px] justify-between'>
      {/* REGULAR LINKS */}
      {mobileLinks.map(item => (
        <NavLink key={item.id} to={item.path} className='flex justify-center items-center flex-col gap-[5px]'>
          {location.pathname === item.path ? <img src={item.iconActive} alt={item.title}/> : <img src={item.icon} alt={item.title}/>}
          <p className='text-[10px]'>{item.title}</p>
        </NavLink>
      ))}
      {/* ACCOUNT LINK */}
      <NavLink to='/account' className='flex justify-center items-center flex-col gap-[5px]'>
        <div className='text-white text-[10px] h-[25px] w-[25px] bg-cViolet rounded-full flex items-center justify-center'>M</div>
        <p className='text-[10px]'>Account</p>
      </NavLink>
    </div>
  )
}

export default MobileNav