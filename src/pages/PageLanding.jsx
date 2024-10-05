import React from 'react'
import Button from '../components/Button'
import TagComp from '../components/TagComp'
import mobileLandingImage from '../assets/mobile-landing-image.png'
import dektopLandingImage from '../assets/desktop-landing-image.png'
import { Link } from 'react-router-dom'

const PageLanding = () => {
  return (
    <div className='h-screen flex flex-col font-inter md:flex-row'>
      <div className='py-[40px] px-[20px] md:p-0 md:w-[60%]'>
        <img src={mobileLandingImage} alt="Mobile landing image" className='h-[422px] object-cover rounded-[20px] md:h-full w-full md:hidden'/>
        <img className='hidden md:block h-full object-cover' src={dektopLandingImage} aria-label='desktop banner' alt='desktop label' />
      </div>
      <div className='px-5 max-w-[440px] flex flex-col align-middle mx-auto md:w-[548px] justify-center'>
        <TagComp tagTitle='Featured app' classList='mb-[10px] md:mb-[15px]'/>
        <h1 className='text-[20px] md:text-[25px] font-semibold mb-[10px] text-cBlack10'>Manage your cards fast and easy <br />with Walletmate</h1>
        <p className='text-cBlack20 mb-[20px]'>Join over a million+ users and enjoy fast and secure digital banking solutions.</p>
        <div className='flex gap-[15px] flex-col md:flex-row md:gap-[15px]'>
          <Link to='/dashboard' className='block w-full'>
            <Button classList='btn-primary' btnTitle='Get started'/>
          </Link>
          <Button classList='btn-outlined-secondary' btnTitle='Create an account' />
        </div>
      </div>
    </div>
  )
}

export default PageLanding