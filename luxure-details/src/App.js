import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero/Hero"
import Details from "./components/Details/Details"
import Services from "./components/Services/Services"
import Booking from "./components/Booking/Booking"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Details />
              <Services />
              <Booking />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
