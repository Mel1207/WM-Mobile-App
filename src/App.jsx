import { Route, Routes, useLocation } from "react-router-dom"
import PageLanding from "./pages/PageLanding"
import PageDashboard from "./pages/PageDashboard"
import Navbar from "./components/Navbar"
import PageTransactions from "./pages/PageTransactions"
import PageCards from "./pages/PageCards"

function App() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' ? <Navbar /> : null }
      <Routes>
        <Route path="/" exact element={<PageLanding />}/>
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/transactions" element={<PageTransactions />}/>
        <Route path="/cards" element={<PageCards />}/>
      </Routes>
    </>
  )
}

export default App
