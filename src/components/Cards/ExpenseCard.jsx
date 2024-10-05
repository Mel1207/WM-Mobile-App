import React from 'react'
import iconExpense from '../../assets/icon-expense.svg'

const ExpenseCard = ({ totalExpense }) => {
  return (
    <div className='h-[132px] border rounded-[10px] p-[15px] md:h-[220px] flex flex-col justify-between'>
      <img src={iconExpense} alt="Icon expense" className='h-10 w-10 md:w-[50px] md:h-[50px]'/>
      <div>
        <span className='text-[14px] text-cBlack20'>Total expense</span>
        <p className='font-bold text-cBlack10 text-[18px] md:text-3xl'>{totalExpense}</p>
      </div>
    </div>
  )
}

export default ExpenseCard