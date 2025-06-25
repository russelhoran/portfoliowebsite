import Navbar from "./components/Navbar"
import AboutMe from "./components/AboutMe"
import { Proficiency } from "./components/Proficiency"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"
import Contact from "./components/Contact"
import  Copyright  from "./components/Copyright"
import LogoSlider from "./components/LogoSlider"
const page = () => {
  return (
    <div>
      <Navbar/>
      <AboutMe />
      <LogoSlider />
      <Proficiency />
      <Education />
      <Projects />
      <Experiences />
      <Contact />
      <Copyright />
    </div>
  )
}

export default page