import Feature from "./components/Feature"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"


const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <WorkFlow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
