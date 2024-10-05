import React, { useState } from 'react'
import Button from '../components/Button'
import iconExpense from '../assets/icon-expense.svg'
import ThemeCard from '../components/Cards/ThemeCard'
import BalanceCard from '../components/Cards/BalanceCard'
import ExpenseCard from '../components/Cards/ExpenseCard'

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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis quod voluptatibus odio totam placeat a iste enim deserunt eveniet expedita? Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam possimus eveniet. Tempora quo possimus natus nam debitis incidunt sapiente necessitatibus temporibus nihil totam, praesentium minima explicabo officiis id assumenda eligendi sed voluptatum exercitationem beatae nisi. Minus omnis voluptas itaque, reiciendis laboriosam, accusantium debitis ducimus quod autem dolorem temporibus laudantium ullam nemo exercitationem labore earum veritatis unde! Voluptas consequuntur ab error veritatis ipsam soluta dolor, doloremque ducimus sapiente mollitia ex neque officia. Sapiente quod laboriosam assumenda doloribus quaerat. Vitae quis consectetur dicta, aliquam ratione expedita, veritatis iusto voluptatibus dolores ullam nemo non architecto reiciendis repellendus ipsam eaque vel facilis recusandae?
        </div>
        <div className='hidden md:block'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, dolorem! Amet quaerat quo inventore quibusdam pariatur veniam minima assumenda est!
        </div>
      </div>
    </div>
  )
}

export default PageDashboard