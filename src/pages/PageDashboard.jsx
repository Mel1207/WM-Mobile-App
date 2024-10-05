import React from 'react'
import Button from '../components/Button'

const PageDashboard = () => {
  return (
    <div className='container'>
      <div className='flex items-center justify-between mt-4'>
        <div>
          <h1 className='text-base font-bold text-cBlack10'>Welcome back Mel 👋</h1>
          <p className='text-cBlack20'>How I can help you?</p>
        </div>

        <Button btnTitle='New' classList='bg-cViolet h-[45px] w-[50px] rounded-md text-white'/>
      </div>

    </div>
  )
}

export default PageDashboard