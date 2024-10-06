import React from 'react'
import Button from '../components/Button'
import PageCardTable from '../components/tables/PageCardTable'


const PageCards = () => {
  return (
    <div className='container'>
      {/* GREETINGS */}
      <div className='flex items-center justify-between mt-4 mb-[25px]'>
        <div>
          <h1 className='text-base font-bold text-cBlack10 md:text-xl'>My cards</h1>
          <p className='text-cBlack20'>Here’s your card list</p>
        </div>
        <Button classList='flex justify-center items-center bg-cViolet md:hidden h-[45px] w-[50px] rounded-md text-white' hasIcon={true}/>
        <Button btnTitle='Add new card' classList='justify-center items-center gap-[10px] bg-cViolet hidden md:flex h-[45px] px-[15px] rounded-md text-white text-[14px]' hasIcon={true}/>
      </div>

      {/* CARDS LIST == TABLE */}
      <PageCardTable />
    </div>
  )
}

export default PageCards