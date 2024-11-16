import React, { useEffect, useState } from 'react'
import { useGlobalStore } from '../store/globalStore'
import iconClose from '../../assets/icon-close.svg'
import iconDropdown from '../../assets/icon-dropdown.svg'
import Button from '../Button'
import { useAddCard } from '../../hooks/useAddCard'
import { useGetCards } from '../../hooks/useGetCards'
import { useNavigate } from 'react-router-dom'


const CardModal = () => {
  // LOCAL STATE
  const [cardBranch, setCardBranch] = useState('bpo')
  const [limit, setLimit] = useState('20000')
  const [cardType, setCardType] = useState('cc')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [accName, setAccName] = useState('')

  const navigate = useNavigate()


  // GLOBAL STATE
  const { closeCardModal } = useGlobalStore()
  const { setCardList, cardList } = useGetCards()
  const { addCard } = useAddCard()

  // FUNCTION
  const handleSubmit = () => {
    const newCard = { 
      id: cardList.length + 1,
      cardCode: cardBranch, 
      cardName,
      cardNumber,
      limit,
      accName
    }
    addCard(newCard)
    location.reload()
    closeCardModal()
  }

  return (
    <div className='modal'>
      <div className='bg-white w-full rounded-[20px] p-5 max-h-[calc(100vh-250px)] overflow-y-auto'>
        {/* MODAL HEAD */}
        <div className='flex w-full items-center justify-between pb-[30px]'>
          <div>
            <span className='font-bold text-cBlack10 md:text-lg'>Add new card</span>
            <p>{cardBranch}</p>
            <p>{limit}</p>
            <p>{cardType}</p>
            <p>{cardName}</p>
            <p>{cardNumber}</p>
            <p>{accName}</p>
          </div>
          <button onClick={closeCardModal}>
            <img src={iconClose} alt="icon close" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Select branch</label>
          <select className='w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none text-sm' onChange={e => setCardBranch(e.target.value)}>
            <option value='bpo'>BPO</option>
            <option value='ub'>UB</option>
            <option value='ew'>EW</option>
            <option value='cb'>CB</option>
          </select>
          <img src={iconDropdown} alt="icon dropdown" className='absolute right-[15px] top-11'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card limit</label>
          <select className='text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none' onChange={e => setLimit(e.target.value)}>
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
          <select className='text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] relative appearance-none' onChange={e => setCardType(e.target.value)}>
            <option value='cc'>Credit card</option>
          </select>
          <img src={iconDropdown} alt="icon dropdown" className='absolute right-[15px] top-11'/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card name</label>
          <input type='text' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter card name' onChange={e => setCardName(e.target.value)}/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Card number</label>
          <input type='number' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter card number' onChange={e => setCardNumber(e.target.value)}/>
        </div>

        <div className='relative mb-[15px]'>
          <label className='text-sm mb-2 block font-semibold'>Account name</label>
          <input type='text' className='text-inherit placeholder:text-inherit placeholder:text-sm w-full h-[45px] rounded-lg border font-inter px-[15px] placeholder:text-cBlack20' placeholder='Enter account name' onChange={e => setAccName(e.target.value)}/>
        </div>

        {/* MODAL FOOTER */}
        <div className='flex justify-between items-center pt-[30px]'>
          <Button classList='btn-outlined-secondary px-[15px]' btnTitle='Cancel' handle={closeCardModal} />
          <Button classList='btn-primary px-[15px]' btnTitle='Submit' handle={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default CardModal