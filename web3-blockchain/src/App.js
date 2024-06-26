import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/Pricing/Pricing"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Features />
      <Form />
      <Footer />
    </>
  )
}

export default App
