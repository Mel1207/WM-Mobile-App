import React, { useEffect } from 'react'
import { useGetCards } from '../../hooks/useGetCards'
import { useDeleteCard } from '../../hooks/useDeleteCard'
// import { cards } from '../../constants'

const PageCardTable = () => {
  const { cardList, getCards, setCardList } = useGetCards()
  const { deleteCard, error, isDeleted } = useDeleteCard()
  // const cardList = cards

  const handleDeleteCard = (id) => {
    deleteCard(id)
    setCardList(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <div className='w-full border rounded-[10px] relative mb-[100px]'>
      <div className='p-[10px]'>
        <div className='bg-cWhite10 py-3 px-[10px] rounded-[5px] font-semibold text-sm flex justify-between items-center'>
          <p>Card details</p>
          <p>Actions</p>
        </div>
        {cardList && cardList.map(item => (
          <div className='py-[15px] px-[10px] border-b flex justify-between items-center' key={item.id}>
            
            <div className='flex gap-[15px] items-center'>
              {item.cardCode === 'bpo' && <div className='bank-set bg-cBlue'>{item.cardCode.toUpperCase()}</div>}
              {item.cardCode === 'ub' && <div className='bank-set bg-cOrange'>{item.cardCode.toUpperCase()}</div>}
              {item.cardCode === 'ew' && <div className='bank-set bg-cGreen10'>{item.cardCode.toUpperCase()}</div>}
              {item.cardCode === 'cb' && <div className='bank-set bg-cRed'>{item.cardCode.toUpperCase()}</div>}
              <div>
                <p className='font-bold text-cBlack10 text-base'>{item.limmit}.00</p>
                <p className='text-[14px] text-cBlack20 truncate max-w-32'>{item.cardName}</p>
              </div>
            </div>
          
            <div className='flex gap-[15px]'>
              <a aria-label='button' type='button' className='text-cGreen text-sm cursor-pointer'>Edit</a>
              <a aria-label='button' type='button' className='text-cRed text-sm cursor-pointer' onClick={() => handleDeleteCard(item.id)}>Delete</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageCardTable