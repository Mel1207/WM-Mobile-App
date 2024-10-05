import React from 'react'
import iconBalance from '../../assets/icon-balance.svg'

const BalanceCard = ({ totalBalance }) => {
  return (
    <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px] flex flex-col justify-between'>
      <img src={iconBalance} alt="Icon balance" className='h-10 w-10 md:w-[50px] md:h-[50px]' />
      <div>
        <span className='text-[14px] text-cBlack20'>Total balance</span>
        <p className='font-bold text-cBlack10 text-[18px] md:text-3xl'>{totalBalance}</p>
      </div>
    </div>
  )
}

export default BalanceCard