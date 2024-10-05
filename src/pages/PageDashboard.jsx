import React, { useState } from 'react'
import Button from '../components/Button'
import ThemeCard from '../components/Cards/ThemeCard'
import BalanceCard from '../components/Cards/BalanceCard'
import ExpenseCard from '../components/Cards/ExpenseCard'
import Filter from '../components/Filter'
// import { useGetTransactions } from '../hooks/useGetTransactions'
import iconTransfer from '../assets/icon-transfer.svg'
import iconDelivery from '../assets/icon-delivery.svg'
import iconGrocery from '../assets/icon-grocery.svg'
import iconWork from '../assets/icon-work.svg'
import iconCredit from '../assets/icon-credit.svg'
import { transactions } from '../constants'

const PageDashboard = () => {
  const [userWallet, setUserWallet] = useState({
    accName: 'Mel John Pualon',
    accNumber: '09123451298',
    accCreation: '09/10/2024',
    theme: 'theme-1'
  })

  // const { transactions, getTransactions } = useGetTransactions()

  return (
    <div className='container'>
      {/* GREETINGS */}
      <div className='flex items-center justify-between mt-4 mb-[25px]'>
        <div>
          <h1 className='text-base font-bold text-cBlack10 md:text-xl'>Welcome back Mel 👋</h1>
          <p className='text-cBlack20'>How I can help you?</p>
        </div>
        <Button classList='flex justify-center items-center bg-cViolet md:hidden h-[45px] w-[50px] rounded-md text-white' hasIcon={true}/>
        <Button btnTitle='New transaction' classList='justify-center items-center gap-[10px]
         bg-cViolet hidden md:flex h-[45px] px-[15px] rounded-md text-white text-[14px]' hasIcon={true}/>
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
          <div className='flex flex-col gap-[5px] md:flex-row md:justify-between md:items-center mb-5'>
            <h2 className='text-base font-bold'>Transaction History</h2>
            <Filter />
          </div>
          <div className='w-full p-[10px] border rounded-[10px] md:p-5 overflow-hidden'>
            <div className='bg-cWhite10 py-3 px-[10px] rounded-[5px] font-semibold text-sm flex justify-between items-center md:grid md:grid-cols-[100px,180px,100px,100px,1fr] md:gap-[10px]'>
              <p>Transaction</p>
              <p className='hidden md:block'>Description</p>
              <p className='hidden md:block'>Date</p>
              <p className='hidden md:block'>Status</p>
              <p className='text-right'>Amount</p>
            </div>
            {transactions.map(item => (
              <div className='p-[10px] border-b flex justify-between items-center md:grid md:grid-cols-[100px,180px,100px,100px,1fr] gap-[10px]' key={item.id}>
                <div className='flex gap-[15px]'>
                  {item.category === 'transfer' ? <img src={iconTransfer} alt="icon transfer" /> : null}
                  {item.category === 'delivery' ? <img src={iconDelivery} alt="icon transfer" /> : null}
                  {item.category === 'groceries' ? <img src={iconGrocery} alt="icon transfer" /> : null }
                  {item.category === 'work' ? <img src={iconWork} alt="icon transfer" /> : null }
                  {item.category === 'credit' ? <img src={iconCredit} alt='icon credit'/> : null }
                  <div className='md:hidden'> 
                    <p className='text-sm font-medium text-cBlack10 mb-1 truncate max-w-[160px]'>{item.description}</p>
                    <p className='text-xs text-cBlack20'>{item.date}</p>
                  </div>
                </div>
                <p className='hidden md:block truncate'>{item.description}</p>
                <p className='hidden md:block text-xs text-cBlack20 '>{item.date}</p>
                <p className={`hidden md:block capitalize ${item.status === 'complete' ? 'complete' : 'pending'}`}>{item.status}</p>
                <p className={`text-right font-semibold ${item.type === 'expense' ? 'text-cRed' : 'text-cGreen'}`}>
                  {item.type === 'expense' ? <span>-</span> : <span>+</span>}
                  {item.amount}.00
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
          <h2 className='text-base text-cBlack10 font-bold mb-5'>My Cards</h2>
          <div className='w-full p-[10px] border rounded-[10px] md:p-5'>
            table inside
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageDashboard