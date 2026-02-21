import Navbar from "./components/Navbar"
import Hero from "./sections/Hero";
import About from "./sections/About"
import Skills from "./sections/Skill"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App