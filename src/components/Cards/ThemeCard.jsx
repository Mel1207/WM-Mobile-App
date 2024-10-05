import React from 'react'
import iconGear from '../../assets/icon-gear.svg'
import iconChip from '../../assets/icon-chip.svg'

const ThemeCard = ({ mainCardObj }) => {
  return (
    <div className="theme-card flex justify-between flex-col">
      <div className='flex justify-between items-center'>
        <p className='text-[12px]'>{mainCardObj.accCreation}</p>
        <img src={iconGear} alt="icon gear" />
      </div>
      <div>
        <img src={iconChip} alt="icon chip" className='h-[25px] mr-auto mb-[5px]'/>
        <h2 className='text-[23px] font-bold'>{mainCardObj.accNumber}</h2>
      </div>
      <div>
        <p className='text-[10px] mb-[3px]'>Account name</p>
        <h3 className='font-bold text-[14px]'>{mainCardObj.accName}</h3>
      </div>
    </div>
  )
}

export default ThemeCard