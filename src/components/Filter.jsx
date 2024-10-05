import React, { useState } from 'react'
import { tabItems } from '../constants/index'

const Filter = () => {
  // LOCAL STATE 
  const [currentTab, setCurrentTab] = useState(1)

  // FUNCTION
  const changeTab = (id) => {
    setCurrentTab(id)
  }
  return (
    <div className='border rounded-[5px] flex gap-[5px] p-1'>
      {tabItems.map(item => (
        <p className={currentTab === item.id ? 'bg-cViolet text-white text-xs py-[2px] px-[5px] rounded-[3px]' : 'text-xs py-[2px] px-[5px] rounded-[3px]'} key={item.id} onClick={() => changeTab(item.id)}>{item.tabTitle}</p>
      ))}
    </div>
  )
}

export default Filter