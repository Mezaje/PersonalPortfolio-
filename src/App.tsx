import { useState } from 'react'
import './App.css'
import Hero from './component/hero'
import Nav from './component/nav'
import AboutMe from './component/aboutMe'
import Skill from './component/skill'
import Experience from './component/experience'
import Footer from './component/footer'
import Contact from './component/contact'

function App() {

  return (
    <div >
      <Nav/>
    <main>
      <Hero/>
      <AboutMe/>
      <Skill/>
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  </div>
  )
}

export default App
