import React from 'react'
import Button from '../components/Button'

const PageLanding = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className="bg-[url('./assets/Left.png')] h-[50%] bg-center w-full bg-no-repeat bg-cover"></div>
      <div className='p-[20px] flex flex-col align-middle h-[50%] justify-center'>
        <h1 className=' text-[20px] font-semibold mb-[20px]'>Manage your cards fast and easy <br />with Walletmate</h1>
        <p className='mb-[20px]'>World’s best wallet management app to help you
        monitor your wallet and cards online. Our secured and safe transactions back by #1 cyber digital IT in the Philippines </p>
        <Button classList='rounded-md mb-4 h-[45px] bg-cViolet btn-primary w-full text-white' btnTitle='Get Started'/>
        <Button btnTitle='Create an account' classList='btn rounded-md w-full h-[45px] border border-gray-900'/>
      </div>
    </div>
  )
}

export default PageLanding