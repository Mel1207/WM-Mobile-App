import { Route, Routes, useLocation } from "react-router-dom"
import PageLanding from "./pages/PageLanding"
import PageDashboard from "./pages/PageDashboard"
import Navbar from "./components/Navigations/Navbar"
import PageTransactions from "./pages/PageTransactions"
import PageCards from "./pages/PageCards"
import MobileNav from "./components/Navigations/MobileNav"
import PageAccount from "./pages/PageAccount"

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' ? <Navbar /> : null }
      {location.pathname !== '/' ? <MobileNav /> : null }

      <Routes>
        <Route path="/" exact element={<PageLanding />}/>
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/transactions" element={<PageTransactions />}/>
        <Route path="/cards" element={<PageCards />}/>
        <Route path="/account" element={<PageAccount />}/>
      </Routes>
    </>
  )
}

export default App
