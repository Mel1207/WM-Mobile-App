import React, { useState } from 'react'
import Button from '../components/Button'
import iconGear from '../assets/icon-gear.svg'
import iconChip from '../assets/icon-chip.svg'
import iconBalance from '../assets/icon-balance.svg'
import iconExpense from '../assets/icon-expense.svg'

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
          <h1 className='text-base font-bold text-cBlack10 md:text-xl'>Welcome back Mel 👋</h1>
          <p className='text-cBlack20'>How I can help you?</p>
        </div>

        <Button btnTitle='New' classList='bg-cViolet h-[45px] w-[50px] rounded-md text-white'/>
      </div>
      {/* CARD SECTION */}
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 mb-[25px] md:mb-9'>
        <div className="theme-card flex justify-between flex-col">
          <div className='flex justify-between items-center'>
            <p className='text-[12px]'>{userWallet.accCreation}</p>
            <img src={iconGear} alt="icon gear" />
          </div>
          <div>
            <img src={iconChip} alt="icon chip" className='h-[25px] mr-auto mb-[5px]'/>
            <h2 className='text-[23px] font-bold'>{userWallet.accNumber}</h2>
          </div>
          <div>
            <p className='text-[10px] mb-[3px]'>Account name</p>
            <h3 className='font-bold text-[14px]'>{userWallet.accName}</h3>
          </div>
        </div>
        <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px] flex flex-col justify-between'>
          <img src={iconBalance} alt="Icon balance" className='h-10 w-10 md:w-[50px] md:h-[50px]' />
          <div>
            <span className='text-[14px] text-cBlack20'>Total balance</span>
            <p className='font-bold text-cBlack10 text-[18px] md:text-3xl'>₱25,035.00</p>
          </div>
        </div>
        <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px] flex flex-col justify-between'>
          <img src={iconExpense} alt="Icon expense" className='h-10 w-10 md:w-[50px] md:h-[50px]'/>
          <div>
            <span className='text-[14px] text-cBlack20'>Total expense</span>
            <p className='font-bold text-cBlack10 text-[18px] md:text-3xl'>₱25,035.00</p>
          </div>
        </div>
      </div>
      {/* TRANSACTIONS AND CARD LIST */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        <div className='col-span-1 md:col-span-2'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quod voluptatibus odio totam placeat a iste enim deserunt eveniet expedita?
        </div>
        <div className='hidden md:block'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorem! Amet quaerat quo inventore quibusdam pariatur veniam minima assumenda est!
        </div>
      </div>
    </div>
  )
}

export default PageDashboard