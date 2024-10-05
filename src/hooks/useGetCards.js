import { useEffect, useState } from "react"

export const useGetCards = () => {
  const [cardList, setCardList] = useState([])

  const getCards = () => {
    fetch('http://localhost:3000/cards')
      .then(res => res.json())
      .then(data => setCardList(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getCards()
  }, [])

  return {
    cardList, 
    getCards
  }
}