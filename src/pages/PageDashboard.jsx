import React, { useState } from 'react'
import Button from '../components/Button'
import iconGear from '../assets/icon-gear.svg'
import iconChip from '../assets/icon-chip.svg'

const PageDashboard = () => {
  const [userWallet, setUserWallet] = useState({
    accName: 'Mel John Pualon',
    accNumber: '09123451298',
    accCreation: '09/10/2024',
    theme: 'theme-1'
  })

  return (
    <div className='container'>
      <div className='flex items-center justify-between mt-4 mb-[25px]'>
        <div>
          <h1 className='text-base font-bold text-cBlack10'>Welcome back Mel 👋</h1>
          <p className='text-cBlack20'>How I can help you?</p>
        </div>

        <Button btnTitle='New' classList='bg-cViolet h-[45px] w-[50px] rounded-md text-white'/>
      </div>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3'>
        <div className="theme-card flex justify-between flex-col">
          <div className='flex justify-between items-center'>
            <p>{userWallet.accCreation}</p>
            <img src={iconGear} alt="icon gear" />
          </div>
          <div>
            <img src={iconChip} alt="icon chip" className='h-[25px] mr-auto'/>
            <h2 className='text-[25px] font-bold'>{userWallet.accNumber}</h2>
          </div>
          <div>
            <p className='text-[10px] mb-[5px]'>Account name</p>
            <h3 className='font-bold text-[14px]'>{userWallet.accName}</h3>
          </div>
        </div>
        <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px]'>2</div>
        <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px]'>3</div>
      </div>
    </div>
  )
}

export default PageDashboard