import { useState } from 'react'
import './App.css'
import HeaderSection from './components/Header'
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-div' />
      <HeaderSection />
      <HomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  )
}

export default App
