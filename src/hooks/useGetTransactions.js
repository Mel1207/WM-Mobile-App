import { useEffect, useState } from "react"

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([])

  const getTransactions = () => {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return {
    transactions,
    getTransactions
  }

  // fetch('http://localhost:8000/jobPost').then(res => res.json()).then(data => setJobPost(data))
}