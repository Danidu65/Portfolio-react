import About from "./component/About"
import Contact from "./component/Contact"
import Hero from "./component/Hero"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import Services from "./component/Services"
function App() {

  return (
    <div className="w-full h-full bg-[#000000] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
