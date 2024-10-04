import React from 'react'
import Button from '../components/Button'
import TagComp from '../components/TagComp'
import mobileLandingImage from '../assets/mobile-landing-image.png'

const PageLanding = () => {
  return (
    <div className='h-screen flex flex-col font-inter'>
      {/* <div className="bg-[url('./assets/mobile-landing-bg.png')] h-[55%] bg-center w-full bg-no-repeat bg-cover"></div> */}
      <div className='py-[40px] px-[20px]'>
        <img src={mobileLandingImage} alt="Mobile landing image" className='h-[422px] object-cover rounded-[20px] w-full'/>
      </div>
      <div className='p-[20px] flex flex-col align-middle h-auto justify-center'>
        <TagComp tagTitle='Featured app'/>
        <h1 className=' text-[20px] font-semibold mb-[10px]'>Manage your cards fast and easy <br />with Walletmate</h1>
        <p className='text-cBlack10 mb-[20px]'>Join over a million+ users and enjoy fast and secure digital banking solutions.</p>
        <Button classList='rounded-md mb-4 h-[45px] bg-cViolet btn-primary w-full text-white' btnTitle='Get started'/>
        <Button btnTitle='Create an account' classList='btn rounded-md w-full h-[45px] border border-gray-900'/>
      </div>
    </div>
  )
}

export default PageLanding