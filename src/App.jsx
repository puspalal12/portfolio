import React, {useEffect} from 'react'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Education from './pages/Education'
import AOS from 'aos';
import 'aos/dist/aos.css';   




const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App