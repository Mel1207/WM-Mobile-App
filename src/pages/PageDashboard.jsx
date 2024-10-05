import React, { useState } from 'react'
import Button from '../components/Button'
import ThemeCard from '../components/Cards/ThemeCard'
import BalanceCard from '../components/Cards/BalanceCard'
import ExpenseCard from '../components/Cards/ExpenseCard'
import Filter from '../components/Filter'

const PageDashboard = () => {
  const [userWallet, setUserWallet] = useState({
    accName: 'Mel John Pualon',
    accNumber: '09123451298',
    accCreation: '09/10/2024',
    theme: 'theme-1'
  })

  return (
    <div className='container'>
      {/* GREETINGS */}
      <div className='flex items-center justify-between mt-4 mb-[25px]'>
        <div>
          <h1 className='text-base font-bold text-cBlack10 md:text-xl'>Welcome back Mel 👋</h1>
          <p className='text-cBlack20'>How I can help you?</p>
        </div>
        <Button btnTitle='New' classList='bg-cViolet h-[45px] w-[50px] rounded-md text-white'/>
      </div>

      {/* CARD SECTION */}
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3 mb-[25px] md:mb-9'>
        <ThemeCard mainCardObj={userWallet}/>
        <BalanceCard totalBalance='₱25,035.00'/>
        <ExpenseCard totalExpense='₱25,035.00'/>
      </div>

      {/* TRANSACTIONS AND CARD LIST */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 pb-[100px]'>
        <div className='col-span-1 md:col-span-2'>
          <h2 className='text-base font-semibold mb-[5px]'>Transaction History</h2>
          <Filter />
          <div className='w-full p-[10px] border rounded-[10px]'>
            <div className='bg-cWhite10 py-3 px-[10px] rounded-[5px] font-semibold text-sm flex justify-between items-center'>
              <p>Transaction</p>
              <p>Amount</p>
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
            <div className='p-[10px] border-b'>
              content here
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <h2 className='text-base text-cBlack10 font-bold'>My Cards</h2>
          <div className=''>
            table inside
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageDashboard