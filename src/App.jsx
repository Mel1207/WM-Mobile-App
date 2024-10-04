import { Route, Routes } from "react-router-dom"
import PageLanding from "./pages/PageLanding"
import PageDashboard from "./pages/PageDashboard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<PageLanding />}/>
        <Route path="/dashboard" element={<PageDashboard />} />
      </Routes>
    </>
  )
}

export default App
