import React from 'react'
import Hero from '../components/Hero'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default Home