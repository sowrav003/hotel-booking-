import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Rooms from "./pages/Rooms"
import RoomDetails from "./pages/RoomDetails"
import MyBookings from "./pages/MyBookings"


const App = () => {
  return (
    <div>
      <Navbar />
      <div className= "min-h-[70vh]">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Rooms />} />
            <Route path="/hotels/:id" element={<RoomDetails />} />
            <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App