import React from 'react'
import { Link } from 'react-router-dom'
import iconMobile from '../../assets/icon-wm-mobile.svg'
import iconNotification from '../../assets/icon-notification.svg'

const TopNav = () => {
  return (
    <nav className='h-[70px] w-full flex items-center'>
      <div className='px-5 w-full flex justify-between'>
        <Link to='/dashboard'>
          <img src={iconMobile} alt="Home" className='h-[35px]'/>
        </Link>
        <div className='flex gap-[15px]'>
          <Link to='/notifications' className='h-9 w-9 rounded-lg border flex items-center justify-center'>
            <img src={iconNotification} alt="Notification icon" />
          </Link>
          <Link to='/account'>
            <div className='h-9 w-9 bg-cViolet flex items-center justify-center rounded-full text-white font-semibold'>M</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default TopNav