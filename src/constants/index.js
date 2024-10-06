import iconDashboard1 from '../assets/icon-dashboard.svg'
import iconDashboard2 from '../assets/icon-dashboard-active.svg'
import iconCard1 from '../assets/icon-card.svg'
import iconCard2 from '../assets/icon-card-active.svg'
import transactions1 from '../assets/icon-transaction.svg'
import transactions2 from '../assets/icon-transaction-active.svg'

export const mobileLinks = [
  {
    id: 1, 
    path: '/dashboard',
    title: 'Dashboard',
    iconActive: iconDashboard2,
    icon: iconDashboard1
  },
  {
    id: 2, 
    path: '/cards',
    title: 'My cards',
    iconActive: iconCard2,
    icon: iconCard1
  },
  {
    id: 3, 
    path: '/transactions',
    title: 'Transactions',
    iconActive: transactions2,
    icon: transactions1
  }
]

export const transactions = [
  {
    id: 1,
    description: "Paid tuition",
    category: "transfer",
    type: "expense",
    status: "pending",
    date: "10/06/2024",
    amount: 10000
  },
  {
    id: 2,
    description: "Parcel delivery payment",
    category: "delivery",
    type: "expense",
    status: "complete",
    date: "10/06/2024",
    amount: 250
  },
  {
    id: 3,
    description: "Buy groceries",
    category: "groceries",
    type: "expense",
    status: "pending",
    date: "10/06/2024",
    amount: 3500
  },
  {
    id: 4,
    description: "Payslip payment",
    category: "work",
    type: "income",
    status: "complete",
    date: "10/06/2024",
    amount: 20500
  },
  {
    id: 5,
    description: "Credit card payment",
    category: "credit",
    type: "expense",
    status: "pending",
    date: "10/06/2024",
    amount: 4420
  },
  {
    id: 6,
    description: "Buy phone",
    category: "transfer",
    type: "expense",
    status: "pending",
    date: "10/06/2024",
    amount: 8000
  },
  {
    id: 7,
    description: "Part time payment",
    category: "work",
    type: "income",
    status: "Pending",
    date: "10/06/2024",
    amount: 12500
  }
]

export const cards = [
  {
    id: 1,
    cardName: "BPO master card",
    cardNumber: "001234502101",
    expDate: "11/20/2035",
    limmit: 45000,
    cardCode: 'bpo'
  },
  {
    id: 2,
    cardName: "Union blink gold card",
    cardNumber: "001237429920",
    expDate: "11/20/2035",
    limmit: 60000,
    cardCode: 'ub'
  },
  {
    id: 3,
    cardName: "East wood master card",
    cardNumber: "001334592118",
    expDate: "11/20/2035",
    limmit: 25000,
    cardCode: 'ew'
  },
  {
    id: 4,
    cardName: "Chino blink rewards",
    cardNumber: "001132532151",
    expDate: "11/20/2035",
    limmit: 35000,
    cardCode: 'cb'
  },
  {
    id: 5,
    cardName: "Chino blink rewards",
    cardNumber: "001132532151",
    expDate: "11/20/2035",
    limmit: 35000,
    cardCode: 'cb'
  },
  {
    id: 6,
    cardName: "Chino blink rewards",
    cardNumber: "001132532151",
    expDate: "11/20/2035",
    limmit: 35000,
    cardCode: 'cb'
  },
  {
    id: 7,
    cardName: "Chino blink rewards",
    cardNumber: "001132532151",
    expDate: "11/20/2035",
    limmit: 35000,
    cardCode: 'cb'
  },
  {
    id: 8,
    cardName: "Chino blink rewards",
    cardNumber: "001132532151",
    expDate: "11/20/2035",
    limmit: 35000,
    cardCode: 'cb'
  },
]

export const tabItems = [
  {
    id: 1,
    tabTitle: 'All',
  },
  {
    id: 2,
    tabTitle: 'Pending',
  },
  {
    id: 3,
    tabTitle: 'Completed',
  }
]