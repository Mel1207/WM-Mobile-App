export const useAddCard = () => {
  const addCard = ({ cardName, cardNumber, expDate, limit, cardCode, accName}) => {
    fetch('http://localhost:3000/cards', {
      method: 'POST',
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        cardName, 
        cardNumber,
        expDate,
        limit,
        cardCode,
        accName
      })
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
    })
  }

  return {
    addCard
  }
}