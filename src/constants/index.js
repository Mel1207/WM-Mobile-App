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
    date: "10/06/2024"
  },
  {
    id: 2,
    description: "Parcel delivery payment",
    category: "delivery",
    type: "expense",
    status: "complete",
    date: "10/06/2024"
  },
  {
    id: 3,
    description: "Buy groceries",
    category: "groceries",
    type: "expense",
    status: "pending",
    date: "10/06/2024" 
  },
  {
    id: 4,
    description: "Payslip payment",
    category: "work",
    type: "income",
    status: "complete",
    date: "10/06/2024" 
  },
  {
    id: 5,
    description: "Credit card payment",
    category: "credit",
    type: "expense",
    status: "pending",
    date: "10/06/2024"
  },
  {
    id: 6,
    description: "Buy phone",
    category: "transfer",
    type: "expense",
    status: "pending",
    date: "10/06/2024" 
  },
  {
    id: 7,
    description: "Part time payment",
    category: "work",
    type: "income",
    status: "Pending",
    date: "10/06/2024"
  }
]