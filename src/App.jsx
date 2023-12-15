import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Packages from "./components/Pricing/Packages"
import ProcessOverview from "./components/ProcessOverview/ProcessOverview"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <ProcessOverview />
      <Testimonials />
      <Packages />
    </>
  )
}

export default App
