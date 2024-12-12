import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Result from "./pages/Result"
import BuyCRedit from "./pages/BuyCRedit"
import Navbar from "./Components/Navbar"


function App() {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
     <Navbar />
     {/* all routs */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/result" element={<Result/>}/>
      <Route path="/buy" element={<BuyCRedit/>}/>
     </Routes>
    </div>
  )
}

export default App