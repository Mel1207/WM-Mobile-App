import React from 'react'
// import { useGetCards } from '../../hooks/useGetCards'
import Button from '../Button'
import { cards } from '../../constants'

const CardTable = () => {
  // const { cardList, getCards } = useGetCards()
  const cardList = cards

  return (
    <div className='w-full border rounded-[10px] relative max-h-[500px] overflow-y-auto table-container'>
      <div className='p-5'>
        <div className='bg-cWhite10 py-3 px-[10px] rounded-[5px] font-semibold text-sm flex justify-between items-center'>
          <p>Card details</p>
          <p>Actions</p>
        </div>
        {cardList.map(item => (
          <div className='py-[15px] px-[10px] border-b' key={item.id}>
            <p className='font-bold text-cBlack10 text-lg'>{item.limmit}</p>
            <p className='text-[14px] text-cBlack20'>{item.cardName}</p>
          </div>
        ))}
      </div>
      <div className='p-5 sticky bottom-0 left-0 right-0 w-full bg-white'>
        <Button btnTitle='Add new card' hasIcon={true} classList='bg-cViolet text-white w-full flex justify-center gap-[10px] items-center h-[45px] rounded-md text-[14px]'/>
      </div>
    </div>
  )
}

export default CardTable