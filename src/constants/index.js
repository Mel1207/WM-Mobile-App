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