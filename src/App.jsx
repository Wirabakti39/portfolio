/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skill from './components/Skill'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Skill />
    <About />
    <Project />
    <Contact />
    <Footer />
    </>
  )
}

export default App
