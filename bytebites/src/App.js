import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Features from "./components/Features/Features"
import Testimonials from "./components/Testimonials/Testimonials"
import PricingPlan from "./components/PricingPlan/PricingPlan"
import CTA from "./components/CTA/CTA"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <PricingPlan />
      <CTA />
    </>
  )
}

export default App
