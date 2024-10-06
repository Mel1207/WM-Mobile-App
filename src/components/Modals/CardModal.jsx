import React from 'react'
import { useGlobalStore } from '../store/globalStore'
import iconClose from '../../assets/icon-close.svg'
import iconDropdown from '../../assets/icon-dropdown.svg'
import Button from '../Button'


const CardModal = () => {
  const { closeCardModal } = useGlobalStore()

  return (
    <div className='modal'>
      <div className='bg-white w-full rounded-[20px] p-5 max-h-[calc(100vh-100px)] overflow-y-auto'>
        {/* MODAL HEAD */}
        <div className='flex w-full items-center justify-between pb-[30px]'>
          <span className='font-bold text-cBlack10 md:text-lg'>Add new card</span>
          <button onClick={closeCardModal}>
            <img src={iconClose} alt="icon close" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Select branch</label>
          <select className='w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none text-sm'>
            <option value='bpo'>BPO</option>
            <option value='ub'>UB</option>
            <option value='ew'>EW</option>
            <option value='cb'>CB</option>
          </select>
          <img src={iconDropdown} alt="icon dropdown" className='absolute right-[15px] top-11'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card limit</label>
          <select className='text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none'>
            <option value='20000'>20,000</option>
            <option value='25000'>25,000</option>
            <option value='35000'>35,000</option>
            <option value='45000'>45,000</option>
            <option value='55000'>55,000</option>
            <option value='60000'>60,000</option>
          </select>
          <img src={iconDropdown} alt="icon dropdown" className='absolute right-[15px] top-11'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Type</label>
          <select className='text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none'>
            <option value='cc'>Credit card</option>
          </select>
          <img src={iconDropdown} alt="icon dropdown" className='absolute right-[15px] top-11'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card name</label>
          <input type='text' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter card name'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card number</label>
          <input type='number' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter card number'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Account name</label>
          <input type='text' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter account name'/>
        </div>

        {/* MODAL FOOTER */}
        <div className='flex justify-between items-center pt-[30px]'>
          <Button classList='btn-outlined-secondary px-[15px]' btnTitle='Cancel' handle={closeCardModal} />
          <Button classList='btn-primary px-[15px]' btnTitle='Submit' handle={closeCardModal}/>
        </div>
      </div>
    </div>
  )
}

export default CardModal