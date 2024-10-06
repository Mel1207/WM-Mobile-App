import { useState } from "react"
import { useGetCards } from "./useGetCards"

export const useDeleteCard = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isDeleted, setIsDeleted] = useState(false)
  const { getCards } = useGetCards()

  const deleteCard = (id) => {
    fetch(`http://localhost:3000/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Failed to delete the item')
      }
      getCards()
    })
    .catch(err => {
      setError(err.message)
    })
  }

  return {
    deleteCard, error, isDeleted
  }
}